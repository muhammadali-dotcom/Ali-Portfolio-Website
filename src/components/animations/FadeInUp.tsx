"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface FadeInUpProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 28,
  once = true,
  className,
  ...props
}: FadeInUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? 0 : distance;

  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once,
        amount: 0.18,
        margin: "0px 0px -80px 0px",
      }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}