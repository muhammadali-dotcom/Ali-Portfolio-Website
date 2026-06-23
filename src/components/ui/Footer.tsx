import React from "react";
import * as Icons from "lucide-react";
import * as CustomIcons from "@/components/ui/Icons";
import { socials } from "@/data/socials";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-glass-border/30 bg-dark-surface/30 py-8 px-4 sm:px-6 lg:py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Copy */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-text-primary">
            ALI<span className="text-emerald-accent">.DEV</span>
          </span>
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Ali. All rights reserved. Designed & built with Next.js.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const IconComponent =
              (Icons as any)[social.iconName] ||
              (CustomIcons as any)[social.iconName] ||
              Icons.Link;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.platform}
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-dark-surface border border-glass-border/40 hover:border-emerald-accent/50 text-text-secondary hover:text-emerald-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
