"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Brain, Trophy, Lightbulb } from "lucide-react";

import Button from "../ui/Button";
import MagneticButton from "../ui/MagneticButton";
import TypingRoles from "../animations/TypingRoles";
import BlurRevealText from "../animations/BlurRevealText";
import FadeInUp from "../animations/FadeInUp";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Problem Solver",
  "AI Enthusiast",
];

const floatingIcons = [
  { Icon: Code2, position: "left-[2%] top-[22%]", delay: 0 },
  { Icon: Brain, position: "right-[2%] top-[18%]", delay: 1.2 },
  { Icon: Trophy, position: "left-[2%] bottom-[8%]", delay: 0.6 },
  { Icon: Lightbulb, position: "right-[2%] bottom-[12%]", delay: 1.8 },
];

const TechSphereCanvas = dynamic(() => import("../three/TechSphereCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-full items-center justify-center rounded-[2rem] border border-border bg-card text-body lg:h-[620px]">
      <div className="flex flex-col items-center gap-4 text-sm font-medium">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <span>Initializing 3D Environment...</span>
      </div>
    </div>
  ),
});

const trustBadges = [
  "Full-stack development",
  "Real-time systems",
  "AI integrations",
  "PostgreSQL + Redis",
  "Remote/Freelance available",
];

export default function Hero() {
  const { x: sphereX, y: sphereY } = useMouseParallax(18);
  const { x: headingX, y: headingY } = useMouseParallax(-6);

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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      {/* Floating decorative icons */}
      {floatingIcons.map(({ Icon, position, delay }) => (
        <div
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute z-10 hidden h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-card/60 text-primary/70 backdrop-blur-sm animate-float xl:flex ${position}`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon className="h-6 w-6" />
        </div>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        {/* Left content */}
        <motion.div
          className="flex flex-col justify-center text-left lg:min-h-[680px]"
          style={{ x: headingX, y: headingY }}
        >
          <FadeInUp delay={0.1}>
            <span className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              Available for Freelance & Remote Work
            </span>
          </FadeInUp>

          <h1 className="mb-2 text-5xl font-extrabold leading-[0.95] tracking-tight text-heading sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="mb-4 block text-xl font-medium tracking-wide text-body sm:text-2xl">
              Hi, I&apos;m
            </span>

            <span className="block">
              <BlurRevealText text="Muhammad Ali." delay={0.2} />
            </span>
          </h1>

          <p className="mb-5 font-display text-xl font-black uppercase tracking-wide text-primary sm:text-2xl lg:text-3xl">
            <TypingRoles roles={roles} />
          </p>

          <FadeInUp delay={0.6}>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-body lg:text-lg">
              I build full-stack web applications, real-time systems, and
              AI-powered tools that solve real business problems.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.75} className="flex flex-col gap-4 sm:flex-row">
            <MagneticButton range={70} strength={0.25}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </MagneticButton>

            <MagneticButton range={70} strength={0.25}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Let&apos;s Build Something
              </Button>
            </MagneticButton>
          </FadeInUp>

          <FadeInUp delay={0.9} className="mt-8 flex flex-wrap gap-2.5">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-body shadow-sm"
              >
                {badge}
              </span>
            ))}
          </FadeInUp>
        </motion.div>

        {/* Right 3D scene */}
        <motion.div
          className="relative flex w-full justify-center lg:min-h-[680px] lg:items-center lg:-translate-y-8 xl:-translate-y-10"
          style={{ x: sphereX, y: sphereY }}
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none">
            <FadeInUp delay={0.35} className="w-full">
              <TechSphereCanvas />
            </FadeInUp>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-60 transition-opacity duration-200 hover:opacity-100 lg:flex">
        <span className="select-none text-[10px] font-semibold uppercase tracking-[0.28em] text-body">
          Scroll Down
        </span>

        <button
          type="button"
          data-cursor="button"
          onClick={() => scrollToSection("tech-strip")}
          aria-label="Scroll to next section"
          className="rounded-full border border-border bg-card p-2 text-primary shadow-sm transition hover:border-primary/40 hover:bg-primary/10"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
