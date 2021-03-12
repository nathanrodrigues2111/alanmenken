export const award = () => {
  const tl = gsap.timeline();
  tl.from(".awards-banner img", {
    opacity: 0,
    y: 100,
    duration: 0.9,
    ease: "circ.inOut",
    stagger: 0.2,
  })
    .from(".title-and-description h1", {
      opacity: 0,
      y: 100,
      duration: 0.9,
      ease: "circ.inOut",
    })
    .from(".title-and-description .description", {
      opacity: 0,
      y: 100,
      duration: 0.9,
      ease: "circ.inOut",
    })
    .from(".awards-count .single-award", {
      opacity: 0,
      y: 100,
      duration: 0.9,
      ease: "circ.inOut",
      stagger: 0.2,
    });
};
