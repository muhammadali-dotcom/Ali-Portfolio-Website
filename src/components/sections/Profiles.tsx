"use client";

import * as Icons from "lucide-react";
import * as CustomIcons from "@/components/ui/Icons";
import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";
import FadeInUp from "../animations/FadeInUp";
import { socials } from "@/data/socials";
import { resolveIcon } from "@/lib/utils";

const actionLabel: Record<string, string> = {
  GitHub: "Follow",
  LinkedIn: "Connect",
  WhatsApp: "Message",
  Email: "Email Me",
};

interface ProfilesProps {
  headingLevel?: 1 | 2;
}

export default function Profiles({ headingLevel = 2 }: ProfilesProps) {
  return (
    <section
      id="profiles"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24"
    >
      <FadeInUp>
        <SectionHeading
          badge="Web Presence"
          title="Find Me Around the Web"
          subtitle="Connect, follow, or reach out directly through any of the platforms below."
          align="center"
          level={headingLevel}
        />
      </FadeInUp>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((social, index) => {
          const IconComponent = resolveIcon(
            [Icons, CustomIcons],
            social.iconName,
            Icons.Link
          );

          return (
            <FadeInUp key={social.platform} delay={index * 0.08}>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="glass-panel glass-panel-hover flex flex-col items-center gap-3 rounded-2xl px-6 py-8 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <IconComponent className="h-6 w-6" />
                </span>
                <span className="text-base font-bold text-heading">
                  {social.platform}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-primary/80">
                  {actionLabel[social.platform] ?? "Visit"}
                </span>
              </motion.a>
            </FadeInUp>
          );
        })}
      </div>
    </section>
  );
}
