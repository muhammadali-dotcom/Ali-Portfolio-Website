import React from "react";
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
      {/* Hero 3D / Introduction */}
      <Hero />
      
      {/* About Description & Value Pillar Cards */}
      <About />
      
      {/* Categorized Skills Chips Grid */}
      <Skills />
      
      {/* Bento Grid Projects Layout */}
      <Projects />
      
      {/* Freelance Services Offered */}
      <Services />
      
      {/* Vertical Timeline Experiences */}
      <Experience />
      
      {/* Form & Direct Message Action CTAs */}
      <Contact />
    </PageTransition>
  );
}
