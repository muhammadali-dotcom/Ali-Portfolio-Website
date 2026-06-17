"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import Button from "./Button";
import { Project } from "@/types";
import GlassCard from "./GlassCard";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tech, image, github, live, featured } = project;
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimeout = React.useRef<number | null>(null);

  const openModal = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setMounted(true);
    // next frame -> set visible for transition
    requestAnimationFrame(() => setVisible(true));
    setOpen(true);
  };

  const closeModal = () => {
    setVisible(false);
    // wait for transition duration before unmount
    closeTimeout.current = window.setTimeout(() => {
      setMounted(false);
      setOpen(false);
      closeTimeout.current = null;
    }, 220);
  };

  return (
    <>
      <GlassCard
        className={`group flex flex-col h-full ${!featured ? 'cursor-pointer' : ''} ${
          featured ? "md:col-span-2 md:flex-row gap-6 items-center" : "col-span-1"
        }`}
        onClick={!featured ? openModal : undefined}
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
          {image ? (
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={featured ? "object-cover" : "object-contain p-4"}
            />
          ) : (
            <div className="w-full h-full bg-slate-900 flex items-center justify-center text-xs text-text-secondary">
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
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-accent hover:text-emerald-400 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
      </GlassCard>

      {/* Modal - opens on card click */}
      {mounted && !featured && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 overflow-auto"
          onClick={closeModal}
        >
          <div className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`} />
          <div
            className={`relative z-10 max-w-5xl w-full bg-dark-surface rounded-lg shadow-xl max-h-[90vh] overflow-y-auto transform transition-all duration-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} details`}
          >
            <div className="flex items-start justify-between p-4 border-b border-glass-border/20">
              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  Cancel
                </Button>
                <button
                  aria-label="Close"
                  onClick={closeModal}
                  className="p-2 rounded-md bg-dark-surface/50 hover:bg-dark-surface/70"
                >
                  <X className="w-5 h-5 text-text-secondary" />
                </button>
              </div>
            </div>

            {featured ? (
              <div className="flex flex-col md:flex-row">
                {/* Left: Large image for featured */}
                {image && (
                  <div className="md:w-1/2 w-full h-72 md:h-[520px] relative bg-black">
                    <Image
                      src={image}
                      alt={`${title} full screenshot`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Right: Details */}
                <div className="md:w-1/2 w-full p-6 overflow-y-auto">
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
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
            ) : (
              <>
                {image && (
                  <div className="w-full h-64 md:h-96 relative bg-black">
                    <Image
                      src={image}
                      alt={`${title} full screenshot`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                )}

                <div className="p-6">
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
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
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
