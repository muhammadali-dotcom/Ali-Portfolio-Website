import { useRef, useEffect, useState } from "react";

export function useMagneticEffect(range = 50, strength = 0.3) {
  const ref = useRef<HTMLButtonElement | HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
      } else {
        // Snap back
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    if (ref.current) {
      ref.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (ref.current) {
        ref.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [range, strength]);

  return { ref, position };
}
