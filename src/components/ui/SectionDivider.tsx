import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

/**
 * Subtle gradient-fade seam dropped between sections instead of a hard
 * border/boundary — reads as a soft transition rather than a line.
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({ className }) => (
  <div
    aria-hidden="true"
    className={cn(
      "relative mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-border to-transparent",
      className
    )}
  />
);

export default SectionDivider;
