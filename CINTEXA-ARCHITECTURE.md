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
│   ├── hooks/
│   │   └── index.ts
│   ├── utils/
│   │   └── cn.ts
│   └── api/
│       └── client.ts
├── config/
│   ├── seo.ts
│   ├── navigation.ts
│   └── site.ts
├── types/
│   └── index.ts
├── public/
│   ├── images/
│   ├── models/
│   └── fonts/
├── design-tokens.css
├── tailwind.config.ts
├── package.json
└── README.md
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Design Tokens
- **3D Graphics**: Three.js / React Three Fiber
- **Animation**: GSAP + ScrollTrigger
- **UI Components**: Custom glassmorphism design system
- **State**: React hooks + Context
- **Forms**: React Hook Form + Zod
- **SEO**: next-seo / Metadata API

## Design System

Glassmorphism aesthetic with deep navy/black backgrounds, cyan/teal accents, and subtle particle effects. Design tokens defined in `design-tokens.css`.

## Key Features

1. Immersive 3D hero experiences
2. Interactive business ecosystem visualization
3. AI-powered diagnostic tools
4. Solution showcases (CRM, Ecommerce, BI, Automation)
5. Industry-specific pages
6. Case study system
7. Project intake & contact forms
8. AI assistant integration

## Performance Targets

- Lighthouse score ≥ 90
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- 3D scenes optimized with instancing and LOD
