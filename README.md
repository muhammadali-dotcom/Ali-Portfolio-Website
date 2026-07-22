# Muhammad Ali — Portfolio

Personal portfolio site for Muhammad Ali, a full-stack software engineer. Built with Next.js 16 (App Router) and React 19, featuring animated sections, a projects showcase, and an in-page resume viewer.

## Tech stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion, GSAP, Lenis (smooth scroll)
- **3D:** React Three Fiber / drei / three.js
- **Icons:** lucide-react, react-icons
- **Testing:** Jest + React Testing Library
- **Analytics:** Google Analytics (via `NEXT_PUBLIC_GA_ID`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Jest test suite |
| `npm run test:watch` | Run tests in watch mode |

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata/OG tags (defaults to the production URL if unset) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID; GA is only loaded when this is set |

## Key features

- Animated hero, projects, and skills sections
- In-page resume viewer/download modal (`src/components/ui/ResumeModal.tsx`, backed by `public/resume.pdf`)
- SEO metadata, dynamic `sitemap.xml` / `robots.txt`, and JSON-LD structured data
- Custom 404 and error pages

## Project structure

See [`Docs/PROJECT_STRUCTURE.md`](Docs/PROJECT_STRUCTURE.md) and [`Docs/REQUIREMENTS.md`](Docs/REQUIREMENTS.md) for a deeper breakdown of the codebase layout and requirements.

## Deployment

Deployed on [Vercel](https://vercel.com). Any push to the main branch triggers a new deployment.
