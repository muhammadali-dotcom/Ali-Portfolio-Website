"use client";

import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

interface StaggerChildrenProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  distance?: number;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  delay = 0,
  once = true,
  className,
  ...props
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once,
        amount: 0.18,
        margin: "0px 0px -70px 0px",
      }}
      transition={{
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  distance = 22,
  className,
  ...props
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : distance,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}