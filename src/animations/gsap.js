import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (el) => {
  gsap.fromTo(el, 
    { y: 60, opacity: 0, scale: 0.95 },
    {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }
  );
};

export const slideInLeft = (el) => {
  gsap.fromTo(el, 
    { x: -100, opacity: 0 },
    {
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }
  );
};



export const parallaxScroll = (el, speed = 0.5) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
    ease: "none"
  });
};

export const staggerCards = (el) => {
  gsap.fromTo(el.children, 
    { y: 50, opacity: 0, scale: 0.9 },
    {
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.7)"
    }
  );
};

export const parallaxCards = (el) => {
  Array.from(el.children).forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: (i % 2 === 0 ? -50 : 50) * (i + 1) * 0.3,
      ease: "none"
    });
  });
};
