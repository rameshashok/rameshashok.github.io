import resume from "../data/resume.json";

export default function Skills() {
  return (
    <section className="py-24 bg-black px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {resume.skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-card rounded-lg border border-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
