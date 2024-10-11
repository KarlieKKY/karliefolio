import NavBar from "@/components/sections/Navbar";
import HeroSection from "@/components/custom_ui/Header";
import Projects from "./projects/_components/Projects";
import AboutMe from "./about/_components/AboutMe";
import ContactForm from "./contact/_components/ContactForm";
import TechUsed from "@/components/custom_ui/TechUsed";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <Projects />
      {/* <AboutMe /> */}
      {/* <TechUsed /> */}
      {/* <ContactForm /> */}
    </div>
  );
}
