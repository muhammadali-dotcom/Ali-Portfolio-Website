import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "business-web-apps",
    title: "Business Web Apps",
    description:
      "Fast, scalable, role-based web platforms built for companies that need more than a static website — permissions, dashboards, and real workflows.",
    outcome: "Deliver a production-ready platform your team can actually run the business on.",
    iconName: "Building2",
  },
  {
    id: "realtime-applications",
    title: "Real-Time Applications",
    description:
      "Socket.io-based chat, tracking, live dashboards, and collaborative tools that update instantly instead of relying on page refreshes.",
    outcome: "Give users a live, responsive experience that feels instant.",
    iconName: "Radio",
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboards",
    description:
      "Clean dashboards for operations, analytics, employees, bookings, and business workflows — built around how your team actually works.",
    outcome: "Turn raw data into fast, clear decisions for your operations team.",
    iconName: "LayoutDashboard",
  },
  {
    id: "ai-powered-tools",
    title: "AI-Powered Tools",
    description:
      "Natural language interfaces, AI assistants, query systems, and automation workflows that plug directly into your existing product.",
    outcome: "Automate repetitive work and unlock natural-language access to your data.",
    iconName: "Sparkles",
  },
  {
    id: "api-backend-systems",
    title: "API & Backend Systems",
    description:
      "Secure REST APIs, authentication, database design, integrations, and backend architecture built to scale with your product.",
    outcome: "A backend foundation that stays reliable as usage grows.",
    iconName: "Server",
  },
  {
    id: "mobile-app-interfaces",
    title: "Mobile App Interfaces",
    description:
      "React Native and Expo-based mobile experiences with clean UI and smooth flows, sharing logic with your web platform where it makes sense.",
    outcome: "Ship a polished mobile experience without duplicating your backend.",
    iconName: "Smartphone",
  },
];
