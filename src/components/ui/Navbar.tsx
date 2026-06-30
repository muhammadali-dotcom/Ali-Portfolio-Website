"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? "bg-dark-bg/80 border-b border-glass-border/30 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-tight text-text-primary hover:text-emerald-accent transition-colors duration-200">
          ALI<span className="text-emerald-accent">.DEV</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-emerald-accent group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <MagneticButton>
            <Button
              variant="outline"
              size="sm"
              className="group flex items-center gap-1"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Button>
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-emerald-accent p-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-full sm:max-w-xs bg-dark-surface/95 border-l border-glass-border/40 backdrop-blur-xl z-50 p-8 flex flex-col justify-between transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold text-text-primary">Navigation</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-text-primary hover:text-emerald-accent p-1 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 border-b border-glass-border/10 pb-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <Button
          variant="primary"
          className="w-full flex items-center justify-center gap-1.5 mt-8"
          onClick={() => {
            setIsOpen(false);
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Book a Free Call
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
