"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

interface BlurRevealTextProps extends HTMLMotionProps<"span"> {
  text: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  blur?: number;
}

/**
 * Heading-level split/blur reveal — extends the word-stagger pattern
 * from TextReveal with a heavier blur + y-offset, tuned for large
 * display headings rather than body-sized copy.
 */
export default function BlurRevealText({
  text,
  delay = 0,
  staggerDelay = 0.08,
  duration = 0.7,
  blur = 12,
  className,
  ...props
}: BlurRevealTextProps) {
  const words = text.trim().split(/\s+/);
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: prefersReducedMotion ? 0 : delay,
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 24,
      filter: prefersReducedMotion ? "blur(0px)" : `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block whitespace-pre"
          style={{ willChange: "transform, filter, opacity" }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
