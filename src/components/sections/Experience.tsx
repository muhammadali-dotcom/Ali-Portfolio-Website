"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import { Briefcase, MapPin } from "lucide-react";

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

export const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24">
      <div className="pointer-events-none absolute left-[20%] top-[40%] h-[380px] w-[380px] radial-glow opacity-25" />

      <FadeInUp>
        <SectionHeading
          badge="Experience"
          title="Work History"
          subtitle="A quick look at my professional journey, internships, and hands-on experience as a software engineer."
          align="center"
        />
      </FadeInUp>

      <div ref={timelineRef} className="relative mt-10 pl-8 md:ml-44 md:mt-16 md:pl-20">
        {/* Static track */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-border" />
        {/* Animated fill that grows as you scroll */}
        <motion.div
          className="absolute left-0 top-0 w-[2px] origin-top bg-primary"
          style={{ height: lineHeight }}
        />

        <div className="space-y-14">
          {experience.map((exp, index) => {
            const fromSide = index % 2 === 0 ? -32 : 32;

            return (
              <motion.div
                key={exp.id}
                className="relative"
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
                <div className="hidden md:block absolute -left-[320px] top-2 w-44 text-right text-sm font-bold text-primary">
                  {exp.duration}
                </div>

                <div className="absolute -left-[14px] md:-left-[94px] top-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-bg shadow-[0_0_0_4px_rgba(37,99,235,0.12)]">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                </div>

                <GlassCard className="transition-all duration-300 hover:border-primary/20">
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

                    <span className="md:hidden text-xs font-bold uppercase tracking-wider text-primary">
                      {exp.duration}
                    </span>
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
