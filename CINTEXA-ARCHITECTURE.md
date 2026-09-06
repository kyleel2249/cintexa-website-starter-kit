# CINTEXA — Production Website Architecture

## Overview
AI-Powered Business Commerce Technology Platform
Built with Next.js 14, React 18, TypeScript, Three.js, Tailwind CSS

## Project Structure

```
cintexa-website/
├── app/                          # Next.js App Router
│   ├── (marketing)/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Marketing layout
│   │   ├── solutions/
│   │   │   ├── page.tsx
│   │   │   ├── crm/
│   │   │   ├── ecommerce/
│   │   │   ├── business-intelligence/
│   │   │   └── ai-automation/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── technology/
│   │   ├── case-studies/
│   │   ├── resources/
│   │   ├── blog/
│   │   ├── about/
│   │   └── contact/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (portal)/
│   │   └── dashboard/
│   ├── api/
│   │   ├── contact/
│   │   ├── diagnostic/
│   │   └── assistant/
│   ├── layout.tsx                # Root layout
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── 3d/                       # Three.js components
│   │   ├── BusinessCore.tsx
│   │   ├── BusinessEcosystem.tsx
│   │   ├── DataNetwork.tsx
│   │   ├── AIOrb.tsx
│   │   ├── CommerceFlow.tsx
│   │   ├── CustomerJourney.tsx
│   │   ├── DiagnosticScanner.tsx
│   │   ├── IntelligenceCore.tsx
│   │   ├── TechnologyStack.tsx
│   │   ├── IndustryScene.tsx
│   │   ├── ParticleField.tsx
│   │   └── SceneContainer.tsx
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── GlassPanel.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── LoadingSpinner.tsx
│   ├── sections/                 # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── AISection.tsx
│   │   ├── OSSection.tsx
│   │   ├── DiagnosticSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── navigation/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Breadcrumb.tsx
│   ├── forms/
│   │   ├── ProjectIntakeForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── DiagnosticForm.tsx
│   └── assistant/
│       ├── AIAssistant.tsx
│       └── ChatInterface.tsx
├── lib/
│   ├── three/                    # Three.js utilities
│   │   ├── scene.ts
│   │   ├── camera.ts
│   │   ├── lighting.ts
│   │   ├── materials.ts
│   │   └── animations.ts
│   ├── gsap/
│   │   ├── scrollTrigger.ts
│   │   └── animations.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   ├── validation.ts
│   │   └── formatters.ts
│   └── hooks/
│       ├── useScrollProgress.ts
│       ├── useMousePosition.ts
│       ├── useReducedMotion.ts
│       ├── useInView.ts
│       └── useMediaQuery.ts
├── types/
│   ├── index.ts
│   ├── business.ts
│   ├── forms.ts
│   └── three.ts
├── styles/
│   ├── design-tokens.css
│   ├── animations.css
│   └── components.css
├── public/
│   ├── images/
│   ├── models/                   # 3D models (GLB/GLTF)
│   ├── textures/
│   └── fonts/
├── config/
│   ├── site.ts
│   ├── seo.ts
│   └── navigation.ts
├── middleware.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4
- **3D**: Three.js + React Three Fiber + Drei
- **Animation**: GSAP + ScrollTrigger
- **Forms**: React Hook Form + Zod
- **State**: Zustand
- **Analytics**: Vercel Analytics (or Plausible)

## Installation

```bash
npx create-next-app@latest cintexa-website --typescript --tailwind --app
npm install three @react-three/fiber @react-three/drei
npm install gsap @gsap/react
npm install zustand react-hook-form zod @hookform/resolvers
npm install @types/three
```

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://cintexa.com
NEXT_PUBLIC_API_URL=https://api.cintexa.com
CONTACT_FORM_WEBHOOK_URL=
DIAGNOSTIC_API_KEY=
AI_ASSISTANT_API_KEY=
```

## Development

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint check
npm run type-check # TypeScript check
```

## Performance Targets

- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Deployment

- **Primary**: Vercel (recommended for Next.js)
- **CDN**: Cloudflare (for static assets)
- **3D Assets**: Optimized GLB files with Draco compression
