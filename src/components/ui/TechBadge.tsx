"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.06,
              y: -2,
              boxShadow: "0 0 0 1px var(--color-primary), 0 8px 20px rgba(37, 99, 235, 0.25)",
            }
      }
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-primary/10 text-primary border border-primary/20 transition-colors duration-200",
        className
      )}
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;
