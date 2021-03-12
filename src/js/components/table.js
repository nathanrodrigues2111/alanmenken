import { $q, $qa } from "./helpers";

export const table = () => {
  var getCellValue = function (tr, idx) {
    return tr.children[idx].innerText || tr.children[idx].textContent;
  };

  var comparer = function (idx, asc) {
    return function (a, b) {
      return (function (v1, v2) {
        return v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2);
      })(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
    };
  };

  Array.prototype.slice.call($qa("th")).forEach(function (th) {
    th.addEventListener("click", function () {
      $qa("th").forEach((element) => {
        element.classList.remove("active");
        if (th.classList.contains("active")) {
          element.classList.remove("asc");
        }
      });
      th.classList.add("active");
      if (th.classList.contains("active")) {
        th.classList.toggle("asc");
      }
      var table = th.parentNode;
      while (table.tagName.toUpperCase() != "TABLE") table = table.parentNode;
      Array.prototype.slice
        .call(table.querySelectorAll("tr:nth-child(n+2)"))
        .sort(
          comparer(
            Array.prototype.slice.call(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach(function (tr) {
          table.appendChild(tr);
        });
    });
  });
};
