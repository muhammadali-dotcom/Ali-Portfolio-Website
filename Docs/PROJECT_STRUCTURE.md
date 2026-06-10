# PROJECT_STRUCTURE.md

# Portfolio Website Architecture (Frontend Only)

## Overview

This is a **frontend-only developer portfolio** built using:

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Three.js (React Three Fiber)

### Goals

* Showcase developer skills
* Attract freelance clients
* Attract international job opportunities
* Demonstrate advanced frontend engineering

No backend or server-side business logic is included.

---

# Tech Stack

## Core

* Next.js (App Router)
* TypeScript
* Tailwind CSS

## Animation

* Framer Motion

## 3D Graphics

* Three.js
* React Three Fiber
* @react-three/drei

## Deployment

* Vercel (static hosting)

---

# Folder Structure

```text id="portfolio_frontend_structure"
src/
│
├── app/
│   ├── layout.tsx          # Root layout (fonts, providers)
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Tailwind base + theme variables
│   └── loading.tsx         # Initial loader (optional)
│
├── components/
│   │
│   ├── three/
│   │   ├── TechSphere.tsx
│   │   ├── TechSphereCanvas.tsx
│   │   └── FloatingIcon.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   │
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── TechBadge.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ScrollProgress.tsx
│   │
│   └── animations/
│       ├── FadeInUp.tsx
│       ├── StaggerChildren.tsx
│       ├── TextReveal.tsx
│       └── PageTransition.tsx
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── services.ts
│   ├── experience.ts
│   └── socials.ts
│
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useMagneticEffect.ts
│   └── useIsMobile.ts
│
├── lib/
│   └── utils.ts
│
├── types/
│   ├── index.ts
│   └── three.d.ts
│
└── public/
    ├── icons/
    ├── images/
    └── og-image.png
```

---

# Architecture Rules

## 1. Frontend Only Rule

* No backend folder
* No API routes
* No database logic
* No server actions

Everything is static or client-rendered.

---

## 2. Data Flow

All content comes from:

/data/*.ts

Example:

* projects.ts → project cards
* skills.ts → skill badges
* services.ts → freelance services

UI never contains hardcoded business data.

---

## 3. Component Design Rules

* One component = one responsibility
* UI components must be reusable
* Sections must not depend on each other
* No cross-section logic

---

## 4. Sections Architecture

Each section is:

* Independent
* Self-contained
* Scroll-rendered

Sections:

Hero → About → Skills → Projects → Services → Experience → Contact

---

## 5. Three.js Architecture

Purpose:

Hero-only 3D experience

Structure:

TechSphereCanvas.tsx

* Canvas setup
* camera + lighting

TechSphere.tsx

* Sphere + orbit logic

FloatingIcon.tsx

* Individual tech icon mesh

Rules:

* Lazy loaded (dynamic import)
* Disabled on low-end devices
* Must not affect page performance

---

## 6. UI Architecture

/ui folder contains:

Reusable primitives only:

* Buttons
* Cards
* Badges
* Navigation
* Progress indicators

No page logic inside UI components.

---

## 7. Animation System

All animations centralized in:

/animations

Rules:

* No inline animation logic in sections
* Reusable motion wrappers only
* Consistent timing system

---

## 8. Performance Rules

Targets:

* Lighthouse 95+
* LCP < 2.5s
* First Load < 2s

Optimization:

* Lazy load Three.js
* Image optimization via Next/Image
* Avoid unnecessary re-renders
* Minimal global state

---

## 9. Styling System

Design style:

Dark + Emerald Glassmorphism

Rules:

* 60% dark surfaces
* 30% neutral UI layers
* 10% emerald accent

Avoid:

* Over-glow effects
* Heavy gradients
* Cluttered UI

---

## 10. Naming Conventions

Components:
PascalCase

Hooks:
camelCase

Data:
camelCase files, typed interfaces

---

## 11. Deployment

* Vercel (static frontend)
* No backend configuration required

Domain:

* Free: yourname.vercel.app
* Optional upgrade later: .dev domain

```
```
