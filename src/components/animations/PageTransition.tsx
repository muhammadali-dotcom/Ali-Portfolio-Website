"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";


interface PageTransitionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  onComplete?: () => void;
  transitionDuration?: number;
}

export default function PageTransition({
  children,
  onComplete,
  className,
  transitionDuration = 0.55,
  ...props
}: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12, filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8, filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)" }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : transitionDuration,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={onComplete}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}