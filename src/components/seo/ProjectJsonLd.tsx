import { Project } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ali-portfolio-website-dev.vercel.app";

interface ProjectJsonLdProps {
  project: Project;
}

export default function ProjectJsonLd({ project }: ProjectJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    abstract: project.problem,
    url: `${siteUrl}/projects/${project.slug}`,
    codeRepository: project.github ?? undefined,
    programmingLanguage: project.tech,
    keywords: project.tech.join(", "),
    creativeWorkStatus: "Published",
    author: {
      "@type": "Person",
      name: "Muhammad Ali",
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
