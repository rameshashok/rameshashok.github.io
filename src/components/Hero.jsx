import { useEffect, useRef } from "react";
import gsap from "gsap";
import resume from "../data/resume.json";

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    // Main content animation with more dramatic effects
    gsap.fromTo(ref.current.children, 
      { y: 100, opacity: 0, scale: 0.8, rotationX: -15 },
      { y: 0, opacity: 1, scale: 1, rotationX: 0, stagger: 0.3, duration: 1.5, ease: "power4.out", delay: 0.5 }
    );

    // Continuous floating animation for the entire hero content
    gsap.to(ref.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <div ref={ref} className="relative z-20 backdrop-blur-md bg-black/5 rounded-3xl p-12 border border-accent/10 shadow-2xl shadow-accent/5">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent drop-shadow-2xl">
            {resume.name}
          </h1>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl text-accent font-light tracking-wide drop-shadow-lg">
            {resume.title}
          </h2>
        </div>
        
        <div className="mb-10">
          <p className="max-w-2xl text-lg text-slate-200 leading-relaxed drop-shadow-md">
            {resume.summary}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={resume.github}
            className="group px-8 py-4 bg-accent/20 backdrop-blur-md border-2 border-accent rounded-full hover:bg-accent hover:text-black transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-accent/50 hover:rotate-2"
          >
            <span className="font-semibold">View GitHub</span>
          </a>
          <a
            href={resume.linkedin}
            className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-slate-400 rounded-full hover:border-accent hover:bg-accent/20 transition-all duration-500 transform hover:scale-110 hover:-rotate-2"
          >
            <span className="font-semibold">Connect on LinkedIn</span>
          </a>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center backdrop-blur-sm bg-accent/10">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse shadow-lg shadow-accent/50"></div>
        </div>
      </div>
    </section>
  );
}
