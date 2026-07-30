"use client";

import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import { Briefcase, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const experience = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Saxon Digital Technologies",
    type: "Internship",
    duration: "May 2026 - Present",
    location: "Karachi, Pakistan · Onsite",
    achievements: [
      "Working on real-world software projects with a focus on building scalable, maintainable, and user-friendly applications.",
      "Contributing to frontend and backend development tasks, including UI implementation, API integration, and feature improvements.",
      "Collaborating with the engineering team to debug issues, improve code quality, and deliver production-ready solutions.",
    ],
  },
  {
    id: 2,
    role: "Mobile App Developer Intern",
    company: "MyCabify",
    type: "Internship",
    duration: "Feb 2026 - May 2026",
    location: "Karachi, Pakistan · Onsite",
    achievements: [
      "Worked on mobile app features for a taxi dispatching platform, focusing on usability, responsiveness, and smooth user experience.",
      "Implemented and improved app screens, booking-related flows, and driver-side interface components.",
      "Collaborated on bug fixes, UI enhancements, and functionality improvements to support real dispatch operations.",
    ],
  },
  {
    id: 3,
    role: "Data Scientist",
    company: "Rhombix Technologies",
    type: "Internship",
    duration: "Aug 2025 - Nov 2025",
    location: "Karachi, Sindh, Pakistan · Remote",
    achievements: [
      "Completed a remote internship focused on data analysis, preprocessing, and extracting useful insights from structured datasets.",
      "Applied data science techniques to clean, transform, and analyze data for better decision-making.",
      "Worked with Python-based tools and libraries to build analytical workflows and present findings clearly.",
    ],
  },
];

interface ExperienceProps {
  headingLevel?: 1 | 2;
}

export const Experience: React.FC<ExperienceProps> = ({ headingLevel = 2 }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!timelineRef.current || !lineFillRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineFillRef.current,
        { height: "0%", opacity: 0.4 },
        {
          height: "100%",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24">
      <div className="pointer-events-none absolute left-[20%] top-[40%] h-[380px] w-[380px] radial-glow opacity-25" />

      <FadeInUp>
        <SectionHeading
          badge="Experience"
          title="Work History"
          subtitle="A quick look at my professional journey, internships, and hands-on experience as a software engineer."
          align="center"
          level={headingLevel}
        />
      </FadeInUp>

      <div ref={timelineRef} className="relative mt-10 md:mt-16">
        {/* Static track — centered on desktop, left-aligned on mobile */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-border md:left-1/2 md:-translate-x-1/2" />
        {/* Animated fill that grows as you scroll, driven by GSAP ScrollTrigger */}
        <div
          ref={lineFillRef}
          className="absolute left-4 top-0 w-[2px] origin-top bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] md:left-1/2 md:-translate-x-1/2"
          style={{ height: prefersReducedMotion ? "100%" : "0%" }}
        />

        <div className="space-y-14 md:space-y-20">
          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const fromSide = isLeft ? -32 : 32;
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={exp.id}
                className={cn(
                  "relative pl-12 md:w-1/2 md:pl-0",
                  isLeft ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                )}
                initial={{
                  opacity: 0,
                  x: prefersReducedMotion ? 0 : fromSide,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -80px 0px" }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute left-4 top-1.5 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-bg shadow-[0_0_0_4px_rgba(59,130,246,0.15)]",
                    isLeft
                      ? "md:left-auto md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  )}
                >
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                </div>

                <span
                  className={cn(
                    "mb-2 block font-display text-4xl font-black text-transparent lg:text-5xl",
                    isLeft ? "md:text-right" : "md:text-left"
                  )}
                  style={{ WebkitTextStroke: "1.5px var(--color-primary)", opacity: 0.35 }}
                >
                  {number}
                </span>

                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-primary">
                  {exp.duration}
                </span>

                <GlassCard className="mt-2 text-left transition-all duration-300 hover:border-primary/30">
                  <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-heading">
                        {exp.role}
                      </h3>

                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-primary/90">
                          {exp.company}
                        </span>

                        <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-xs text-primary">
                          {exp.type}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-1.5 text-xs text-body">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-body"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
