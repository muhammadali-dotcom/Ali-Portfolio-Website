import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { experience } from "@/data/experience";
import { Briefcase } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-6 max-w-5xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-[40%] left-[20%] w-[380px] h-[380px] radial-glow opacity-25 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="Journey"
          title="Work History"
          subtitle="A summary of my professional roles and achievements as a software engineer."
          align="center"
        />
      </FadeInUp>

      <div className="relative mt-16 pl-6 md:pl-32 border-l-2 border-glass-border">
        {/* Experience Cards */}
        <StaggerChildren className="space-y-12">
          {experience.map((exp) => (
            <StaggerItem key={exp.id} className="relative">
              {/* Timeline marker node */}
              <div className="absolute -left-[35px] md:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-dark-bg border-2 border-emerald-accent flex items-center justify-center shadow-[0_0_10px_#10b981]">
                <Briefcase className="w-3 h-3 text-emerald-accent" />
              </div>

              {/* Side date display on desktop viewports */}
              <div className="hidden md:block absolute -left-[160px] top-1.5 w-28 text-right font-bold text-emerald-accent text-sm">
                {exp.duration}
              </div>

              <GlassCard className="hover:border-emerald-accent/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                    <span className="text-sm font-semibold text-emerald-accent/90">{exp.company}</span>
                  </div>
                  {/* Date fallback for mobile viewports */}
                  <span className="md:hidden text-xs font-bold text-emerald-accent uppercase tracking-wider">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-text-secondary leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent mt-2 flex-shrink-0" />
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
