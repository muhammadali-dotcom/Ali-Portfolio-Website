"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  onComplete?: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (onComplete) onComplete();
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
