"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Terminal,
  Server,
  Database,
  GitCommitHorizontal,
  Rocket,
  CheckCircle2,
  Cpu,
} from "lucide-react";

const techStack = ["React", "Next.js", "Node.js", "PostgreSQL", "AI"];

const apiCalls = [
  { method: "GET", path: "/api/users", status: "200 OK" },
  { method: "POST", path: "/api/auth", status: "201 OK" },
  { method: "GET", path: "/api/data", status: "200 OK" },
];

const commits = [
  { type: "feat", message: "add auth flow" },
  { type: "fix", message: "api rate limit" },
];

const pipelineSteps = ["Build", "Test", "Deploy"];

/** Small floating glass card, reused across the panel. */
const GlassPanel: React.FC<{
  children: React.ReactNode;
  className?: string;
  floatDuration?: number;
  floatDelay?: number;
  reduceMotion?: boolean;
}> = ({ children, className = "", floatDuration = 6, floatDelay = 0, reduceMotion }) => (
  <motion.div
    className={`rounded-lg border border-white/10 bg-black/40 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
    transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const PanelHeader: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-1.5 border-b border-white/10 px-2.5 py-1.5">
    <span className="text-secondary">{icon}</span>
    <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-white/60">
      {label}
    </span>
  </div>
);

/** Connection lines with a glowing particle traveling along each path. Desktop only. */
type Point = [number, number];

const connectionPaths: { d: string; from: Point; to: Point }[] = [
  { d: "M 28 25 C 42 23, 50 23, 68 24", from: [28, 25], to: [68, 24] },
  { d: "M 27 48 C 40 40, 50 32, 68 24", from: [27, 48], to: [68, 24] },
  { d: "M 27 68 C 38 62, 48 58, 70 58", from: [27, 68], to: [70, 58] },
  { d: "M 68 24 C 71 35, 71 46, 70 58", from: [68, 24], to: [70, 58] },
];

const ConnectionLines: React.FC<{ reduceMotion?: boolean }> = ({ reduceMotion }) => {
  const nodes = Array.from(
    new Map(
      connectionPaths.flatMap(({ from, to }) => [
        [`${from[0]},${from[1]}`, from],
        [`${to[0]},${to[1]}`, to],
      ])
    ).values()
  );

  return (
    <>
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dcc-line-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.35" />
        </linearGradient>
        <filter id="dcc-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft outer glow pass */}
      <g filter="url(#dcc-glow)" opacity="0.8">
        {connectionPaths.map(({ d }) => (
          <path
            key={`${d}-glow`}
            d={d}
            fill="none"
            stroke="url(#dcc-line-gradient)"
            strokeWidth="0.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      {/* Crisp bright core line */}
      {connectionPaths.map(({ d }) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="url(#dcc-line-gradient)"
          strokeWidth="0.18"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {!reduceMotion &&
        connectionPaths.map(({ d }, i) => (
          <foreignObject key={`${d}-particle`} x="0" y="0" width="1" height="1" overflow="visible">
            <div
              className="animate-travel-path h-[2px] w-[2px] rounded-full bg-white shadow-[0_0_5px_1.5px_rgba(94,234,212,0.9)]"
              style={{
                offsetPath: `path("${d}")`,
                animationDuration: `${3.2 + i * 0.6}s`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          </foreignObject>
        ))}
    </svg>

    {/* Glowing connector nodes — plain positioned divs, not part of the SVG's
        non-uniform coordinate space, so they stay perfectly circular. */}
    {nodes.map(([x, y]) => (
      <div
        key={`${x},${y}`}
        className="pointer-events-none absolute h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_10px_3px_rgba(20,184,166,0.85)]"
        style={{ left: `${x}%`, top: `${y}%` }}
      />
    ))}
    </>
  );
};

export interface DeveloperCommandCenterProps {
  className?: string;
}

export const DeveloperCommandCenter: React.FC<DeveloperCommandCenterProps> = ({
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#070B14] ${className}`}
    >
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 sm:bg-[size:48px_48px]" />
      {!prefersReducedMotion && (
        <div className="animate-grid-pan pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      )}

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-primary/20 blur-[80px]" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-secondary/20 blur-[80px]" />

      {/* Status badge */}
      <div className="absolute right-4 top-4 z-30 flex items-center gap-1.5 rounded-full border border-secondary/30 bg-black/50 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-widest text-secondary backdrop-blur-md">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
        </span>
        SYSTEM ONLINE
      </div>

      <div className="absolute left-4 top-4 z-30 font-mono text-[10px] font-semibold tracking-[0.35em] text-white/35">
        {"// COMMAND CENTER"}
      </div>

      {/* Desktop layout */}
      <div className="relative z-10 hidden h-full w-full p-4 pt-14 lg:block">
        <ConnectionLines reduceMotion={!!prefersReducedMotion} />

        {/* Terminal */}
        <GlassPanel
          className="absolute left-[8%] top-[16%] w-[210px]"
          floatDuration={7}
          reduceMotion={!!prefersReducedMotion}
        >
          <PanelHeader icon={<Terminal className="h-3 w-3" />} label="terminal" />
          <div className="space-y-1 p-2.5 font-mono text-[10px] leading-relaxed text-white/70">
            <p>
              <span className="text-secondary">$</span> npm run dev
            </p>
            <p className="text-primary/80">✓ server started on :3000</p>
            <p className="flex items-center gap-1 text-white/40">
              <span className="inline-block h-2.5 w-1 animate-pulse bg-secondary/70" />
            </p>
          </div>
        </GlassPanel>

        {/* API Gateway */}
        <GlassPanel
          className="absolute left-[5%] top-[42%] w-[200px]"
          floatDuration={8}
          floatDelay={0.5}
          reduceMotion={!!prefersReducedMotion}
        >
          <PanelHeader icon={<Server className="h-3 w-3" />} label="API Gateway" />
          <div className="space-y-1.5 p-2.5 font-mono text-[10px]">
            {apiCalls.map((call) => (
              <div key={call.path} className="flex items-center justify-between gap-2 text-white/65">
                <span className="truncate">
                  <span className="text-primary/80">{call.method}</span> {call.path}
                </span>
                <span className="shrink-0 rounded-full bg-secondary/15 px-1.5 py-0.5 text-[8px] font-semibold text-secondary">
                  {call.status}
                </span>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Deploy Pipeline */}
        <GlassPanel
          className="absolute right-[8%] top-[16%] w-[210px]"
          floatDuration={6.5}
          floatDelay={0.3}
          reduceMotion={!!prefersReducedMotion}
        >
          <PanelHeader icon={<Rocket className="h-3 w-3" />} label="Deploy Pipeline" />
          <div className="flex items-center justify-between px-3 py-3.5">
            {pipelineSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  <motion.span
                    className="flex h-5 w-5 items-center justify-center rounded-full border border-secondary/40 bg-secondary/15 text-secondary"
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: [0.4, 1, 0.4], scale: [0.9, 1, 0.9] }
                    }
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <CheckCircle2 className="h-3 w-3" />
                  </motion.span>
                  <span className="font-mono text-[8px] tracking-wide text-white/50">{step}</span>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <span className="mx-1 h-px w-4 bg-gradient-to-r from-secondary/60 to-secondary/10" />
                )}
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Recent Commits */}
        <GlassPanel
          className="absolute left-[8%] top-[68%] w-[200px]"
          floatDuration={7.5}
          floatDelay={0.8}
          reduceMotion={!!prefersReducedMotion}
        >
          <PanelHeader icon={<GitCommitHorizontal className="h-3 w-3" />} label="Recent Commits" />
          <div className="space-y-1.5 p-2.5 font-mono text-[10px] text-white/65">
            {commits.map((commit) => (
              <div key={commit.message} className="flex items-center gap-2 truncate">
                <span className="text-primary/80">{commit.type}:</span>
                <span className="truncate">{commit.message}</span>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Deployment status */}
        <GlassPanel
          className="absolute right-[10%] top-[62%] w-[160px]"
          floatDuration={6}
          floatDelay={1}
          reduceMotion={!!prefersReducedMotion}
        >
          <PanelHeader icon={<Database className="h-3 w-3" />} label="Production" />
          <div className="flex items-center gap-1.5 p-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
            </span>
            <span className="font-mono text-[10px] text-white/70">Build Ready</span>
          </div>
        </GlassPanel>

        {/* Tech stack badges */}
        <div className="absolute bottom-[2%] left-1/2 z-20 flex w-[250px] -translate-x-1/2 flex-wrap items-center justify-center gap-1.5">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              className="rounded-full border border-primary/25 bg-black/50 px-2.5 py-0.5 font-mono text-[9px] font-medium text-primary/90 backdrop-blur-md"
              animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Mobile / tablet layout */}
      <div className="relative z-10 flex min-h-[300px] w-full flex-col justify-between gap-3 p-4 pt-14 lg:hidden">
        <GlassPanel reduceMotion={!!prefersReducedMotion} floatDuration={7}>
          <PanelHeader icon={<Terminal className="h-3 w-3" />} label="terminal" />
          <div className="space-y-1 p-2.5 font-mono text-[10px] leading-relaxed text-white/70">
            <p>
              <span className="text-secondary">$</span> npm run dev
            </p>
            <p className="text-primary/80">✓ server started on :3000</p>
          </div>
        </GlassPanel>

        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/25 bg-black/40 px-2.5 py-1 font-mono text-[9px] text-secondary">
            <Server className="h-3 w-3" /> API 200 OK
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/25 bg-black/40 px-2.5 py-1 font-mono text-[9px] text-secondary">
            <Rocket className="h-3 w-3" /> Deploy Ready
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/25 bg-black/40 px-2.5 py-1 font-mono text-[9px] text-secondary">
            <Database className="h-3 w-3" /> DB Connected
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/25 bg-black/40 px-2.5 py-1 font-mono text-[9px] text-secondary">
            <Cpu className="h-3 w-3" /> AI Active
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/25 bg-black/50 px-2.5 py-0.5 font-mono text-[9px] font-medium text-primary/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCommandCenter;
