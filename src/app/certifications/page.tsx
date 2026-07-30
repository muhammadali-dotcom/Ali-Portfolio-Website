import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import Certifications from "@/components/sections/Certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Courses and credentials backing up Muhammad Ali's technical stack in full-stack development, real-time systems, and AI tooling.",
  alternates: {
    canonical: "/certifications",
  },
  openGraph: {
    url: "/certifications",
    title: "Certifications | Muhammad Ali",
    description:
      "Courses and credentials that back up the stack Muhammad Ali works with.",
  },
  twitter: {
    title: "Certifications | Muhammad Ali",
    description:
      "Courses and credentials that back up the stack Muhammad Ali works with.",
  },
};

export default function CertificationsPage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <Certifications headingLevel={1} />
      </main>
    </PageTransition>
  );
}
