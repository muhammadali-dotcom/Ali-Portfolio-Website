"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { Project } from "@/types";
import GlassCard from "./GlassCard";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
}

const StatusBadge: React.FC<{ status: Project["status"] }> = ({ status }) => (
  <span className="inline-flex items-center rounded-full border border-border bg-bg-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-body">
    {status}
  </span>
);

const ProjectDetails: React.FC<{ project: Project }> = ({ project }) => {
  const { problem, solution, features, tech } = project;

  return (
    <div className="space-y-5">
      <div>
        <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
          Problem
        </h4>
        <p className="text-sm leading-relaxed text-body">{problem}</p>
      </div>

      <div>
        <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
          Solution
        </h4>
        <p className="text-sm leading-relaxed text-body">{solution}</p>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-secondary">
          Key Features
        </h4>
        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm leading-relaxed text-body"
            >
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {tech.map((item) => (
          <TechBadge key={item} name={item} />
        ))}
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, github, live, status, featured } = project;
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const closeTimeout = React.useRef<number | null>(null);

  const openModal = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setMounted(true);
    requestAnimationFrame(() => setVisible(true));
    setOpen(true);
  };

  const closeModal = () => {
    setVisible(false);
    closeTimeout.current = window.setTimeout(() => {
      setMounted(false);
      setOpen(false);
      closeTimeout.current = null;
    }, 220);
  };

  return (
    <>
      <GlassCard
        className={`group flex cursor-pointer flex-col h-full ${
          featured ? "md:col-span-2 md:flex-row gap-6 items-stretch" : "col-span-1"
        }`}
        onClick={openModal}
      >
        {/* Project Image Container */}
        <div
          className={`relative overflow-hidden rounded-xl border border-border aspect-video w-full bg-bg-soft ${
            featured ? "md:w-2/5 md:aspect-auto" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          <div className="absolute inset-0 flex items-center justify-center font-bold text-primary/15 text-3xl select-none uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
            {title.slice(0, 3)}
          </div>

          <div className="w-full h-full relative opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
            {image && !imageError ? (
              <Image
                src={image}
                alt={`${title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={featured ? "object-cover" : "object-contain p-4"}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-bg-soft flex items-center justify-center text-xs text-body">
                <span className="text-primary/70 font-semibold">{title} Preview</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Text Details */}
        <div className={`flex flex-col flex-1 justify-between mt-4 ${featured ? "md:mt-0 md:w-3/5" : ""}`}>
          <div>
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-sm text-body line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
              <StatusBadge status={status} />
              <div className="flex items-center gap-4">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                <span className="text-sm font-semibold text-primary">
                  Case Study
                </span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Modal */}
      {mounted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 overflow-auto"
          onClick={closeModal}
        >
          <div className={`absolute inset-0 bg-black/70 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`} />
          <div
            className={`relative z-10 max-w-3xl w-full bg-card rounded-2xl border border-border shadow-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-200 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} details`}
          >
            <div className="flex items-start justify-between gap-4 p-5 border-b border-border">
              <div>
                <h3 className="text-lg font-bold text-heading">{title}</h3>
                <div className="mt-1.5">
                  <StatusBadge status={status} />
                </div>
              </div>
              <button
                aria-label="Close"
                onClick={closeModal}
                className="p-2 rounded-md bg-bg-soft hover:bg-border/60"
              >
                <X className="w-5 h-5 text-body" />
              </button>
            </div>

            {image && !imageError && (
              <div className="w-full h-56 md:h-72 relative bg-heading">
                <Image
                  src={image}
                  alt={`${title} full screenshot`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              </div>
            )}

            <div className="p-6">
              <ProjectDetails project={project} />

              {(github || live) && (
                <div className="mt-6 border-t border-border pt-5 flex items-center gap-5">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
