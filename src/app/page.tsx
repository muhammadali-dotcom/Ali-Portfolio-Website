import PageTransition from "@/components/animations/PageTransition";
import SectionDivider from "@/components/ui/SectionDivider";

import Hero from "@/components/sections/Hero";
import TechStrip from "@/components/sections/TechStrip";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import HowIBuild from "@/components/sections/HowIBuild";
import Skills from "@/components/sections/Skills";
import Profiles from "@/components/sections/Profiles";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <Hero />
        <TechStrip />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <HowIBuild />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Profiles />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Contact />
      </main>
    </PageTransition>
  );
}
