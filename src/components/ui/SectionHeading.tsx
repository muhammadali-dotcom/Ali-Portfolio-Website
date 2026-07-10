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
        <span className="mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/15 border border-primary/35">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-body max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
