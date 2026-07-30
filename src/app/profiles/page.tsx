import type { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";
import Profiles from "@/components/sections/Profiles";

export const metadata: Metadata = {
  title: "Profiles",
  description:
    "Connect with Muhammad Ali on GitHub, LinkedIn, WhatsApp, and email.",
  alternates: {
    canonical: "/profiles",
  },
  openGraph: {
    url: "/profiles",
    title: "Find Muhammad Ali Around the Web",
    description:
      "Connect, follow, or reach out directly through any of Muhammad Ali's platforms.",
  },
  twitter: {
    title: "Find Muhammad Ali Around the Web",
    description:
      "Connect, follow, or reach out directly through any of Muhammad Ali's platforms.",
  },
};

export default function ProfilesPage() {
  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden">
        <Profiles headingLevel={1} />
      </main>
    </PageTransition>
  );
}
