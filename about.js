document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".hero_container", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    
    gsap.from(".bottom_content p", {
        x: 200,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out"
    });

        gsap.from(".part1 img", {
        x: -200,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });

});

gsap.registerPlugin(ScrollTrigger);

  // Animate page-2 heading
  gsap.from(".page-2 h1", {
    scrollTrigger: {
      trigger: ".page-2 h1",
      start: "top 80%", // start when heading enters viewport
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out"
  });


