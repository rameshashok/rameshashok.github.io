import { useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = ['Hero', 'Experience', 'Projects', 'Skills', 'Timeline'];

  const scrollToSection = (index) => {
    const scrollAmount = index * window.innerHeight * 1.5;
    window.scrollTo({ top: scrollAmount, behavior: 'smooth' });
    setActiveSection(index);
  };

  return (
    <nav className="fixed top-8 right-8 z-50 flex flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => scrollToSection(index)}
          className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === index 
              ? 'bg-accent scale-150' 
              : 'bg-white/30 hover:bg-accent/70'
          }`}
        >
          <span className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {section}
          </span>
        </button>
      ))}
    </nav>
  );
}