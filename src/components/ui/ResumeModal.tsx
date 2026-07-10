"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const RESUME_PATH = "/resume.pdf";

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="glass-panel-strong relative z-10 flex h-[85vh] w-full max-w-3xl flex-col rounded-2xl p-5 sm:p-6"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: prefersReducedMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: prefersReducedMotion ? 1 : 0.97 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2
                id="resume-modal-title"
                className="font-display text-xl font-black text-heading sm:text-2xl"
              >
                My Resume
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close resume viewer"
                className="rounded-full border border-border p-2 text-body transition hover:border-primary/50 hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-border bg-bg-soft">
              <iframe
                src={RESUME_PATH}
                title="Resume"
                className="h-full w-full"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={RESUME_PATH}
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-heading transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-body transition-all duration-200 hover:bg-white/[0.04] hover:text-heading"
              >
                <ExternalLink className="h-4 w-4" />
                Open in New Tab
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
