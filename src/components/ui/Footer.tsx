"use client";

import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import * as CustomIcons from "@/components/ui/Icons";
import { motion } from "framer-motion";
import FadeInUp from "@/components/animations/FadeInUp";
import { socials } from "@/data/socials";
import { resolveIcon } from "@/lib/utils";

const footerNavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Work", href: "/projects" },
  { name: "Stack", href: "/skills" },
  { name: "Profiles", href: "/profiles" },
  { name: "Contact", href: "/contact" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-bg-soft px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg font-bold text-heading">
            ALI<span className="text-primary">.DEV</span>
          </span>
          <p className="text-xs text-body">Building software that solves real problems.</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-cursor="link"
              className="text-sm font-medium text-body transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <FadeInUp className="flex items-center gap-4" viewport={{ once: true, amount: 0 }}>
          {socials.map((social) => {
            const IconComponent = resolveIcon([Icons, CustomIcons], social.iconName, Icons.Link);
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
        </FadeInUp>

        <p className="text-xs text-body">
          © {new Date().getFullYear()} Ali. All rights reserved.{" "}
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
