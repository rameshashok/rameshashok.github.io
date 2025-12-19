import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBackground({ type = 'geometric' }) {
  const bgRef = useRef();

  useEffect(() => {
    const elements = bgRef.current.children;
    
    Array.from(elements).forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: (i + 1) * -100,
        rotation: (i % 2 === 0 ? 360 : -360),
        ease: "none"
      });
    });
  }, []);

  if (type === 'geometric') {
    return (
      <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent/20 rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-accent/30 transform rotate-12"></div>
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-accent/40 rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-accent/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/50 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent/35 rounded-full"></div>
      </div>
    );
  }

  return null;
}