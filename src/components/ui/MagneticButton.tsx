"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticButtonProps {
  children: React.ReactNode;
  range?: number;
  strength?: number;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  range = 60,
  strength = 0.35,
  className,
}) => {
  const { ref, position } = useMagneticEffect(range, strength);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
