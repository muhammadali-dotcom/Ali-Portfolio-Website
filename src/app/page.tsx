import PageTransition from "@/components/animations/PageTransition";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <section id="home" className="relative">
          <Hero />
        </section>

        <section id="about" className="relative">
          <About />
        </section>

        <section id="skills" className="relative">
          <Skills />
        </section>

        <section id="projects" className="relative">
          <Projects />
        </section>

        <section id="services" className="relative">
          <Services />
        </section>

        <section id="experience" className="relative">
          <Experience />
        </section>

        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>
    </PageTransition>
  );
}