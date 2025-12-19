import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const sections = ['Hero', 'Experience', 'Projects', 'Skills', 'Timeline'];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (index) => {
    const scrollAmount = index * window.innerHeight * 1.5;
    window.scrollTo({ top: scrollAmount, behavior: 'smooth' });
    setActiveSection(index);
  };

  if (isMobile) {
    return (
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-accent/20">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? 'bg-accent scale-150' 
                : 'bg-white/30'
            }`}
          />
        ))}
      </nav>
    );
  }

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