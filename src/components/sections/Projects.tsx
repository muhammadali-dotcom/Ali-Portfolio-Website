import React from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { projects } from "@/data/projects";

interface ProjectsProps {
  headingLevel?: 1 | 2;
  linkToDetail?: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ headingLevel = 2, linkToDetail = false }) => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-7xl mx-auto"
    >
      {/* Background Glow */}
      <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] radial-glow opacity-30 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="Featured Work"
          title="Projects Built to Solve Real Problems"
          subtitle="Case studies from full-stack web apps, real-time systems, and AI-powered tools — each one built to production standards, not just to look good in a demo."
          level={headingLevel}
        />
      </FadeInUp>

      {/* Bento Grid layout */}
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {projects.map((project, index) => (
          <StaggerItem
            key={project.id}
            className={project.featured ? "md:col-span-2" : "col-span-1"}
          >
            <ProjectCard project={project} linkToDetail={linkToDetail} priority={index === 0} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
};

export default Projects;
