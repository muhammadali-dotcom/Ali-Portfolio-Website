import { useRef, useEffect, useState } from "react";

export function useMagneticEffect(range = 50, strength = 0.3) {
  const ref = useRef<HTMLButtonElement | HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Normalized -1..1 offset from center, used to drive glow-shadow direction.
  const [glowOffset, setGlowOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < range) {
        // Pull towards mouse
        setPosition({
          x: distanceX * strength,
          y: distanceY * strength,
        });
        setGlowOffset({
          x: Math.max(-1, Math.min(1, distanceX / range)),
          y: Math.max(-1, Math.min(1, distanceY / range)),
        });
      } else {
        // Snap back
        setPosition({ x: 0, y: 0 });
        setGlowOffset({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setGlowOffset({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    const currentEl = ref.current;
    currentEl?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      currentEl?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [range, strength]);

  return { ref, position, glowOffset };
}
