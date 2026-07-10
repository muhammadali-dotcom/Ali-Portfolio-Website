"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillIconMap, defaultSkillIcon } from "@/lib/skillIcons";

interface SkillCardProps {
  name: string;
}

export default function SkillCard({ name }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { icon: Icon, color } = skillIconMap[name] ?? defaultSkillIcon;

  return (
    <motion.div
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -4, borderColor: color, boxShadow: `0 12px 32px -8px ${color}55` }
      }
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-card p-4 text-center"
    >
      {/* Color fill sweeps in on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-y-100 group-hover:opacity-100"
        style={{ background: `linear-gradient(180deg, transparent, ${color}26)` }}
      />

      <Icon
        className="relative z-10 h-9 w-9 transition-transform duration-300 group-hover:scale-110 lg:h-10 lg:w-10"
        style={{ color }}
      />
      <span className="relative z-10 text-sm font-semibold text-heading">
        {name}
      </span>
    </motion.div>
  );
}
