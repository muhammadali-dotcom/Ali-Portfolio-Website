"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

const SESSION_KEY = "ali-portfolio:loading-sequence-played";

function hasPlayedThisSession(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    // sessionStorage unavailable (e.g. privacy mode) — treat as already played
    return true;
  }
}

/**
 * Brief initial-mount overlay: wordmark + progress bar that fades out once
 * the page has settled. Plays once per browser session (sessionStorage-gated,
 * not per navigation — this is a single-page site) and is skipped entirely
 * under prefers-reduced-motion to avoid an empty-flash / jank.
 *
 * This component is only ever mounted client-side (dynamic import, ssr:false),
 * so it's safe to resolve session state synchronously in the initial state
 * rather than an effect, avoiding a setState-in-effect render cascade.
 */
export default function LoadingSequence() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => !hasPlayedThisSession());

  useEffect(() => {
    if (prefersReducedMotion || !visible) return;

    const timeout = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion, visible]);

  if (prefersReducedMotion || !visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-4 bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        >
          <motion.span
            className="text-2xl font-bold tracking-tight text-heading"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          >
            ALI<span className="text-primary">.DEV</span>
          </motion.span>

          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full w-full origin-left bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
