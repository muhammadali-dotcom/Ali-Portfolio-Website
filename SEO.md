I need you to fix and enhance my Next.js 14 portfolio site based on an SEO/GEO/AEO audit. Make targeted, minimal edits to existing files — don't rewrite components from scratch or change the dark emerald green / glassmorphism design system already in place. Preserve all existing styling, animations, and layout.

Context


Framework: Next.js 14 (App Router)
Site is currently a single page with anchor-link sections: Hero, Projects, Services, Tech Stack, Experience, FAQ, Contact
Deployed on Vercel at ali-portfolio-website-dev.vercel.app (will move to a custom domain eventually — use a NEXT_PUBLIC_SITE_URL env var for the base URL, not a hardcoded string, so this doesn't break later)


Fix 1 — Add JSON-LD structured data (Critical priority)

Add three schema types via a <script type="application/ld+json"> in the root layout or a dedicated component:


Person schema — name "Muhammad Ali", jobTitle "Full-Stack Software Engineer", url (site URL), sameAs array pointing to my GitHub and LinkedIn profile URLs (pull these from wherever they're already used in the Contact section, don't hardcode duplicates), knowsAbout array with my core stack (Next.js, React Native, Node.js, PostgreSQL, Redis, etc. — pull from the Tech Stack section data if it exists as a config/array already).
WebSite schema — name, url, description matching the meta description.
FAQPage schema — pull the question/answer pairs directly from the existing FAQ section's data source (don't duplicate content by hand — read it from the same array/CMS the FAQ component already renders from, so schema and visible content never drift out of sync).


Implement this as a reusable <JsonLd data={...} /> component if one doesn't already exist, and validate the output mentally against schema.org's Person, WebSite, and FAQPage specs.

Fix 2 — Trim the meta description (Quick win)

Find the current metadata.description (likely in app/layout.tsx or a metadata config file). It's currently ~166 characters. Rewrite it to 150-160 characters max, keeping the core message: full-stack engineer, Next.js/Node.js/PostgreSQL/Redis, real-time systems and AI-powered tools. Keep the same tone.

Fix 3 — Case study placeholders (High priority)

Find the Projects section data source. Three projects (EMS, QueryBridge, RoomTalk) currently show "Case Study Coming Soon". For each:


Don't fabricate results or metrics.
Instead, replace the placeholder with a short structured breakdown using only what's true and already known from the project: Problem (1-2 sentences on what it solves), Stack (already listed), My role (what I actually built), Status (e.g., "in development", "personal project", "internship contribution" — whichever is accurate per project).
Ask me inline (as a code comment // TODO: confirm details) for anything you're not sure about rather than inventing specifics — flag it, don't guess.
Structure this as a reusable <CaseStudyDetail> component so it's easy for me to fill in real write-ups later without touching layout code.


Fix 4 — sameAs / entity links (Medium priority)

Make sure GitHub and LinkedIn URLs used in Contact are the same source of truth as the sameAs array in the Person schema from Fix 1 — extract them into a single siteConfig or socials constant if they're currently duplicated inline anywhere.

Fix 5 — About/credibility content (Medium priority)

Don't build a new separate page. Instead, expand the existing Hero or Experience section with 2-3 sentences of real background: CS degree (Sir Syed University of Engineering & Technology), the MyCabify/Saxon Digital Technologies internship, and what kind of work I'm currently focused on. Keep it concise — this isn't a full About page rewrite, just enough copy to give AI engines and recruiters more to work with. Ask me to confirm exact wording before finalizing if the tone doesn't match the rest of the site.

Fix 6 — Sitemap & robots.txt check

Confirm app/sitemap.ts and app/robots.ts (or public/robots.txt) exist and are correctly configured for a Next.js 14 App Router project. If missing, generate them using NEXT_PUBLIC_SITE_URL. If they exist, just verify they're not blocking anything and list what they currently expose.

What NOT to do


Don't touch the visual design, animations, Framer Motion transitions, or color scheme.
Don't split the site into multiple routed pages — the audit noted this as a medium, not urgent, priority, and it's out of scope for this pass.
Don't add fake testimonials, fake stats, or fake dates — flag gaps instead of inventing content.
Don't run a full next build refactor — keep diffs small and reviewable.


When done

Give me a summary of every file changed and a short list of anything you flagged with // TODO for me to confirm manually (project details, background copy, etc.).