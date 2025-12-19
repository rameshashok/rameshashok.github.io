import { useEffect, useRef } from "react";
import { slideInLeft, staggerCards } from "../animations/gsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resume from "../data/resume.json";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const titleRef = useRef();
  const skillsRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
    slideInLeft(titleRef.current);
    staggerCards(skillsRef.current);
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" style={{
          animation: 'morphBlob 12s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" style={{
          animation: 'morphBlob 8s ease-in-out infinite reverse'
        }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/5 rounded-full blur-xl" style={{
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>
      
      <div ref={titleRef} className="relative z-10 mb-20">
        <div className="text-center">
          <div className="mb-8">
            <span className="text-accent text-xl font-mono tracking-widest">// TECHNICAL</span>
          </div>
          <h2 className="text-8xl font-black text-white mb-8 tracking-tight">
            SKILLS
          </h2>
          <div className="flex justify-center">
            <div className="w-32 h-32 border-4 border-accent rotate-45 flex items-center justify-center">
              <div className="w-16 h-16 bg-accent rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      <div ref={skillsRef} className="relative z-10 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {resume.skills.map((skill, i) => (
          <div
            key={skill}
            className="group relative px-6 py-3 bg-black/20 backdrop-blur-sm rounded-full border border-accent/30 hover:border-accent/70 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <span className="relative z-10 text-white font-medium group-hover:text-accent transition-colors duration-300">
              {skill}
            </span>
            
            {/* Animated dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
          </div>
        ))}
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/50 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-ping"></div>
      </div>
    </section>
  );
}
