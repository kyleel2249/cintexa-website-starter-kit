// ============================================================
// CINTEXA Type Definitions
// ============================================================

export interface BusinessSystem {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  category: SystemCategory;
}

export type SystemCategory = 
  | "customer" 
  | "commerce" 
  | "operations" 
  | "finance" 
  | "growth" 
  | "intelligence" 
  | "automation";

export interface AIAgent {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  systems: string[];
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: CaseStudyResult[];
  isPlaceholder: boolean;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  description?: string;
}

export interface BusinessDiagnostic {
  id: string;
  businessName: string;
  overallScore: number;
  categories: DiagnosticCategory[];
  opportunities: string[];
  risks: string[];
  recommendations: string[];
  createdAt: Date;
}

export interface DiagnosticCategory {
  name: string;
  score: number;
  maxScore: number;
  findings: string[];
  weight: number;
}

export interface ProjectIntake {
  id?: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  industry: string;
  businessSize: BusinessSize;
  currentSystems: string[];
  primaryChallenge: string;
  requiredSolution: string;
  budgetRange: BudgetRange;
  timeline: Timeline;
  additionalInfo?: string;
  submittedAt?: Date;
}

export type BusinessSize = "startup" | "sme" | "mid-market" | "enterprise";
export type BudgetRange = "under-10k" | "10k-50k" | "50k-100k" | "100k-500k" | "500k+" | "discuss";
export type Timeline = "asap" | "1-3-months" | "3-6-months" | "6-12-months" | "flexible";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    facebook: string;
    instagram: string;
    x: string;
    tiktok: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

// Three.js Types
export interface ThreeSceneConfig {
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  fov: number;
  near: number;
  far: number;
  ambientLight: number;
  directionalLight: number;
}

export interface ParticleConfig {
  count: number;
  size: number;
  color: string;
  opacity: number;
  speed: number;
}

export interface NodeConfig {
  id: string;
  position: [number, number, number];
  color: string;
  size: number;
  label: string;
  connections: string[];
}
