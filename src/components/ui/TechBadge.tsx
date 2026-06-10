import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-emerald-accent-dim/10 text-emerald-accent border border-emerald-accent-dim/20 hover:border-emerald-accent/30 transition-colors duration-200",
        className
      )}
    >
      {name}
    </span>
  );
};

export default TechBadge;
