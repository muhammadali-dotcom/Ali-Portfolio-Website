"use client";

import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";

import Button from "../ui/Button";
import TextReveal from "../animations/TextReveal";
import FadeInUp from "../animations/FadeInUp";

const TechSphereCanvas = dynamic(() => import("../three/TechSphereCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-full items-center justify-center rounded-[2rem] border border-emerald-accent/10 bg-dark-surface/40 text-text-secondary lg:h-[620px]">
      <div className="flex flex-col items-center gap-4 text-sm font-medium">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-accent border-t-transparent" />
        <span>Initializing 3D Environment...</span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[6%] top-[18%] h-[320px] w-[320px] radial-glow opacity-60 blur-sm" />
      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-[460px] w-[460px] radial-glow opacity-40 blur-sm" />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        {/* Left content */}
        <div className="flex flex-col justify-center text-left lg:min-h-[680px]">
          <FadeInUp delay={0.1}>
            <span className="mb-6 inline-flex items-center rounded-full border border-emerald-accent/20 bg-emerald-accent/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-accent shadow-[0_0_28px_rgba(16,185,129,0.08)]">
              Available for Freelance & Remote Work
            </span>
          </FadeInUp>

          <h1 className="mb-2 text-5xl font-extrabold leading-[0.95] tracking-tight text-text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="mb-4 block text-xl font-medium tracking-wide text-text-secondary sm:text-2xl">
              Hi, I&apos;m
            </span>

            <span className="block">
              <TextReveal text="Muhammad Ali" delay={0.2} />
            </span>
          </h1>

          <p className="mb-5 text-xl font-semibold text-emerald-400 sm:text-2xl lg:text-3xl">
            <TextReveal text="Software Engineer" delay={0.4} />
          </p>

          <FadeInUp delay={0.6}>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-text-secondary lg:text-xl">
              I build immersive web experiences and high-quality mobile products
              using Next.js, React Native, and interactive 3D interfaces. Let&apos;s
              turn your ideas into clean, scalable, and functional software.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8} className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              Explore My Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </FadeInUp>
        </div>

        {/* Right 3D scene */}
        <div className="relative flex w-full justify-center lg:min-h-[680px] lg:items-center lg:-translate-y-8 xl:-translate-y-10">
          <div className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none">
            <FadeInUp delay={0.35} className="w-full">
              <TechSphereCanvas />
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-60 transition-opacity duration-200 hover:opacity-100 lg:flex">
        <span className="select-none text-[10px] font-semibold uppercase tracking-[0.28em] text-text-secondary">
          Scroll Down
        </span>

        <button
          type="button"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to about section"
          className="rounded-full border border-glass-border/40 bg-dark-surface/70 p-2 text-emerald-accent shadow-[0_0_24px_rgba(16,185,129,0.08)] backdrop-blur-md transition hover:border-emerald-accent/40 hover:bg-emerald-accent/10"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}