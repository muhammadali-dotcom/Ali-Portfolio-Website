import React from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { projects } from "@/data/projects";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] radial-glow opacity-30 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="Work"
          title="Recent Projects"
          subtitle="A curated selection of applications and frontend engineering designs that demonstrate standard coding practices."
        />
      </FadeInUp>

      {/* Bento Grid layout */}
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {projects.map((project) => (
          <StaggerItem
            key={project.id}
            className={project.featured ? "md:col-span-2" : "col-span-1"}
          >
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
};

export default Projects;
