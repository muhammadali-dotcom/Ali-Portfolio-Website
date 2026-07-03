import React from "react";

const mainTech = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Redis",
  "Socket.io",
  "AI Integrations",
  "REST APIs",
  "Docker",
  "GitHub Actions",
];

export const TechStrip: React.FC = () => {
  const items = [...mainTech, ...mainTech];

  return (
    <section
      id="tech-strip"
      className="relative overflow-hidden border-y border-border/40 bg-card/30 py-6"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="flex overflow-hidden">
        <div className="flex min-w-max shrink-0 animate-scroll gap-3" style={{ animationDuration: "40s" }}>
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="whitespace-nowrap rounded-full border border-border bg-bg-soft/60 px-5 py-2 font-mono text-xs font-medium tracking-wide text-body"
            >
              {item}
            </span>
          ))}
        </div>
        <div
          className="flex min-w-max shrink-0 animate-scroll gap-3 pl-3"
          style={{ animationDuration: "40s" }}
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <span
              key={`dup-${item}-${index}`}
              className="whitespace-nowrap rounded-full border border-border bg-bg-soft/60 px-5 py-2 font-mono text-xs font-medium tracking-wide text-body"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStrip;
