"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Certifications", href: "/certifications" },
  { name: "Work", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Stack", href: "/skills" },
  { name: "Profiles", href: "/profiles" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg/80 border-b border-border backdrop-blur-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-heading hover:text-primary transition-colors duration-200">
          ALI<span className="text-primary">.DEV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                data-cursor="link"
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200 group",
                  isActive ? "text-heading" : "text-body hover:text-heading"
                )}
              >
                {link.name}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-0.5 left-0 h-px w-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-300 ease-out" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <MagneticButton>
            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className="group flex items-center gap-1"
                onClick={() => trackEvent("cta_click", { location: "navbar_desktop", text: "Let's Talk" })}
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Button>
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-heading hover:text-primary p-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed inset-y-0 right-0 w-full sm:max-w-xs bg-bg/95 border-l border-border backdrop-blur-xl z-50 p-8 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-bold text-heading">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-heading hover:text-primary p-1 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors duration-200 border-b border-border pb-2",
                        isActive ? "text-primary" : "text-body hover:text-heading"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <Link
              href="/contact"
              onClick={() => {
                setIsOpen(false);
                trackEvent("cta_click", { location: "navbar_mobile", text: "Book a Free Call" });
              }}
              className="block w-full mt-8"
            >
              <Button
                variant="primary"
                className="w-full flex items-center justify-center gap-1.5"
              >
                Book a Free Call
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
