import { $q, $qa } from "./helpers";

export const homeGallery = () => {
  const galleryItems = $qa(".home-grid-slider .swiper-slide");
  const galleryItemsSingle = $q(".home-grid-slider .swiper-slide");
  const video = $qa("video");
  const gridVideo = $q(".grid-video");
  const body = $q("body");
  const ovtl = gsap.timeline();
  const closeButton = $q(".close-button");
  const mediaQueryMin = window.matchMedia("(min-width: 1400px)");

  const homeGridSlider = new Swiper(".home-grid-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    resizeReInit: true,
    breakpoints: {
      768: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 10,
        spaceBetween: 20,
      },
    },
    on: {
      reachEnd: function () {
        this.snapGrid = [...this.slidesGrid];
      },
    },
  });

  const changeText = (title, songTitle) => {
    const tl = gsap.timeline();
    tl.to(".home-grid-info .hide", { opacity: 1 });
    tl.to(
      ".home-grid-info .title",
      { text: title, duration: 0.9, ease: "circ.inOut" },
      "-=.5"
    );
    tl.to(
      ".home-grid-info p",
      { text: songTitle, duration: 0.9, ease: "circ.inOut" },
      "-=1"
    );
  };

  if (closeButton != null) {
    closeButton.addEventListener("click", (e) => {
      ovtl.reverse();
      gridVideo.pause();
    });
  }

  video.forEach((element) => {
    element.pause;
  });

  if (galleryItems != null && galleryItemsSingle != null) {
    const GridSingleDefaultWidth = galleryItemsSingle.offsetWidth;

    galleryItems.forEach((element) => {
      if (mediaQueryMin.matches) {
        element.addEventListener("mouseover", (e) => {
          const video = e.currentTarget.querySelector("video");
          const songTitle = e.currentTarget.getAttribute("data-song");
          const title = e.currentTarget.getAttribute("data-title");
          changeText(title, songTitle);

          if (video != null) {
            video.play[0];
            video.muted = false;
            video.volume = 0;
            gsap.to(e.currentTarget, { width: GridSingleDefaultWidth + 115 });
            gsap.to(video, { duration: 0.5, opacity: 1 });
            gsap.to(video, { duration: 1, volume: 0.1, delay: 0.5 });
          }
        });

        element.addEventListener("mouseleave", (e) => {
          const video = e.currentTarget.querySelector("video");

          const tl = gsap.timeline();
          tl.to(".home-grid-info .hide", { opacity: 0 });
          tl.to(
            ".home-grid-info .title",
            { text: "Featured Work", duration: 0.9, ease: "circ.inOut" },
            "-=.5"
          );
          tl.to(
            ".home-grid-info p",
            {
              text: "Explore some of Alan's featured work",
              duration: 0.9,
              ease: "circ.inOut",
            },
            "-=1"
          );

          if (video != null) {
            gsap.to(e.currentTarget, {
              duration: 0.5,
              delay: 0.1,
              width: GridSingleDefaultWidth,
            });
            gsap.to(video, { duration: 0.5, opacity: 0 });
            video.muted = true;
          }
        });
      }

      element.addEventListener("click", (e) => {
        body.style.overflow = "hidden";
        const videoSrc = e.currentTarget.getAttribute("data-full-video");

        if (videoSrc != null) {
          ovtl.restart();
          ovtl.to(galleryItems, {
            marginTop: 0,
            duration: 0.9,
            ease: "circ.inOut",
          });
          ovtl.to(
            ".back-overlay",
            { autoAlpha: 1, scale: 1, duration: 0.5, ease: "circ.inOut" },
            "-=.5"
          );
          ovtl.to(".grid-video-container", {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            ease: "circ.inOut",
          });

          gridVideo.setAttribute("src", videoSrc);
          setTimeout(() => {
            gridVideo.play();
          }, 1500);
        }
      });
    });
  }

  //Bottom homepage buttons
  if ($q(".single-mode") != null) {
    $q(".single-mode").addEventListener("click", (e) => {
      gsap.to(".home-grid-slider", {
        display: "none",
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "elastic.out(0.4, 0.75)",
      });
      gsap.to(".single-mode-wrapper", {
        display: "block",
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "elastic.out(0.4, 0.75)",
      });
    });
  }

  if ($q(".stack-mode") != null) {
    $q(".stack-mode").addEventListener("click", (e) => {
      gsap.to(".home-grid-slider", {
        display: "block",
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "elastic.out(0.9, 0.75)",
      });
      gsap.to(".single-mode-wrapper", {
        display: "none",
        scale: 0,
        opacity: 0,
        duration: 0.9,
        ease: "elastic.out(0.9, 0.75)",
      });
    });
  }
};
