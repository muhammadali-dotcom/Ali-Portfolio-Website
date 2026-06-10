import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverable = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 overflow-hidden",
        hoverable && "glass-panel-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
