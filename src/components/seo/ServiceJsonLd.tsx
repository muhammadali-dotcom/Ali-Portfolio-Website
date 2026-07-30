import { services } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ali-portfolio-website-dev.vercel.app";

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Person",
        name: "Muhammad Ali",
        url: siteUrl,
      },
    },
  })),
};

export default function ServiceJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
