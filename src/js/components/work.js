import { $q, $qa } from "./helpers";

export const work = () => {
  const workList = $qa(".work-list ul li a");

  gsap.from(".gsap-down", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "elastic.out(1.5, 0.75)",
    stagger: 0.1,
  });

  const workSlider = new Swiper(".work-slider", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });

  workList.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      let singlePoster = e.currentTarget.getAttribute("index");
      if (singlePoster && !element.parentNode.classList.contains("active")) {
        workSlider.slideTo(singlePoster);
        gsap.from(".swiper-slide-active", {
          scale: 1.1,
          duration: 1,
          ease: "circ.Out",
          delay: 0.1,
        });

        workList.forEach((element) => {
          element.parentNode.classList.remove("active");
        });
        e.currentTarget.parentNode.classList.add("active");
      }
    });
  });
};
