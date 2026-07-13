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
    result:
      "The result is a cohesive, enterprise-style tool covering authentication, attendance, and department management end-to-end, with real-time dashboards and activity monitoring on a Next.js, Express.js, and PostgreSQL stack.",
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
    status: "Personal Project",
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
      "A schema-aware natural language to SQL platform, built on Next.js and the OpenAI API, that generates safe queries, blocks destructive operations like DELETE, UPDATE, or DROP, and gives users query history and interactive result visualization.",
    result:
      "The result is a query workflow where non-technical users get validated SQL from a plain-English question in seconds, without needing write access to the database.",
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
    status: "Personal Project",
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
    result:
      "The result is a chat app with public rooms, private 1:1 messaging, and Redis TTL-backed sessions that keep active users and room activity counts accurate in real time.",
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
    status: "Personal Project",
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
    result:
      "The result is a kanban planner where boards and cards persist locally via Dexie.js and stay usable offline, syncing cleanly once the connection returns.",
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
