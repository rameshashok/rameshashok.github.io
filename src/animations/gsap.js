import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (el) => {
  gsap.fromTo(el, 
    { y: 20, opacity: 0 },
    {
      scrollTrigger: {
        trigger: el,
        start: "top 90%"
      },
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }
  );
};
