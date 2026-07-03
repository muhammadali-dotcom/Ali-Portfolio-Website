"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"
>;

interface ButtonProps extends NativeButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, onClick, ...props }, ref) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.6;
      const ripple: Ripple = {
        id: Date.now(),
        x: e.clientX - rect.left - size / 2,
        y: e.clientY - rect.top - size / 2,
        size,
      };
      setRipples((prev) => [...prev, ripple]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 600);

      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        onClick={handleClick}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
          // Variants
          {
            "bg-primary text-white hover:bg-primary-hover shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_18px_rgba(37,99,235,0.35)]":
              variant === "primary",
            "bg-white text-primary border border-[#BFDBFE] hover:bg-[#EFF6FF]":
              variant === "secondary",
            "border border-border hover:border-primary/50 text-heading hover:text-primary bg-transparent":
              variant === "outline",
            "text-body hover:text-heading bg-transparent hover:bg-black/[0.03]":
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

        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full bg-current opacity-25 animate-[ripple_0.6s_ease-out]"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
