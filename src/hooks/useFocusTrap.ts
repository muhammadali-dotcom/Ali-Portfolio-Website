import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "iframe",
  "details > summary",
].join(", ");

/**
 * Traps keyboard focus inside `containerRef` while `active` is true.
 * - Focuses the first focusable child when activated.
 * - Returns focus to the previously focused element when deactivated.
 * - Tab / Shift+Tab cycle within the container.
 * - Escape calls `onClose` if provided.
 */
export function useFocusTrap<T extends HTMLElement>(active: boolean, onClose?: () => void) {
  const containerRef = useRef<T>(null);
  // Remember the element that had focus before the trap activated
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    // Save current focus so we can restore it on close
    previousFocusRef.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    // Focus the first focusable element inside the container
    const focusables = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));
    if (focusables.length > 0) {
      // Defer by a frame so the element is fully painted/animated first
      const id = requestAnimationFrame(() => focusables[0].focus());
      return () => cancelAnimationFrame(id);
    }
  }, [active]);

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        // Shift+Tab — wrap from first to last
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab — wrap from last to first
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, onClose]);

  // Restore focus when the trap deactivates
  useEffect(() => {
    if (active) return;
    previousFocusRef.current?.focus();
  }, [active]);

  return containerRef;
}
