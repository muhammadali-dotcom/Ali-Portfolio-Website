import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Ali is a Full-Stack Software Engineer specializing in Next.js, Node.js, PostgreSQL, and Redis — building scalable web apps, real-time systems, and AI-powered tools.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About Muhammad Ali | Full-Stack Software Engineer",
    description:
      "Learn about Muhammad Ali's background, approach to engineering, and the technologies behind his full-stack and real-time projects.",
  },
  twitter: {
    title: "About Muhammad Ali | Full-Stack Software Engineer",
    description:
      "Learn about Muhammad Ali's background, approach to engineering, and the technologies behind his full-stack and real-time projects.",
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <About headingLevel={1} />
      </main>
    </PageTransition>
  );
}
