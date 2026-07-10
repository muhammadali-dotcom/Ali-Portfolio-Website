"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticButtonProps {
  children: React.ReactNode;
  range?: number;
  strength?: number;
  className?: string;
  /** Adds a soft directional glow-shadow that shifts with the pointer offset. */
  glow?: boolean;
  cursor?: "link" | "button";
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  range = 60,
  strength = 0.35,
  className,
  glow = true,
  cursor = "button",
}) => {
  const { ref, position, glowOffset } = useMagneticEffect(range, strength);

  const shadowX = glow ? glowOffset.x * 10 : 0;
  const shadowY = glow ? glowOffset.y * 10 : 0;

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-cursor={cursor}
      animate={{
        x: position.x,
        y: position.y,
        filter: glow
          ? `drop-shadow(${shadowX}px ${shadowY}px 14px var(--color-glow-primary))`
          : "none",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
