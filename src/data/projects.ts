import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "featured-1",
    title: "Nova SaaS Analytics Dashboard",
    description: "An advanced, enterprise-grade real-time SaaS intelligence dashboard featuring rich telemetry visualisations, collaborative workspace support, custom report builders, and complex WebSockets streaming architecture.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Recharts", "Framer Motion"],
    image: "/images/nova-dashboard.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Apex Crypto Exchange Client",
    description: "High-performance crypto currency trading interface supporting instant orders, live orderbook streaming, interactive TradingView charts, and responsive portfolio management.",
    tech: ["React Native", "TypeScript", "Tailwind CSS", "Zustand", "WebSockets"],
    image: "/images/apex-crypto.png",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "project-3",
    title: "Aetherial 3D eCommerce",
    description: "A fully immersive 3D online shopping experience where users customize, interact with, and buy product designs inside a responsive WebGL-driven sandbox.",
    tech: ["Next.js", "Three.js", "React Three Fiber", "Framer Motion", "Stripe"],
    image: "/images/aetherial-3d.png",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "project-4",
    title: "SyncFlow Kanban Planner",
    description: "A collaborative workspace and tasks organizer using drag-and-drop mechanics, keyboard shortcuts, persistent state sync, and real-time offline-first sync.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Dexie.js"],
    image: "/images/syncflow.png",
    github: "https://github.com",
    live: "https://example.com",
  }
];
