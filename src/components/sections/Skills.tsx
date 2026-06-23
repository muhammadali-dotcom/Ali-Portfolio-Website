import React from "react";
import SectionHeading from "../ui/SectionHeading";
import FadeInUp from "../animations/FadeInUp";
import { skills } from "@/data/skills";

const coreCapabilities = [
  "Responsive UI",
  "Enterprise Apps",
  "eCommerce",
  "CMS Systems",
  "SEO",
  "Motion & Interaction",
  "Frontend Dev",
  "Web Apps",
  "AI Integrations",
  "Performance",
];

const services = [
  "Business Websites",
  "Landing Pages",
  "SaaS & Web Apps",
  "eCommerce",
  "Admin Dashboards",
  "CMS Integration",
  "API Development",
  "Portfolio Sites",
];

const colors = [
  "from-lime-300 to-emerald-400",
  "from-pink-300 to-fuchsia-400",
  "from-blue-400 to-indigo-400",
  "from-orange-300 to-orange-500",
  "from-cyan-300 to-teal-400",
  "from-zinc-200 to-zinc-400",
];

const MarqueeRow = ({
  title,
  items,
  reverse = false,
  speed = "35s",
}: {
  title: string;
  items: string[];
  reverse?: boolean;
  speed?: string;
}) => {
  const repeatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="mx-auto mb-5 flex max-w-7xl items-center gap-3 px-4 sm:px-6">
        <span className="h-px w-7 bg-emerald-accent" />
        <p className="text-xs uppercase tracking-[0.22em] text-text-secondary">
          {title}
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-dark-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-dark-bg to-transparent" />

        <div
          className={`flex min-w-max shrink-0 gap-0 ${
            reverse ? "animate-scroll-reverse" : "animate-scroll"
          }`}
          style={{ animationDuration: speed }}
        >
          {repeatedItems.map((item, index) => (
            <span
              key={`${item}-a-${index}`}
              className={`whitespace-nowrap rounded-full bg-gradient-to-r ${
                colors[index % colors.length]
              } px-8 py-4 text-lg font-semibold text-black shadow-[0_0_35px_rgba(255,255,255,0.08)]`}
            >
              {item}
            </span>
          ))}
        </div>

        <div
          className={`flex min-w-max shrink-0 gap-0 ${
            reverse ? "animate-scroll-reverse" : "animate-scroll"
          }`}
          style={{ animationDuration: speed }}
          aria-hidden="true"
        >
          {repeatedItems.map((item, index) => (
            <span
              key={`${item}-b-${index}`}
              className={`whitespace-nowrap rounded-full bg-gradient-to-r ${
                colors[index % colors.length]
              } px-8 py-4 text-lg font-semibold text-black shadow-[0_0_35px_rgba(255,255,255,0.08)]`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const techStack = skills.map((skill) => skill.name);

  return (
    <section id="skills" className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-emerald-accent/10 blur-[120px]" />
      <div className="absolute right-[5%] bottom-[10%] h-[360px] w-[360px] rounded-full bg-lime-300/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInUp>
          <SectionHeading
            badge="Expertise"
            title="Tech I work with."
            subtitle="From frontend experiences to backend systems, these are the tools, technologies, and services I use to build modern digital products."
          />
        </FadeInUp>
      </div>

      <div className="relative z-10 mt-10 space-y-8 lg:mt-16 lg:space-y-10">
        <MarqueeRow title="Core Capabilities" items={coreCapabilities} speed="28s" />
        <MarqueeRow title="Tech Stacks" items={techStack} reverse speed="34s" />
        <MarqueeRow title="Services" items={services} speed="30s" />
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:mt-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl lg:p-8">
          <h3 className="text-2xl font-bold text-text-primary">
            Always learning. Always building.
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
            I focus on writing clean, scalable code and choosing the right tools
            for the job — whether it is a landing page, SaaS dashboard, API, AI
            integration, or full-stack business application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;