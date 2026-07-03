"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export const CursorGlow: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.5 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Client-only capability check: must run post-mount so the SSR
    // pass (no `window`) and the initial client pass stay in sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 mix-blend-multiply"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, var(--color-glow-primary) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
};

export default CursorGlow;
