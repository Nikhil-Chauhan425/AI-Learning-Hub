let headings = document.querySelectorAll("#items h4");

headings.forEach(h4 => {
  h4.addEventListener("mouseover", function () {
    h4.style.color = "red";
  });

  h4.addEventListener("mouseout", function () {
    h4.style.color = "black";
  });
});

gsap.registerPlugin(ScrollTrigger);

let hero = gsap.timeline()
hero.from("#nav h1",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5,
})

hero.from("#nav h4, button",{
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:0.2,
})
hero.from(".centre_1 h1",{
    x:-300,
    opacity:0,
    duration:0.5,
})

hero.from(".centre_1 p",{
    x:-200,
    opacity:0,
    duration:0.5,
})
hero.from(".centre_1 pre",{
    x:-100,
    opacity:0,
    duration:0.5,
    
})
hero.from(".centre_2 img",{
    x:300,
    opacity:0,
    duration:0.5,
    
},"-=1")

hero.from(".bottom_sec img",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    
})




gsap.from(".services h1", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 90%", 
    end: "top 60%",
    scrub: 1,
    
  },
  x:-300,
  opacity: 0,
  duration: 1
});

gsap.from(".services pre", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 85%", 
    end: "top 60%",
    scrub: 1,
    
  },
  x:-300,
  opacity: 0,
  duration: 1
});


gsap.utils.toArray(".elem").forEach((elem) => {
  let fromX = elem.classList.contains("left") ? -300 : 300;

  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
      end: "top 60%",
      scrub: 1,
      
    },
    x: fromX,
    opacity: 0,
    duration: 1
  });

  
  gsap.from(elem.querySelectorAll("pre"), {
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
      end: "top 60%",
      scrub: 1
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
  });
});

gsap.to("#page1 h1",{
  transform:"translateX(-5%)",
  scrollTrigger:{                             
    trigger:"#page1 h1",
    scroller:"body",
    top:"start 10%"
  }

})

// Hero container animation (from top)
gsap.from(".hero_container", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Page-1 heading animation (from left)
gsap.from(".page-1 h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  ease: "power3.out"
});









