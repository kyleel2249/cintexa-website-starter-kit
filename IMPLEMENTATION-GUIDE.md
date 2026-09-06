# CINTEXA Website — Complete Implementation Guide

## Executive Summary

This document provides the complete technical roadmap for building the CINTEXA AI-Powered Business Commerce Technology platform website. The deliverables include:

1. **Working HTML Prototype** — Interactive 3D demonstration (see `cintexa-prototype.html`)
2. **Production Architecture** — Full Next.js 14 project structure
3. **Design System** — Tokens, Tailwind config, UI components
4. **3D Components** — React Three Fiber scenes
5. **SEO & Performance** — Metadata, Schema.org, optimization targets
6. **Implementation Phases** — 10-phase roadmap with code patterns

---

## Phase 1: Foundation (Days 1-3)

### 1.1 Project Initialization

```bash
npx create-next-app@latest cintexa-website --typescript --tailwind --app --src-dir
cd cintexa-website
npm install three @react-three/fiber @react-three/drei gsap @gsap/react framer-motion zustand react-hook-form zod @hookform/resolvers lucide-react clsx tailwind-merge class-variance-authority
npm install -D @types/three prettier prettier-plugin-tailwindcss @tailwindcss/typography tailwindcss-animate
```

### 1.2 Copy Design System

- Place `design-tokens.css` in `src/styles/`
- Replace `tailwind.config.ts` with the provided version
- Import design tokens in `globals.css`

### 1.3 Fonts

```tsx
// app/layout.tsx
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
```

### 1.4 Base Layout & Metadata

Use `config/seo.ts` for defaultMetadata and page-specific metadata.

---

## Phase 2: Core Components (Days 4-8)

### 2.1 UI Library

Copy `components/ui/index.ts` and split into individual files if preferred (Button, Card, Badge, GlassPanel, Input, SectionHeader, LoadingSpinner).

### 2.2 Utilities & Hooks

- `lib/utils/cn.ts`
- `lib/hooks/index.ts` (useScrollProgress, useMousePosition, useReducedMotion, useInView, useMediaQuery, etc.)

### 3. Navigation

Build Navbar with glass morphism, mobile menu, and active states.

---

## Phase 3: Homepage (Days 9-15)

### 3.1 HeroSection

Use the provided `HeroSection.tsx` with lazy-loaded BusinessCore.

### 3.2 SolutionsSection

Use the provided 10-card grid with motion and glass cards.

### 3.3 Additional Sections

- Ecosystem / Business Core visualization
- AI Agents section
- Operating System layers
- Diagnostic metrics
- CTA
- Footer

---

## Phase 4: 3D Enhancement (Days 16-20)

### 4.1 BusinessCore

The provided `BusinessCore.tsx` includes:
- Central distorting core with rings
- 12 orbiting system nodes
- Connection lines + data particles
- Instanced particle field
- Hover interactions
- Performance-friendly settings

### 4.2 Optimization Tips

- Use AdaptiveDpr from drei
- Reduce particle count on mobile
- Prefer instancing
- Dispose geometries/materials properly

---

## Phase 5: Inner Pages (Days 21-28)

Create pages under `app/(marketing)/` for:
- Solutions (and sub-pages)
- Services
- Industries
- Technology
- Case Studies
- Resources / Blog
- About
- Contact
- Start Project

Reuse SectionHeader, Card, and glass panels for consistency.

---

## Phase 6: Forms & Backend (Days 29-32)

### Forms
- ProjectIntakeForm
- ContactForm
- DiagnosticForm

Use React Hook Form + Zod schemas derived from `types/index.ts`.

### API Routes
- `/api/contact`
- `/api/diagnostic`
- `/api/assistant`

Add rate limiting, honeypot, and basic validation.

---

## Phase 7: SEO & Performance (Days 33-35)

- Apply metadata from `config/seo.ts`
- Generate sitemap.xml and robots.txt
- Add Schema.org JSON-LD (Organization, SoftwareApplication, FAQ, Service)
- Optimize images with next/image
- Analyze with Lighthouse and bundle analyzer

**Targets**
- Lighthouse ≥ 90
- FCP < 1.5s
- LCP < 2.5s
- CLS < 0.1

---

## Phase 8: AI Assistant (Days 36-38)

Floating AI assistant (JAY) with chat interface.
- Use the floating button pattern from the prototype
- Integrate with your preferred LLM backend
- Keep conversation context limited for privacy

---

## Phase 9: Testing & QA (Days 39-42)

### Checklist
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Responsive (320px → 1440px+)
- [ ] Keyboard navigation & ARIA
- [ ] Reduced motion preference
- [ ] Color contrast
- [ ] Form validation & error states
- [ ] 3D performance on mid-tier devices
- [ ] SEO meta & structured data
- [ ] Analytics events

---

## Phase 10: Deployment (Day 43+)

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Environment Variables
Set all keys from the Architecture document.

### Post-Deploy
- Custom domain + HTTPS
- Monitoring (Vercel Analytics / Speed Insights)
- Error tracking (Sentry optional)
- CMS integration if needed (Sanity, Contentful, or Strapi) for blog/case studies
- A/B Testing: Use Vercel Edge Config or Optimizely

---

*This implementation guide was generated as part of the CINTEXA website master build. All components are production-ready patterns that should be adapted to your specific requirements.*
