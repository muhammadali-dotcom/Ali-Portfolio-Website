import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { faqs } from "@/data/faq";
import { skills } from "@/data/skills";
import { socials } from "@/data/socials";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ali-portfolio-website-dev.vercel.app";

export const dynamic = "force-static";

export function GET() {
  const skillNames = skills.map((s) => s.name).join(", ");
  const email = socials.find((s) => s.platform === "Email")?.url.replace("mailto:", "");

  const lines = [
    "# Muhammad Ali",
    "",
    "> Full-Stack Software Engineer based in Karachi, Pakistan, building scalable web apps, real-time systems, and AI-powered tools with Next.js, Node.js, PostgreSQL, and Redis. Available for freelance and remote work.",
    "",
    `Website: ${siteUrl}`,
    `Contact: ${email}`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- **${s.title}**: ${s.description}`),
    "",
    "## Core Skills",
    "",
    skillNames,
    "",
    "## Selected Projects",
    "",
    ...projects.map(
      (p) =>
        `- **${p.title}** (${p.tech.join(", ")}): ${p.description} — ${siteUrl}/projects/${p.slug}`
    ),
    "",
    "## FAQ",
    "",
    ...faqs.map((f) => `### ${f.question}\n${f.answer}`),
    "",
    "## Pages",
    "",
    `- About: ${siteUrl}/about`,
    `- Services: ${siteUrl}/services`,
    `- Work: ${siteUrl}/projects`,
    `- Experience: ${siteUrl}/experience`,
    `- Skills: ${siteUrl}/skills`,
    `- FAQ: ${siteUrl}/faq`,
    `- Contact: ${siteUrl}/contact`,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
