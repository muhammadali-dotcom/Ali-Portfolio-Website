import PageTransition from "@/components/animations/PageTransition";

import Hero from "@/components/sections/Hero";
import TechStrip from "@/components/sections/TechStrip";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import HowIBuild from "@/components/sections/HowIBuild";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <Hero />
        <TechStrip />
        <Projects />
        <Services />
        <HowIBuild />
        <Skills />
        <Experience />
        <FAQ />
        <Contact />
      </main>
    </PageTransition>
  );
}
