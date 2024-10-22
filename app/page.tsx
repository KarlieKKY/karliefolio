import NavBar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/Header";
import Projects from "./projects/_components/Projects";
import ToolSet from "@/components/sections/ToolSet";
import SiteInfo from "@/components/sections/SiteInfo";
import AboutMe from "./about/_components/AboutMe";
import ContactForm from "./contact/_components/ContactForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <div className="px-1 md:px-3 lg:px-5">
        <HeroSection />
        <Projects />
        <ToolSet />
        <SiteInfo />
        {/* <AboutMe /> */}
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
