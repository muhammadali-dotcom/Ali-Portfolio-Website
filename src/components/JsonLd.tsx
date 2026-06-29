const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ali-portfolio-website-dev.vercel.app";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Ali",
  jobTitle: "Software Engineer",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  email: "alisaleem.as719@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/muhammadali-dotcom",
    "https://www.linkedin.com/in/muhammad-ali-saleem-69b892245/",
  ],
  knowsAbout: [
    "React Native",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Three.js",
    "Framer Motion",
    "PostgreSQL",
    "Redux Toolkit",
  ],
  description:
    "Software Engineer specializing in modern web applications, React Native mobile apps, immersive 3D interfaces, and high-performance digital products.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Ali Portfolio",
  url: siteUrl,
  author: { "@type": "Person", name: "Muhammad Ali" },
  description:
    "Muhammad Ali is a Software Engineer specializing in modern web applications, React Native mobile apps, immersive interfaces, and high-performance digital products.",
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Muhammad Ali",
    jobTitle: "Software Engineer",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Muhammad Ali offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammad Ali offers web development, mobile app development (React Native), dashboard development, premium UI implementation, and API & data integration services.",
      },
    },
    {
      "@type": "Question",
      name: "Is Muhammad Ali available for freelance work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Muhammad Ali is available for freelance and remote work. You can contact him via email at alisaleem.as719@gmail.com or book a free 15-minute call via Calendly.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Muhammad Ali specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammad Ali specializes in Next.js, React, TypeScript, React Native, Node.js, Three.js, Framer Motion, PostgreSQL, and REST APIs.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Muhammad Ali based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammad Ali is based in Karachi, Pakistan and is available for remote work globally.",
      },
    },
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
    </>
  );
}
