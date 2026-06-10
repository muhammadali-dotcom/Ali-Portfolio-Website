"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress: React.FC = () => {
  const completion = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[9999] pointer-events-none">
      <div
        className="h-full bg-emerald-accent shadow-[0_0_8px_#10b981] transition-all duration-75 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
