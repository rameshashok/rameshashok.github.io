import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import ThreeBackground from "./components/ThreeBackground";

export default function App() {
  return (
    <>
      <ThreeBackground />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Timeline />
    </>
  );
}