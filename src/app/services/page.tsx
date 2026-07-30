import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import Services from "@/components/sections/Services";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Outcome-focused software engineering services from Muhammad Ali — business platforms, real-time systems, AI tools, and the APIs that power them.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    title: "Services | Muhammad Ali",
    description:
      "Software built around your business — outcome-focused engineering from Muhammad Ali.",
  },
  twitter: {
    title: "Services | Muhammad Ali",
    description:
      "Software built around your business — outcome-focused engineering from Muhammad Ali.",
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServiceJsonLd />
      <main className="relative w-full overflow-hidden">
        <Services headingLevel={1} />
      </main>
    </PageTransition>
  );
}
