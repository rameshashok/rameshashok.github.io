import resume from "../data/resume.json";
import { slideInLeft, staggerCards } from "../animations/gsap";
import ParallaxBackground from "./ParallaxBackground";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const titleRef = useRef();
  const cardsRef = useRef();
  const bgRef = useRef();
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    slideInLeft(titleRef.current);
    staggerCards(cardsRef.current);
  }, []);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const animateTech = (element) => {
    gsap.fromTo(element.children,
      { scale: 0, rotation: 180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "back.out(2)" }
    );
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      
      <div ref={titleRef} className="relative z-10 mb-20">
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-accent/20 blur-xl rounded-full"></div>
            <h2 className="relative text-7xl font-black text-white mb-4">
              PROJECTS
            </h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-8 h-8 bg-accent rotate-45"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-white"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-accent to-white"></div>
            <div className="w-8 h-8 bg-accent rotate-45"></div>
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {resume.projects.map((p, i) => {
          const isExpanded = expandedProject === i;
          return (
            <div
              key={i}
              className={`group relative bg-black/20 backdrop-blur-md rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                isExpanded 
                  ? 'border-accent/70 shadow-2xl shadow-accent/30 scale-110 z-20' 
                  : 'border-slate-700/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2'
              }`}
              onClick={() => toggleProject(i)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent/10 rounded-2xl transition-opacity duration-500 ${
                isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
              }`}></div>
              
              <div className="relative z-10 p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                    isExpanded ? 'text-accent' : 'text-white group-hover:text-accent'
                  }`}>
                    {p.name}
                  </h3>
                  <div className={`w-6 h-6 rounded-full border-2 border-accent/50 flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? 'rotate-45 bg-accent/20' : 'group-hover:border-accent'
                  }`}>
                    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                <p className={`leading-relaxed transition-colors mb-4 ${
                  isExpanded ? 'text-slate-200' : 'text-slate-400 group-hover:text-slate-300'
                }`}>
                  {p.desc}
                </p>

                <div className={`overflow-hidden transition-all duration-500 ${
                  isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div 
                    ref={(el) => {
                      if (el && isExpanded) {
                        setTimeout(() => animateTech(el), 200);
                      }
                    }}
                    className="flex flex-wrap gap-2 pt-4 border-t border-accent/20"
                  >
                    {p.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs px-3 py-2 bg-accent/20 text-accent border border-accent/40 rounded-full font-medium shadow-lg shadow-accent/20 opacity-0"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}