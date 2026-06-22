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
    description: "An AI-powered platform that enables users to query databases using natural language instead of writing SQL. The system generates schema-aware SQL queries while preventing unsafe operations such as DELETE, UPDATE, or DROP. Built with security-first principles, query validation, query history, and interactive result visualization.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "SQLite"],
    image: "/QueryBridge.png",
    github: "https://github.com/muhammadali-dotcom/QueryBridge.git",
    live: "https://example.com",
  },
  {
    id: "project-3",
    title: "Room Talks",
    description:     "A real-time anonymous multi-room chat app where users can join public rooms, send private 1-on-1 messages, track unread direct messages, and store temporary chat data using Redis with automatic 12-hour expiry.",
     tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Socket.io",
    "Redis",
  ],
    image: "/RoomTalk.png",
    github: "https://github.com/muhammadali-dotcom/RoomTalk",
    live: "https://example.com",
  },
  {
    id: "project-4",
    title: "SyncFlow Kanban Planner",
    description: "A collaborative workspace and tasks organizer using drag-and-drop mechanics, keyboard shortcuts, persistent state sync, and real-time offline-first sync.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Dexie.js"],
    image: "/SyncFlow.png",
    github: "https://github.com",
    live: "https://example.com",
  }
];
