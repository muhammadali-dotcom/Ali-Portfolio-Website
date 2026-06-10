// src/components/ui/ScrollToTop.tsx
"use client";

import { useEffect } from "react";

/**
 * ScrollToTop ensures that the page starts at the top when the component mounts.
 * This component is lightweight and renders nothing visible.
 */
export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to the top-left corner of the page on mount.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // No UI needed – the component only triggers the side effect.
  return null;
}
