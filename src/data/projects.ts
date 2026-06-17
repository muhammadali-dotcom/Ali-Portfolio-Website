import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "featured-1",
    title: "EMS – Enterprise Employee Management System",
    description: "A modern employee management platform for handling workforce operations, attendance tracking, and department management. Features role-based authentication, real-time dashboards, analytics, employee profiles, and activity monitoring. Designed with responsive light and dark themes to provide an intuitive enterprise-grade experience.",
    tech: ["Next.js", "Express.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST APIs", "JWT Authentication"],
    image: "/EMS.png",
    github: "https://github.com/muhammadali-dotcom/Employee_Management.git",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "QueryBridge – AI-Powered Natural Language SQL Platform",
    description: "HAn AI-powered platform that enables users to query databases using natural language instead of writing SQL. The system generates schema-aware SQL queries while preventing unsafe operations such as DELETE, UPDATE, or DROP. Built with security-first principles, query validation, query history, and interactive result visualization.",
    tech: ["JavaScript", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "SQLite", "Groq Cloud"],
    image: "/QueryBridge.png",
    github: "https://github.com/muhammadali-dotcom/QueryBridge.git",
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
