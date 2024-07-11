import HeroSection from "@/components/custom_ui/Header";
import Projects from "./projects/_components/Projects";
import AboutMe from "./about/_components/AboutMe";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <Projects />
    </main>
  );
}
