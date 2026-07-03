"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress: React.FC = () => {
  const completion = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[9999] pointer-events-none">
      <div
        className="h-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all duration-75 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
