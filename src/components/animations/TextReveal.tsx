"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

interface TextRevealProps extends HTMLMotionProps<"span"> {
  text: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

export default function TextReveal({
  text,
  delay = 0,
  staggerDelay = 0.065,
  duration = 0.45,
  className,
  ...props
}: TextRevealProps) {
  const words = text.trim().split(/\s+/);
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
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
      y: prefersReducedMotion ? 0 : 14,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        ease: [0.22, 1, 0.36, 1],
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
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}