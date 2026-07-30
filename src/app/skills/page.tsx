import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import Skills from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Muhammad Ali's tech stack — Next.js, React, TypeScript, Node.js, PostgreSQL, Redis, Socket.io, Docker, and AI integrations.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    url: "/skills",
    title: "Tech Stack | Muhammad Ali",
    description:
      "A focused stack for building scalable web apps, real-time systems, and AI-powered tools — end to end.",
  },
  twitter: {
    title: "Tech Stack | Muhammad Ali",
    description:
      "A focused stack for building scalable web apps, real-time systems, and AI-powered tools — end to end.",
  },
};

export default function SkillsPage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <Skills headingLevel={1} />
      </main>
    </PageTransition>
  );
}
