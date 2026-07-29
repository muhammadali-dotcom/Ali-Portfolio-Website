import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of full-stack web apps, real-time systems, and AI-powered tools built by Muhammad Ali — including EMS, QueryBridge, RoomTalk, and Expenzo.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    title: "Projects | Muhammad Ali",
    description:
      "Case studies of full-stack web apps, real-time systems, and AI-powered tools built to production standards.",
  },
  twitter: {
    title: "Projects | Muhammad Ali",
    description:
      "Case studies of full-stack web apps, real-time systems, and AI-powered tools built to production standards.",
  },
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <Projects headingLevel={1} linkToDetail />
      </main>
    </PageTransition>
  );
}
