"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress: React.FC = () => {
  const completion = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 z-[9999] h-[3px] w-full bg-border/30 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_10px_rgba(37,99,235,0.45)] transition-[width] duration-100 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
