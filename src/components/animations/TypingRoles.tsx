"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingRolesProps {
  roles: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  holdMs?: number;
}

type Phase = "typing" | "deleting";

/** Types out each role, holds, deletes, then moves to the next — looping.
 * Freezes on the first role under prefers-reduced-motion. */
export default function TypingRoles({
  roles,
  className,
  typingSpeed = 80,
  deletingSpeed = 45,
  holdMs = 1400,
}: TypingRolesProps) {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(prefersReducedMotion ? roles[0].length : 0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentRole = roles[roleIndex % roles.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount < currentRole.length) {
        timeout = setTimeout(() => setCharCount((c) => c + 1), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), holdMs);
      }
    } else {
      if (charCount > 0) {
        timeout = setTimeout(() => setCharCount((c) => c - 1), deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setPhase("typing");
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charCount, roleIndex, roles, typingSpeed, deletingSpeed, holdMs, prefersReducedMotion]);

  const currentRole = roles[roleIndex % roles.length];

  return (
    <span className={cn("inline-flex items-center", className)}>
      {currentRole.slice(0, charCount)}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-primary"
      />
    </span>
  );
}
