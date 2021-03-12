import { $q, $qa } from "./helpers";

export const header = () => {
  const openMenuElement = $q("#menu-toggle");
  const FeedToggle = $q("#feed-toggle");
  const closeFeed = $q(".sidebar-close");
  const SlideMenu = $q(".menu");
  const bodyElement = $q("body");

  const siteOverlayOpen = () => {
    gsap.to("#BlockingOverlay", {
      opacity: 0.8,
      position: "fixed",
      duration: 0.5,
      ease: "circ.inOut",
    });
  };

  const siteOverlayClose = () => {
    gsap.to("#BlockingOverlay", {
      opacity: 0,
      duration: 0.5,
      ease: "circ.inOut",
    });
    gsap.to("#BlockingOverlay", {
      position: null,
      duration: 0.5,
      ease: "circ.inOut",
      delay: 0.5,
    });
  };

  if (openMenuElement != null) {
    openMenuElement.addEventListener("click", () => {
      bodyElement.classList.toggle("menu-open");
      if (bodyElement.classList.contains("menu-open")) {
        gsap.to(SlideMenu, {
          duration: 0.4,
          transform: "translate(0, 0)",
          ease: "circ.inOut",
        });
        gsap.from(".menu a", {
          opacity: 0,
          y: -10,
          duration: 0.8,
          ease: "circ.inOut",
          stagger: 0.1,
        });
        siteOverlayOpen();
      } else {
        gsap.to(SlideMenu, {
          duration: 0.4,
          transform: "translate(0, -100%)",
          ease: "circ.inOut",
        });
        siteOverlayClose();
      }
    });
  }

  if (FeedToggle != null) {
    FeedToggle.addEventListener("click", () => {
      gsap.to(".news-sidebar", {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "circ.inOut",
      });
      gsap.from(".sidebar-stagger", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: "circ.inOut",
        stagger: -0.1,
        delay: 0.2,
      });
      siteOverlayOpen();
    });

    FeedToggle.addEventListener("mouseover", () => {
      FeedToggle.classList.add("ring-hover");
    });

    FeedToggle.addEventListener("animationend", () => {
      FeedToggle.classList.remove("ring-hover");
    });
  }

  if (closeFeed != null) {
    closeFeed.addEventListener("click", () => {
      gsap.to(".news-sidebar", {
        opacity: 0,
        transform: "translate(-100%, 0)",
        duration: 0.5,
        ease: "circ.inOut",
      });
      siteOverlayClose();
    });
  }
};
