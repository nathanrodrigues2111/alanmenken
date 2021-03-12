import { $q } from "./helpers";

export const homeCanvas = () => {
  const videoCanvas = $q("#video");
  if (videoCanvas) {
    var ctx = canvas.getContext("2d"),
      sw = 150,
      frame = document.createElement("canvas"),
      fctx = frame.getContext("2d");

    frame.width = 1455;
    frame.height = 912;

    video.addEventListener("playing", sliceAndDice, false);
    function sliceAndDice() {
      fctx.drawImage(video, 0, 0);

      for (var x = 0; x < frame.width; x += sw) {
        var y = Math.sin(x * 2);
        ctx.drawImage(
          frame,
          x,
          0,
          sw,
          frame.height,
          x * 1.1,
          y,
          sw,
          frame.height
        );
      }
      requestAnimationFrame(sliceAndDice);
    }
  }
};
