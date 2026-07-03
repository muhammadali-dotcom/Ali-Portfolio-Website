import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function useMouseParallax(strength = 20) {
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        rawX.set(nx * strength);
        rawY.set(ny * strength);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [strength, prefersReducedMotion, rawX, rawY]);

  return { x, y };
}
