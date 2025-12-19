import { useEffect, useRef } from 'react';
import { parallaxScroll } from '../animations/gsap';

export default function ParallaxSection({ children, reverse = false }) {
  const sectionRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    parallaxScroll(sectionRef.current, reverse ? -0.3 : 0.3);
  }, [reverse]);

  return (
    <div 
      ref={sectionRef}
      className={`relative overflow-hidden ${
        reverse 
          ? 'bg-gradient-to-t from-slate-900/30 to-transparent' 
          : 'bg-gradient-to-b from-transparent to-slate-900/30'
      }`}
    >
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
      
      {/* Parallax decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl ${
          reverse ? 'top-1/4 right-1/4' : 'bottom-1/4 left-1/4'
        }`}></div>
        <div className={`absolute w-64 h-64 bg-accent/10 rounded-full blur-2xl ${
          reverse ? 'bottom-1/3 left-1/3' : 'top-1/3 right-1/3'
        }`}></div>
      </div>
    </div>
  );
}