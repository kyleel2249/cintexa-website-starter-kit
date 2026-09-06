"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SOLUTIONS = [
  {
    id: "crm",
    title: "CRM",
    description: "Manage relationships, contacts, leads, customers and opportunities in one connected system.",
    icon: "Users",
    color: "#3b82f6",
  },
  {
    id: "sales",
    title: "Sales",
    description: "Manage pipelines, deals, quotations, sales activity and revenue with intelligent tracking.",
    icon: "DollarSign",
    color: "#60a5fa",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Manage campaigns, leads, customer segments and automated communication at scale.",
    icon: "Megaphone",
    color: "#06b6d4",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Build and manage digital commerce experiences that convert visitors into customers.",
    icon: "ShoppingCart",
    color: "#3b82f6",
  },
  {
    id: "inventory",
    title: "Inventory",
    description: "Track products, stock, movement and availability across all your channels.",
    icon: "Package",
    color: "#22d3ee",
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Monitor financial activity, reporting and business performance in real-time.",
    icon: "BarChart3",
    color: "#8b5cf6",
  },
  {
    id: "cx",
    title: "Customer Experience",
    description: "Centralize customer communication, support and loyalty programs.",
    icon: "Headphones",
    color: "#06b6d4",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Automate repetitive work and deploy intelligent AI agents across your business.",
    icon: "Bot",
    color: "#a78bfa",
  },
  {
    id: "bi",
    title: "Business Intelligence",
    description: "Turn business data into useful insights and actionable decisions.",
    icon: "TrendingUp",
    color: "#60a5fa",
  },
  {
    id: "custom",
    title: "Custom Software",
    description: "Build technology around specific business requirements and workflows.",
    icon: "Code",
    color: "#3b82f6",
  },
];

function SolutionCard({ solution, index }: { solution: typeof SOLUTIONS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Card
        className="group h-full cursor-pointer"
        hover
        glass
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${solution.color}20, ${solution.color}10)`,
            border: `1px solid ${solution.color}30`,
          }}
        >
          <svg
            className="w-6 h-6"
            style={{ color: solution.color }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>

        <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-cx-primary-light transition-colors">
          {solution.title}
        </h3>

        <p className="text-cx-text-secondary text-sm leading-relaxed">
          {solution.description}
        </p>
      </Card>
    </motion.div>
  );
}

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-32 bg-cx-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Business Solutions"
          title="One Technology Layer. Many Business Functions."
          subtitle="Integrated tools that work together to power your entire operation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
