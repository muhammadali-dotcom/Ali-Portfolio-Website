import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Muhammad Ali's services, freelance availability, technical specialties, and how to get in touch.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    url: "/faq",
    title: "Frequently Asked Questions | Muhammad Ali",
    description:
      "What services Muhammad Ali offers, his freelance availability, tech stack, and how to reach him.",
  },
  twitter: {
    title: "Frequently Asked Questions | Muhammad Ali",
    description:
      "What services Muhammad Ali offers, his freelance availability, tech stack, and how to reach him.",
  },
};

export default function FAQPage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <FAQ headingLevel={1} />
      </main>
    </PageTransition>
  );
}
