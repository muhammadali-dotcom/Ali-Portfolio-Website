"use client";

import dynamic from "next/dynamic";

/**
 * StarfieldBackground carries the entire Three.js bundle (~500 KB gzipped).
 * Lazy-loading it here ensures it's split into its own chunk and never blocks
 * the initial paint — even though AnimatedBackground itself is already
 * dynamically imported from ClientEffects with ssr:false.
 */
const StarfieldBackground = dynamic(() => import("@/components/three/StarfieldBackground"), {
  ssr: false,
  loading: () => null,
});

/**
 * Fixed-position ambient background: a Three.js particle starfield (slow
 * auto-rotation + mouse parallax) layered under a base mesh gradient (reusing
 * the existing .mesh-bg glow tokens) plus 3 slow-drifting blue/teal blobs for
 * brand-color presence. Blob animation is transform-only (GPU-cheap) and
 * freezes via the existing global prefers-reduced-motion CSS override
 * (animation-duration forced to 0.01ms); the starfield has its own
 * reduced-motion branch since it runs outside CSS.
 */
export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <StarfieldBackground />
      <div className="absolute inset-0 mesh-bg" />

      <div
        className="absolute left-[8%] top-[10%] h-[36vw] max-h-[520px] w-[36vw] max-w-[520px] rounded-full opacity-50 blur-[90px] animate-drift-slow"
        style={{ background: "var(--color-glow-primary)" }}
      />
      <div
        className="absolute right-[6%] top-[35%] h-[30vw] max-h-[460px] w-[30vw] max-w-[460px] rounded-full opacity-40 blur-[100px] animate-drift-medium"
        style={{ background: "var(--color-glow-secondary)" }}
      />
      <div
        className="absolute bottom-[5%] left-[30%] h-[28vw] max-h-[420px] w-[28vw] max-w-[420px] rounded-full opacity-30 blur-[110px] animate-drift-fast"
        style={{ background: "var(--color-glow-accent)" }}
      />
    </div>
  );
}
