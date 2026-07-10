"use client";

import dynamic from "next/dynamic";

// These are purely presentational / client-only effects with no SEO or
// above-the-fold layout relevance, so they're lazy-loaded with ssr:false —
// consistent with how TechSphereCanvas is loaded in Hero.tsx — to keep them
// off the initial server-rendered bundle and out of LCP timing.
const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
});
const CursorGlow = dynamic(() => import("./CursorGlow"), { ssr: false });
const LoadingSequence = dynamic(() => import("./LoadingSequence"), {
  ssr: false,
});

export default function ClientEffects() {
  return (
    <>
      <AnimatedBackground />
      <CursorGlow />
      <LoadingSequence />
    </>
  );
}
