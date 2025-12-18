import resume from "../data/resume.json";
import { fadeUp } from "../animations/gsap";
import { useEffect, useRef } from "react";

export default function Projects() {
  const ref = useRef();

  useEffect(() => fadeUp(ref.current), []);

  return (
    <section ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {resume.projects.map((p, i) => (
          <div
            key={i}
            className="bg-card p-6 rounded-xl border border-slate-800 hover:border-accent transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-slate-400 mt-2">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map(t => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 bg-slate-800 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
