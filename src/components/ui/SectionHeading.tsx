import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  className,
  align = "left",
}) => {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {badge && (
        <span className="mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-accent bg-emerald-accent-dim/15 border border-emerald-accent-dim/35">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
