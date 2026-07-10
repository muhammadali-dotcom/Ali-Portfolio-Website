"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type CursorVariant = "default" | "link" | "button" | "card";

const RING_SCALE: Record<CursorVariant, number> = {
  default: 1,
  link: 1.6,
  button: 2.2,
  card: 2.8,
};

/**
 * Dual-layer custom cursor: a tight dot that tracks the pointer almost
 * 1:1, plus a lagging outer ring that eases toward it. Hover state is
 * resolved via event delegation against `data-cursor="link|button|card"`
 * attributes on interactive elements — no per-element listeners.
 */
export const CursorGlow: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");

  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);
  const dotSpringX = useSpring(dotX, { stiffness: 900, damping: 45, mass: 0.2 });
  const dotSpringY = useSpring(dotY, { stiffness: 900, damping: 45, mass: 0.2 });

  const ringX = useMotionValue(-200);
  const ringY = useMotionValue(-200);
  const ringSpringX = useSpring(ringX, { stiffness: 120, damping: 22, mass: 0.5 });
  const ringSpringY = useSpring(ringY, { stiffness: 120, damping: 22, mass: 0.5 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Client-only capability check: must run post-mount so the SSR
    // pass (no `window`) and the initial client pass stay in sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      const next = (target?.dataset.cursor as CursorVariant | undefined) ?? "default";
      setVariant((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion, dotX, dotY, ringX, ringY]);

  if (!enabled) return null;

  return (
    <>
      {/* Ambient glow, existing look */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[1] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 mix-blend-multiply"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          background:
            "radial-gradient(circle, var(--color-glow-primary) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Outer lagging ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-primary/50 mix-blend-multiply"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          scale: RING_SCALE[variant],
          willChange: "transform",
        }}
        transition={{ scale: { type: "spring", stiffness: 260, damping: 22 } }}
      />

      {/* Inner dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          scale: variant === "default" ? 1 : 0.4,
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CursorGlow;
