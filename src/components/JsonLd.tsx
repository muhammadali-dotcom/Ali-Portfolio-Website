import { socials } from "@/data/socials";
import { faqs } from "@/data/faq";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ali-portfolio-website-dev.vercel.app";

// Extract GitHub and LinkedIn from socials data for single source of truth
const sameAsLinks = socials
  .filter((social) => social.platform === "GitHub" || social.platform === "LinkedIn")
  .map((social) => social.url);

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Ali",
  jobTitle: "Full-Stack Software Engineer",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  email: "mailto:alisaleem.as719@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: sameAsLinks,
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Redis",
    "Socket.io",
    "REST APIs",
    "Docker",
    "AI Integrations",
  ],
  description:
    "Full-Stack Software Engineer building scalable web apps, real-time systems, and AI-powered tools.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Ali Portfolio",
  url: siteUrl,
  author: { "@type": "Person", name: "Muhammad Ali" },
  description:
    "Muhammad Ali is a Full-Stack Software Engineer building scalable web apps, real-time systems, and AI-powered tools.",
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Muhammad Ali",
    jobTitle: "Full-Stack Software Engineer",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
