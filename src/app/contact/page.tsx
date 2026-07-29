import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Ali for freelance or remote full-stack engineering work — send a message, connect on GitHub/LinkedIn, or book a free call.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact Muhammad Ali | Full-Stack Software Engineer",
    description:
      "Reach out to discuss a product, dashboard, or automation you want to build with Muhammad Ali.",
  },
  twitter: {
    title: "Contact Muhammad Ali | Full-Stack Software Engineer",
    description:
      "Reach out to discuss a product, dashboard, or automation you want to build with Muhammad Ali.",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <Contact headingLevel={1} />
      </main>
    </PageTransition>
  );
}
