import "./indexpage.css";
import { anton } from "./fonts/font";
import TechMarquee from "./components/TechMarquee";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import HeroSection from "./components/indexPageSections/HeroSection";
import SkillSection from "./components/indexPageSections/SkillSection";

export default function Home() {
  return (
    <main className="pt-5 pb-5 w-100">
      {/* //  HERO SECTION */}
      <HeroSection />

      {/*  */}
      {/* // Black SECTION FOR MORE INFO */}
      <SkillSection />

      {/* Marquee */}
      <section className="Marquee">
        <TechMarquee />
      </section>

      {/*  */}
      {/* SEction For initial Project */}
      <section className="ProjectSection ContainerBody">
        <Carousel />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
