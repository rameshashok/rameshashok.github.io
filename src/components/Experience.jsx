import { useEffect, useRef, useState } from "react";
import { slideInLeft, staggerCards } from "../animations/gsap";
import ParallaxBackground from "./ParallaxBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resume from "../data/resume.json";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const titleRef = useRef();
  const cardsRef = useRef();
  const bgRef = useRef();
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    slideInLeft(titleRef.current);
    staggerCards(cardsRef.current);
  }, []);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const animateDetails = (element, isExpanding) => {
    if (isExpanding) {
      gsap.fromTo(element.children,
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  };

  return (
    <section className="relative py-16 sm:py-32 px-4 sm:px-6 overflow-hidden">

      
      <div ref={titleRef} className="relative z-10 mb-12 sm:mb-20">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
          <div className="w-16 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent to-accent mb-4 sm:mb-0"></div>
          <div className="mx-0 sm:mx-8 px-6 sm:px-8 py-3 sm:py-4 bg-accent/10 backdrop-blur-xl rounded-full border border-accent/30">
            <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
              EXPERIENCE
            </h2>
          </div>
          <div className="w-16 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-l from-transparent to-accent mt-4 sm:mt-0"></div>
        </div>
      </div>

      <div ref={cardsRef} className="relative z-10 max-w-5xl mx-auto space-y-8 sm:space-y-16">
        {resume.experience.map((exp, i) => {
          const isExpanded = expandedCard === i;
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`group relative bg-black/20 backdrop-blur-md rounded-2xl border transition-all duration-500 cursor-pointer ${
                isExpanded 
                  ? 'border-accent/70 shadow-2xl shadow-accent/20 scale-105' 
                  : 'border-slate-700/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1'
              }`}
              onClick={() => toggleCard(i)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-2xl transition-opacity duration-500 ${
                isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
              }`}></div>
              
              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="flex-1">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
                      isExpanded ? 'text-accent' : 'text-white group-hover:text-accent'
                    }`}>
                      {exp.role}
                    </h3>
                    <h4 className="text-lg sm:text-xl text-white font-semibold mb-1">{exp.company}</h4>
                    <p className="text-slate-400 text-base sm:text-lg">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 lg:mt-0">
                    <span className={`inline-block px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-accent/30 text-accent border-accent/50' 
                        : 'bg-accent/20 text-accent border-accent/30'
                    }`}>
                      {exp.period}
                    </span>
                    <div className={`w-8 h-8 rounded-full border-2 border-accent/50 flex items-center justify-center transition-all duration-300 ${
                      isExpanded ? 'rotate-180 bg-accent/20' : 'group-hover:border-accent'
                    }`}>
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                  <div 
                    ref={(el) => {
                      if (el && isExpanded) {
                        setTimeout(() => animateDetails(el, true), 100);
                      }
                    }}
                    className="grid gap-3 sm:gap-4 pt-4 border-t border-accent/20"
                  >
                    {exp.points.map((point, j) => (
                      <div key={j} className="flex items-start group/item opacity-0">
                        <div className="flex-shrink-0 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-accent to-accent/70 rounded-full mt-1.5 mr-3 sm:mr-4 shadow-lg shadow-accent/30"></div>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed group-hover/item:text-white transition-colors">
                          {point}
                        </p>
                      </div>
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