import { socials } from "@/data/socials";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";

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
  email: "alisaleem.as719@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: sameAsLinks,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sir Syed University of Engineering & Technology",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "BS Computer Science",
    recognizedBy: {
      "@type": "CollegeOrUniversity",
      name: "Sir Syed University of Engineering & Technology",
    },
  },
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
    "React Native",
    "Full-Stack Web Development",
    "Real-Time Systems",
  ],
  description:
    "Full-Stack Software Engineer based in Karachi, Pakistan. BS Computer Science graduate (Sir Syed University, 2025) building scalable web apps, real-time systems, and AI-powered tools.",
  availableForHire: true,
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

const howIBuildSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "How Muhammad Ali Builds Software",
  description: "Muhammad Ali's engineering philosophy and approach to building software products.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Business-first thinking",
      description:
        "Focus on solving the real business problem, not just building features that look good.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Clean and scalable code",
      description: "Maintainable structure, reusable components, clean APIs, and readable logic.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "User experience matters",
      description: "A product should not only work — it should feel smooth, fast, and easy to use.",
    },
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Muhammad Ali — Full-Stack Software Engineering Services",
  url: `${siteUrl}/services`,
  provider: { "@type": "Person", name: "Muhammad Ali" },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
    { "@type": "ListItem", position: 3, name: "Services", item: `${siteUrl}/services` },
    { "@type": "ListItem", position: 4, name: "Work", item: `${siteUrl}/projects` },
    { "@type": "ListItem", position: 5, name: "Contact", item: `${siteUrl}/contact` },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howIBuildSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
