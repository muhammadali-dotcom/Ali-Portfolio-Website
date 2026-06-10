import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
          // Variants
          {
            "bg-emerald-accent text-dark-bg hover:bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]":
              variant === "primary",
            "bg-emerald-accent-dim/20 text-emerald-accent border border-emerald-accent-dim/30 hover:bg-emerald-accent-dim/30":
              variant === "secondary",
            "border border-glass-border hover:border-emerald-accent/50 text-text-primary hover:text-emerald-accent bg-transparent":
              variant === "outline",
            "text-text-secondary hover:text-text-primary bg-transparent hover:bg-white/5":
              variant === "ghost",
          },
          // Sizes
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-base": size === "md",
            "px-8 py-3 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
