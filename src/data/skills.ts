import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "JWT Authentication", category: "backend" },

  // Databases
  { name: "PostgreSQL", category: "databases" },
  { name: "Redis", category: "databases" },
  { name: "MongoDB", category: "databases" },

  // Real-Time
  { name: "Socket.io", category: "realtime" },
  { name: "WebSockets", category: "realtime" },
  { name: "Redis TTL", category: "realtime" },

  // DevOps / Tools
  { name: "Docker", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "Git", category: "devops" },

  // AI
  { name: "OpenAI API", category: "ai" },
  { name: "AI Agents", category: "ai" },
  { name: "RAG Concepts", category: "ai" },
  { name: "Automation Workflows", category: "ai" },
];

export const skillCategories: { id: Skill["category"]; label: string }[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "realtime", label: "Real-Time" },
  { id: "devops", label: "DevOps / Tools" },
  { id: "ai", label: "AI" },
];
