// ============================================================
// CINTEXA SEO Configuration
// ============================================================

import { Metadata } from "next";

export const siteConfig = {
  name: "CINTEXA",
  description: "AI-Powered Business Commerce Technology. The technology behind better business.",
  url: "https://cintexa.com",
  ogImage: "https://cintexa.com/og-image.jpg",
  links: {
    linkedin: "https://linkedin.com/company/cintexa",
    facebook: "https://facebook.com/cintexa",
    instagram: "https://instagram.com/cintexa",
    x: "https://x.com/cintexa",
    tiktok: "https://tiktok.com/@cintexa",
  },
  contact: {
    email: "hello@cintexa.com",
    phone: "+1 (555) 000-0000",
    address: "Business District, Tech City",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI-Powered Business Commerce Technology`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI business software",
    "business automation",
    "CRM software",
    "custom business software",
    "e-commerce development",
    "business intelligence",
    "AI automation",
    "software development",
    "digital transformation",
    "business technology",
    "enterprise software",
    "custom CRM",
    "AI agents for business",
    "business management software",
    "commerce platform",
    "SaaS development",
    "business operating system",
  ],
  authors: [{ name: "CINTEXA" }],
  creator: "CINTEXA",
  publisher: "CINTEXA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | AI-Powered Business Commerce Technology`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "CINTEXA - AI-Powered Business Commerce Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI-Powered Business Commerce Technology`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@cintexa",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const pageMetadata: Record<string, Metadata> = {
  home: defaultMetadata,
  solutions: {
    title: "Business Solutions",
    description: "Integrated CRM, sales, marketing, e-commerce, inventory, accounting, and AI automation solutions.",
  },
  services: {
    title: "Services",
    description: "Website development, mobile apps, SaaS platforms, AI solutions, and custom enterprise software.",
  },
  industries: {
    title: "Industries",
    description: "Technology solutions tailored for retail, finance, hospitality, healthcare, and more industries.",
  },
  technology: {
    title: "Technology",
    description: "Modern technology architecture powering the CINTEXA business platform.",
  },
  "case-studies": {
    title: "Case Studies",
    description: "See how businesses transformed their operations with CINTEXA technology.",
  },
  about: {
    title: "About",
    description: "Learn about CINTEXA's mission to build intelligent business technology.",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with the CINTEXA team to discuss your business technology needs.",
  },
  "start-project": {
    title: "Start a Project",
    description: "Tell us what your business needs. We'll help turn requirements into practical digital systems.",
  },
};

// Schema.org structured data generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.x,
      siteConfig.links.tiktok,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "sales",
      email: siteConfig.contact.email,
    },
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CINTEXA Business Platform",
    applicationCategory: "BusinessApplication",
    description: "AI-powered business commerce technology platform with CRM, e-commerce, automation, and business intelligence.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider,
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
