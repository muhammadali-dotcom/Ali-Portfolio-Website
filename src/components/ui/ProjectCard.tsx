"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink, BookOpen } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Github } from "@/components/ui/Icons";
import { Project } from "@/types";
import GlassCard from "./GlassCard";
import ProjectDetails from "./ProjectCaseStudy";

interface ProjectCardProps {
  project: Project;
  linkToDetail?: boolean;
}

const StatusBadge: React.FC<{ status: Project["status"] }> = ({ status }) => (
  <span className="inline-flex items-center rounded-full border border-border bg-bg-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-body">
    {status}
  </span>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, linkToDetail = false }) => {
  const { title, slug, description, solution, image, github, live, status, featured } = project;
  const [mounted, setMounted] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  const closeTimeout = React.useRef<number | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const tiltRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springConfig = { stiffness: 220, damping: 22, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [6, -6]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-6, 6]),
    springConfig
  );
  const glowX = useTransform(pointerX, (v) => `${v * 100}%`);
  const glowY = useTransform(pointerY, (v) => `${v * 100}%`);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width);
    pointerY.set((e.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  const openModal = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setMounted(true);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeModal = () => {
    setVisible(false);
    closeTimeout.current = window.setTimeout(() => {
      setMounted(false);
      closeTimeout.current = null;
    }, 220);
  };

  return (
    <>
      <motion.div
        ref={tiltRef}
        data-cursor="card"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
        }}
        className="relative h-full"
      >
        {/* Animated gradient border glow, follows cursor */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]: (string | number)[]) =>
                `radial-gradient(240px circle at ${gx} ${gy}, var(--color-glow-primary), transparent 70%)`
            ),
          }}
        />

        <GlassCard
          className={`group relative flex cursor-pointer flex-col h-full ${
            featured ? "md:col-span-2 md:flex-row gap-6 items-stretch" : "col-span-1"
          }`}
          onClick={linkToDetail ? undefined : openModal}
        >
          {/* Cursor-follow gradient overlay */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([gx, gy]: (string | number)[]) =>
                  `radial-gradient(320px circle at ${gx} ${gy}, var(--color-glow-primary), transparent 65%)`
              ),
            }}
          />

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
          <div className={`relative z-10 flex flex-col flex-1 justify-between mt-4 ${featured ? "md:mt-0 md:w-3/5" : ""}`}>
            <div>
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
              </div>
              <div className="max-h-32 overflow-y-auto pr-1 leading-relaxed">
                <p className="text-sm text-body">{description}</p>
                <p className="mt-2 text-sm text-body">{solution}</p>
              </div>
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
                      data-cursor="link"
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
                      data-cursor="link"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {github && (
                    <a
                      href={`${github}#readme`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="link"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                    >
                      <BookOpen className="w-4 h-4" />
                      README
                    </a>
                  )}
                  {linkToDetail ? (
                    <Link
                      href={`/projects/${slug}`}
                      data-cursor="link"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Case Study
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-primary">
                      Case Study
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

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
                  {github && (
                    <a
                      href={`${github}#readme`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                    >
                      <BookOpen className="w-4 h-4" />
                      README
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
