import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import TechBadge from "../ui/TechBadge";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { skills, skillCategories } from "@/data/skills";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-[5%] bottom-[10%] h-[360px] w-[360px] rounded-full bg-secondary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInUp>
          <SectionHeading
            badge="Tech Stack"
            title="Tech I work with."
            subtitle="A focused stack for building scalable web apps, real-time systems, and AI-powered tools — end to end."
          />
        </FadeInUp>

        <StaggerChildren className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ id, label }) => (
            <StaggerItem key={id}>
              <GlassCard className="h-full">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === id)
                    .map((skill) => (
                      <TechBadge key={skill.name} name={skill.name} />
                    ))}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="relative z-10 mt-10 lg:mt-12">
          <div className="rounded-3xl border border-border bg-bg-soft p-6 backdrop-blur-xl lg:p-8">
            <h3 className="text-2xl font-bold text-heading">
              Always learning. Always building.
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-body">
              I focus on writing clean, scalable code and choosing the right tools
              for the job — whether it is a business platform, a real-time system,
              an API, or an AI-powered feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
