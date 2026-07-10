import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiSocketdotio,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiGit,
} from "react-icons/si";
import { Globe, Radio, Timer, Bot, BookOpen, Workflow, Sparkles } from "lucide-react";

interface SkillIcon {
  icon: IconType | React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

/** Official brand color per skill; monochrome brand marks (pure black/white
 * logos like Next.js, Express, Socket.io, Vercel, JWT) are remapped to a
 * visible tint so they read clearly on the dark theme. */
export const skillIconMap: Record<string, SkillIcon> = {
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Node.js": { icon: SiNodedotjs, color: "#3C873A" },
  Express: { icon: SiExpress, color: "#ffffff" },
  "REST APIs": { icon: Globe, color: "#3b82f6" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "#ffffff" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "Socket.io": { icon: SiSocketdotio, color: "#ffffff" },
  WebSockets: { icon: Radio, color: "#3b82f6" },
  "Redis TTL": { icon: Timer, color: "#DC382D" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
  Git: { icon: SiGit, color: "#F05032" },
  "OpenAI API": { icon: Sparkles, color: "#ffffff" },
  "AI Agents": { icon: Bot, color: "#3b82f6" },
  "RAG Concepts": { icon: BookOpen, color: "#3b82f6" },
  "Automation Workflows": { icon: Workflow, color: "#3b82f6" },
};

export const defaultSkillIcon: SkillIcon = { icon: Globe, color: "#3b82f6" };
