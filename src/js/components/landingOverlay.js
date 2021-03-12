import { $q, $qa } from "./helpers";

export const landingOverlay = () => {
  const mediaQueryMin = window.matchMedia("(min-width: 1800px)");
  const landingOverlay = $q(".landing-overlay");

  if (landingOverlay != null) {
    landingOverlay.addEventListener("click", () => {
      gsap.to(landingOverlay, { display: "none", opacity: 0, duration: 0.5 });

      if (mediaQueryMin.matches) {
        gsap.from(".swiper-slide", {
          scale: 0,
          duration: 0.9,
          ease: "elastic.out(0.9, 0.75)",
          delay: 0.5,
        });
        gsap.from(".home-grid-info", {
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: "elastic.out(1, 0.75)",
          delay: 1,
        });
      }
    });
  }
};
