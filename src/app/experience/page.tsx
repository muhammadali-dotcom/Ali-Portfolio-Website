import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Muhammad Ali's professional experience — internships and hands-on roles spanning full-stack development, mobile apps, and data science.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    url: "/experience",
    title: "Experience | Muhammad Ali",
    description:
      "A look at Muhammad Ali's professional journey, internships, and hands-on experience as a software engineer.",
  },
  twitter: {
    title: "Experience | Muhammad Ali",
    description:
      "A look at Muhammad Ali's professional journey, internships, and hands-on experience as a software engineer.",
  },
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <Experience headingLevel={1} />
      </main>
    </PageTransition>
  );
}
