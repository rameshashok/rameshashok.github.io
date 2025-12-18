import { useEffect, useRef } from "react";
import gsap from "gsap";
import resume from "../data/resume.json";

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(ref.current.children, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-5xl font-bold">{resume.name}</h1>
      <h2 className="text-xl text-accent mt-2">{resume.title}</h2>
      <p className="max-w-xl mt-6 text-slate-400">{resume.summary}</p>

      <div className="flex gap-4 mt-8">
        <a
          href={resume.github}
          className="px-6 py-3 border border-accent rounded-lg hover:bg-accent hover:text-bg transition"
        >
          GitHub
        </a>
        <a
          href={resume.linkedin}
          className="px-6 py-3 border border-slate-600 rounded-lg hover:border-accent transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
