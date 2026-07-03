import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "featured-1",
    title: "EMS — Enterprise Employee Management System",
    description:
      "A modern employee management platform for handling workforce operations, attendance tracking, and department management.",
    problem:
      "Growing teams outgrow spreadsheets fast — attendance, roles, and department data get scattered and error-prone once a company has more than a handful of employees.",
    solution:
      "A role-based employee management platform with real-time dashboards, attendance tracking, and department management, built to feel like a real enterprise product with responsive light and dark themes.",
    features: [
      "Role-based authentication",
      "Real-time dashboards & analytics",
      "Employee profiles & department management",
      "Attendance tracking",
      "Activity monitoring",
      "Light & dark themes",
    ],
    tech: ["Next.js", "Express.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST APIs", "JWT Authentication"],
    image: "/EMS.png",
    github: "https://github.com/muhammadali-dotcom/Employee_Management.git",
    live: null,
    status: "Case Study Coming Soon",
    featured: true,
  },
  {
    id: "project-2",
    title: "QueryBridge — AI-Powered Natural Language SQL Platform",
    description:
      "An AI-powered platform that enables users to query databases using natural language instead of writing SQL.",
    problem:
      "Non-technical stakeholders can't write SQL, and letting an AI generate raw queries against a production database is a real safety risk if left unchecked.",
    solution:
      "A schema-aware natural language to SQL platform that generates safe queries, blocks destructive operations like DELETE, UPDATE, or DROP, and gives users query history and interactive result visualization.",
    features: [
      "Natural language to SQL generation",
      "Schema-aware query building",
      "Blocks unsafe DELETE/UPDATE/DROP operations",
      "Query history",
      "Interactive result visualization",
    ],
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "SQLite"],
    image: "/QueryBridge.png",
    github: "https://github.com/muhammadali-dotcom/QueryBridge.git",
    live: null,
    status: "Case Study Coming Soon",
  },
  {
    id: "project-3",
    title: "RoomTalk — Real-Time Multi-Room Chat App",
    description:
      "A real-time multi-room chat platform with private messaging and Redis-backed temporary sessions.",
    problem:
      "Most beginner chat apps only handle simple public messaging. I wanted to build a real-time system closer to production.",
    solution:
      "A Socket.io-powered chat platform where users can join rooms, send public messages, start private conversations, and maintain temporary active sessions using Redis TTL.",
    features: [
      "Real-time rooms",
      "Private 1:1 messages",
      "Unread DM badges",
      "Redis-based active users",
      "Room activity counts",
      "Username validation",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Socket.io", "Redis"],
    image: "/RoomTalk.png",
    github: "https://github.com/muhammadali-dotcom/RoomTalk",
    live: null,
    status: "Case Study Coming Soon",
  },
  {
    id: "project-4",
    title: "SyncFlow — Kanban Planner",
    description:
      "A collaborative workspace and task organizer with drag-and-drop mechanics and offline-first sync.",
    problem:
      "Teams needed a lightweight kanban tool that stays fully usable offline and syncs cleanly once back online, without losing local changes.",
    solution:
      "A drag-and-drop kanban planner with keyboard shortcuts and persistent local state, using an offline-first sync layer so boards stay usable without a connection.",
    features: [
      "Drag-and-drop board & cards",
      "Keyboard shortcuts",
      "Persistent state sync",
      "Offline-first architecture",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Dexie.js"],
    image: "/SyncFlow.png",
    github: null,
    live: null,
    status: "Private Code",
  },
];
