import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building fast, SEO-optimized, responsive web applications using state-of-the-art architectures like Next.js, React, and server-side features.",
    outcome: "Deliver highly performing, clean, and accessible web solutions ready to scale.",
    iconName: "Globe",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Creating premium cross-platform iOS and Android mobile apps using React Native and Expo, incorporating smooth native feel and hardware integration.",
    outcome: "Deploy polished, store-ready app packages built from a single clean codebase.",
    iconName: "Smartphone",
  },
  {
    id: "dashboard-dev",
    title: "Dashboard Development",
    description: "Crafting customized dashboards with complex charting library integrations, live data streams via WebSockets, and clear workspace telemetry.",
    outcome: "Empower business decisions with fast, real-time analytics visualisations.",
    iconName: "LayoutDashboard",
  },
  {
    id: "ui-impl",
    title: "Premium UI Implementation",
    description: "Transforming design mockups (Figma, Adobe XD) into high-fidelity code bases, utilizing custom micro-animations and smooth cinematic transitions.",
    outcome: "Achieve pixel-perfect visual fidelity that accurately matches your original layouts.",
    iconName: "Layers",
  },
  {
    id: "api-integration",
    title: "API & Data Integration",
    description: "Integrating modern headless CMSs, REST API endpoints, GraphQL endpoints, and external service gateways (payment processors, authentication).",
    outcome: "Ensure seamless, secure, and robust frontend consumption of external backends.",
    iconName: "Cpu",
  },
];
