import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Muhammad Ali's portfolio site collects, uses, and protects your information, including contact form data and analytics cookies.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    url: "/privacy-policy",
    title: "Privacy Policy | Muhammad Ali",
    description:
      "How this site collects, uses, and protects your information, including contact form data and analytics cookies.",
  },
  twitter: {
    title: "Privacy Policy | Muhammad Ali",
    description:
      "How this site collects, uses, and protects your information, including contact form data and analytics cookies.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <PrivacyPolicy headingLevel={1} />
      </main>
    </PageTransition>
  );
}
