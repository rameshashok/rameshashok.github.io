import { useEffect, useRef } from "react";
import { slideInLeft, staggerCards } from "../animations/gsap";
import ParallaxBackground from "./ParallaxBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resume from "../data/resume.json";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const titleRef = useRef();
  const timelineRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
    slideInLeft(titleRef.current);
    staggerCards(timelineRef.current);
  }, []);

  const allEvents = [
    ...resume.experience.map(exp => ({
      type: 'experience',
      date: exp.period.split(' – ')[0],
      title: exp.role,
      subtitle: exp.company,
      location: exp.location,
      data: exp
    })),
    ...resume.education.map(edu => ({
      type: 'education',
      date: edu.year,
      title: edu.degree,
      subtitle: edu.school,
      location: edu.location,
      data: edu
    }))
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="relative py-16 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(100,255,218,0.1) 2px, rgba(100,255,218,0.1) 4px), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(100,255,218,0.05) 2px, rgba(100,255,218,0.05) 4px)',
          backgroundSize: '25px 25px, 50px 50px',
          animation: 'matrixFlow 25s linear infinite'
        }}></div>
      </div>
      
      <div ref={titleRef} className="relative z-10 mb-12 sm:mb-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-1 sm:w-2 h-8 sm:h-16 bg-accent"></div>
            <div className="w-2 sm:w-4 h-10 sm:h-20 bg-white"></div>
            <div className="w-1 sm:w-2 h-6 sm:h-12 bg-accent"></div>
          </div>
          <h2 className="text-4xl sm:text-7xl font-black text-white mb-4 tracking-wider">
            TIMELINE
          </h2>
          <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
      </div>

      <div ref={timelineRef} className="relative z-10 max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>
        
        <div className="space-y-8 sm:space-y-12">
          {allEvents.map((event, i) => (
            <div key={i} className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-4 sm:pr-8' : 'text-left pl-4 sm:pl-8'}`}>
                <div className="bg-black/20 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <div className="text-accent text-xs sm:text-sm font-medium mb-2">{event.date}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-2">{event.subtitle}</p>
                  <p className="text-slate-500 text-xs sm:text-sm">{event.location}</p>
                </div>
              </div>
              
              <div className="w-2/12 flex justify-center">
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 ${
                  event.type === 'experience' ? 'bg-accent border-accent/30' : 'bg-blue-400 border-blue-400/30'
                } shadow-lg`}></div>
              </div>
              
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}