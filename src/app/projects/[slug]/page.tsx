import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, BookOpen, ArrowLeft } from "lucide-react";
import PageTransition from "@/components/animations/PageTransition";
import GlassCard from "@/components/ui/GlassCard";
import ProjectCaseStudy from "@/components/ui/ProjectCaseStudy";
import { Github } from "@/components/ui/Icons";
import ProjectJsonLd from "@/components/seo/ProjectJsonLd";
import { projects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ali-portfolio-website-dev.vercel.app";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      url: `/projects/${project.slug}`,
      type: "article",
      title: `${project.title} | Muhammad Ali`,
      description: project.solution,
      images: [
        {
          url: project.image,
          alt: `${project.title} screenshot`,
        },
      ],
    },
    twitter: {
      title: `${project.title} | Muhammad Ali`,
      description: project.solution,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { title, image, github, live, status } = project;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteUrl}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <PageTransition>
      <ProjectJsonLd project={project} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="relative mx-auto w-full max-w-4xl overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>

        <GlassCard hoverable={false} className="glass-panel-strong overflow-hidden p-0">
          {image && (
            <div className="relative h-56 w-full bg-heading md:h-72">
              <Image
                src={image}
                alt={`${title} screenshot`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="p-6 sm:p-8">
            <div className="mb-2 flex items-start justify-between gap-3">
              <h1 className="text-2xl font-bold text-heading sm:text-3xl">{title}</h1>
            </div>
            <span className="mb-6 inline-flex items-center rounded-full border border-border bg-bg-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-body">
              {status}
            </span>

            <div className="mt-4">
              <ProjectCaseStudy project={project} />
            </div>

            {(github || live) && (
              <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border pt-6">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {github && (
                  <a
                    href={`${github}#readme`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-heading transition-colors duration-200"
                  >
                    <BookOpen className="w-4 h-4" />
                    README
                  </a>
                )}
              </div>
            )}
          </div>
        </GlassCard>
      </main>
    </PageTransition>
  );
}
