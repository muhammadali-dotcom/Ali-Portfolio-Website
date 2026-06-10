"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";
import TextReveal from "../animations/TextReveal";
import FadeInUp from "../animations/FadeInUp";

// Lazy load the Three.js Canvas component with SSR disabled
const TechSphereCanvas = dynamic(() => import("../three/TechSphereCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] lg:h-[600px] flex items-center justify-center text-text-secondary font-medium">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-emerald-accent border-t-transparent rounded-full animate-spin" />
        Initializing 3D Environment...
      </div>
    </div>
  ),
});

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] radial-glow opacity-60 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] radial-glow opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Hero Left Content */}
        <div className="flex flex-col justify-center text-left">
          <FadeInUp delay={0.1}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-accent bg-emerald-accent-dim/15 border border-emerald-accent-dim/30 mb-6">
              Available for Freelance & Remote Work
            </span>
          </FadeInUp>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6">
            <span className="text-text-secondary block text-xl sm:text-2xl font-medium mb-3 tracking-wide">
              Hi, I'm
            </span>
            <span className="text-text-primary block">
              <TextReveal text="Muhammad Ali" delay={0.2} />
            </span>
            <span className="bg-gradient-to-r from-emerald-accent via-emerald-400 to-teal-500 bg-clip-text text-transparent block mt-2">
              <TextReveal text="Software Engineer" delay={0.4} />
            </span>
          </h1>

          <FadeInUp delay={0.6}>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mb-10">
              I construct immersive web experiences and high-fidelity mobile products using Next.js, React Native, and interactive 3D elements. Let's translate your concepts into clean, functional code.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8} className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
          </FadeInUp>
        </div>

        {/* Hero Right 3D Scene */}
        <div className="relative flex items-center justify-center w-full">
          <FadeInUp delay={0.4} className="w-full">
            <TechSphereCanvas />
          </FadeInUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-200">
        <span className="text-xs uppercase tracking-widest text-text-secondary select-none">
          Scroll Down
        </span>
        <a href="#about" className="animate-bounce p-1.5 rounded-full bg-dark-surface/60 border border-glass-border/30 text-emerald-accent">
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
