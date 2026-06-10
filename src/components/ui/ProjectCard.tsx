"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { Project } from "@/types";
import GlassCard from "./GlassCard";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tech, image, github, live, featured } = project;

  return (
    <GlassCard
      className={`group flex flex-col h-full ${
        featured ? "md:col-span-2 md:flex-row gap-6 items-center" : "col-span-1"
      }`}
    >
      {/* Project Image Container */}
      <div
        className={`relative overflow-hidden rounded-xl border border-glass-border aspect-video w-full bg-dark-surface/50 ${
          featured ? "md:w-1/2 md:aspect-auto md:h-[280px]" : ""
        }`}
      >
        {/* We use a fallback layout for image if the actual file isn't loaded */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-accent-dim/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Placeholder UI pattern in case images are generated/loaded dynamically */}
        <div className="absolute inset-0 flex items-center justify-center font-bold text-emerald-accent/20 text-3xl select-none uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
          {title.slice(0, 3)}
        </div>

        {/* Real Image */}
        <div className="w-full h-full relative opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
          {image && (
            <div className="w-full h-full bg-slate-900 flex items-center justify-center text-xs text-text-secondary">
              {/* Representing the screenshot */}
              <span className="text-emerald-accent/70 font-semibold">{title} Preview</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Text Details */}
      <div className={`flex flex-col flex-1 justify-between mt-4 ${featured ? "md:mt-0 md:w-1/2" : ""}`}>
        <div>
          <h3 className="text-xl font-bold text-text-primary group-hover:text-emerald-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary line-clamp-4 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6">
          {/* Tech Stack List */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.slice(0, featured ? 6 : 4).map((item) => (
              <TechBadge key={item} name={item} />
            ))}
            {!featured && tech.length > 4 && (
              <span className="text-xs text-text-secondary self-center px-1.5">+{tech.length - 4} more</span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 border-t border-glass-border/30 pt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-accent hover:text-emerald-400 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
