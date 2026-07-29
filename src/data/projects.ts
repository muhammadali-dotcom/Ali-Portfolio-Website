import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "featured-1",
    slug: "ems",
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
    image: "/EMS.webp",
    github: "https://github.com/muhammadali-dotcom/Employee_Management.git",
    live: null,
    status: "Personal Project",
    featured: true,
  },
  {
    id: "project-2",
    slug: "querybridge",
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
    image: "/QueryBridge.webp",
    github: "https://github.com/muhammadali-dotcom/QueryBridge.git",
    live: null,
    status: "Personal Project",
  },
  {
    id: "project-3",
    slug: "roomtalk",
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
    image: "/RoomTalk.webp",
    github: "https://github.com/muhammadali-dotcom/RoomTalk",
    live: null,
    status: "Personal Project",
  },
  {
    id: "project-4",
    slug: "expenzo",
    title: "Expenzo — Expense Tracker & Group Settlements",
    description:
      "A personal and group expense tracker with budgeting, analytics, and smart settlements for shared costs.",
    problem:
      "Tracking personal spending and splitting shared expenses with friends usually means juggling spreadsheets and manually figuring out who owes whom.",
    solution:
      "A Django-powered expense tracker that logs income and expenses by category, visualizes monthly trends and category budgets, and automatically computes settlements for group expenses split across a people directory.",
    result:
      "The result is a single dashboard for managing personal budgets and group expenses, from logging a transaction to seeing exactly who owes whom after a trip or shared bill.",
    features: [
      "Transaction tracking with category, amount, date, and notes",
      "Dashboard analytics — monthly income/expense trends and category breakdowns",
      "Category budgets with spend tracking",
      "Filter, search, edit, delete, and CSV export for transactions",
      "Group expenses with automatic smart settlements",
      "People directory for managing shared-expense contacts",
      "Multi-currency profile (USD, EUR, GBP, PKR, INR)",
      "Full authentication — registration, login/logout, password reset",
    ],
    tech: ["Django", "Python", "PostgreSQL", "Tailwind CSS"],
    image: "/Expenzo.webp",
    github: "https://github.com/muhammadali-dotcom/django-expense-tracker",
    live: null,
    status: "Personal Project",
  },
];
