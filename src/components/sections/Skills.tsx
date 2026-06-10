import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import TechBadge from "../ui/TechBadge";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { skills } from "@/data/skills";

const categories = [
  { id: "frontend", label: "Frontend Engineering" },
  { id: "mobile", label: "Mobile Development" },
  { id: "backend", label: "Backend & Integration (Conceptual)" },
  { id: "tools", label: "Development Tools" },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] radial-glow opacity-30 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="Expertise"
          title="Skills & Technologies"
          subtitle="A summary of the languages, frameworks, libraries, and tools I use to bring ideas to life."
        />
      </FadeInUp>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {categories.map((cat) => {
          const categorySkills = skills.filter((s) => s.category === cat.id);
          return (
            <StaggerItem key={cat.id}>
              <GlassCard className="h-full hover:border-emerald-accent/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-text-primary mb-6 border-b border-glass-border/30 pb-3 flex items-center justify-between">
                  {cat.label}
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-accent-dim/10 text-emerald-accent border border-emerald-accent-dim/20">
                    {categorySkills.length} Items
                  </span>
                </h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {categorySkills.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      name={skill.name}
                      className="px-3.5 py-2 hover:bg-emerald-accent hover:text-dark-bg transition-colors duration-300 cursor-default"
                    />
                  ))}
                </div>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </section>
  );
};

export default Skills;
