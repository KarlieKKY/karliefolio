import NavBar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/Header";
import Projects from "./projects/_components/Projects";
import AboutMe from "./about/_components/AboutMe";
import ContactForm from "./contact/_components/ContactForm";
import TechUsed from "@/components/custom_ui/TechUsed";
import ToolSet from "@/components/sections/ToolSet";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <Projects />
      <ToolSet />
      {/* <AboutMe /> */}
      {/* <TechUsed /> */}
      {/* <ContactForm /> */}
    </div>
  );
}
