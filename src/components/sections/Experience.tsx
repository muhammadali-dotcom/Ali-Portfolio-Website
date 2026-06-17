import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
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
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="pointer-events-none absolute left-[20%] top-[40%] h-[380px] w-[380px] radial-glow opacity-25" />

      <FadeInUp>
        <SectionHeading
          badge="Experience"
          title="Work History"
          subtitle="A quick look at my professional journey, internships, and hands-on experience as a software engineer."
          align="center"
        />
      </FadeInUp>

      <div className="relative mt-16 border-l-2 border-glass-border pl-10 md:ml-44 md:pl-20">
        <StaggerChildren className="space-y-14">
          {experience.map((exp) => (
            <StaggerItem key={exp.id} className="relative">
              <div className="hidden md:block absolute -left-[320px] top-2 w-44 text-right text-sm font-bold text-emerald-accent">
                {exp.duration}
              </div>

              <div className="absolute -left-[54px] md:-left-[94px] top-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-emerald-accent bg-dark-bg shadow-[0_0_18px_rgba(16,185,129,0.75)]">
                <Briefcase className="h-3.5 w-3.5 text-emerald-accent" />
              </div>

              <GlassCard className="transition-all duration-300 hover:border-emerald-accent/20">
                <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {exp.role}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-emerald-accent/90">
                        {exp.company}
                      </span>

                      <span className="rounded-full border border-emerald-accent/20 bg-emerald-accent/10 px-2 py-0.5 text-xs text-emerald-accent">
                        {exp.type}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-text-secondary">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <span className="md:hidden text-xs font-bold uppercase tracking-wider text-emerald-accent">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default Experience;