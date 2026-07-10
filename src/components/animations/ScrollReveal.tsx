"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { EASE_PREMIUM, VIEWPORT_DEFAULT } from "@/lib/motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  blur?: number;
  once?: boolean;
}

/**
 * Section-level cinematic entry: fade + scale + blur.
 * Sibling to FadeInUp, for larger surfaces (whole sections/cards)
 * where a bigger, softer reveal reads better than a simple fade.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.75,
  scale = 0.96,
  blur = 8,
  once = true,
  className,
  ...props
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: prefersReducedMotion ? 1 : scale,
        filter: prefersReducedMotion ? "blur(0px)" : `blur(${blur}px)`,
      }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ ...VIEWPORT_DEFAULT, once }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
