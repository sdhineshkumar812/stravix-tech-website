export type ProjectCategory = 'all' | 'webapp' | 'commerce' | 'ai' | 'website';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  isDemoConcept: true; // Explicitly marked as demo concept
  conceptLabel: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  phase: string;
  timeline: string;
  description: string;
  deliverables: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  tag: string;
  startingPrice: string;
  currencyNote: string;
  timeline: string;
  idealFor: string;
  description: string;
  includedScope: string[];
  scopeDisclaimer: string;
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'delivery' | 'pricing' | 'tech' | 'ownership';
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
}
