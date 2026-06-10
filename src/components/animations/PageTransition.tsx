"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";


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
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
      transition={{
        duration: 0.55,
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