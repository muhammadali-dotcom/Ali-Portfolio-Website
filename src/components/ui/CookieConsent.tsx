"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "cookie-consent";

export const CookieConsent: React.FC = () => {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    // Reads localStorage to sync with a browser-only API unavailable during SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDismissed(window.localStorage.getItem(STORAGE_KEY) === "dismissed");
  }, []);

  const handleDismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, "dismissed");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-label="Cookie notice"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg-soft/95 px-4 py-4 backdrop-blur-md sm:px-6"
        >
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <p className="text-sm text-body">
              This site uses cookies to ensure that you get the best experience. For more detailed
              information on the cookies we use, please review our{" "}
              <Link href="/privacy-policy" className="font-bold text-heading hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Dismiss cookie notice"
              className="shrink-0 rounded-md p-1.5 text-body transition-colors hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
