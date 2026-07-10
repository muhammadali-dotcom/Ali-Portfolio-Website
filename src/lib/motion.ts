/**
 * Shared motion constants used across animation components and hooks.
 * Keeping these centralized keeps easing/timing consistent site-wide.
 */

/** Premium "ease-out expo-ish" curve used for most entrance animations. */
export const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Snappier curve for hover/press micro-interactions. */
export const EASE_SNAPPY: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.25,
  base: 0.55,
  slow: 0.8,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.1,
  loose: 0.16,
} as const;

/** Default viewport config for whileInView triggers. */
export const VIEWPORT_DEFAULT = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -80px 0px",
} as const;

export const SPRING_SOFT = { type: "spring" as const, stiffness: 150, damping: 20, mass: 0.4 };
export const SPRING_SNAPPY = { type: "spring" as const, stiffness: 380, damping: 30 };
