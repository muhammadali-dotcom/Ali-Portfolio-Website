"use client";

import React from "react";
import * as Icons from "lucide-react";
import * as CustomIcons from "@/components/ui/Icons";
import { motion } from "framer-motion";
import FadeInUp from "@/components/animations/FadeInUp";
import { socials } from "@/data/socials";
import { resolveIcon } from "@/lib/utils";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-bg-soft py-8 px-4 sm:px-6 lg:py-12">
      <FadeInUp className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Copy */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-heading">
            ALI<span className="text-primary">.DEV</span>
          </span>
          <p className="text-xs text-body">
            © {new Date().getFullYear()} Ali. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const IconComponent = resolveIcon(
              [Icons, CustomIcons],
              social.iconName,
              Icons.Link
            );
            return (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.platform}
                whileHover={{
                  scale: 1.12,
                  rotate: 6,
                  boxShadow: "0 0 0 1px var(--color-primary), 0 8px 20px rgba(37, 99, 235, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-card border border-border text-body hover:text-primary"
              >
                <IconComponent className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>
      </FadeInUp>
    </footer>
  );
};

export default Footer;
