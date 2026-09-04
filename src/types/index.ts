export type ServiceCategory = 'education' | 'career' | 'business' | 'technology';

export interface Service {
  slug: string;
  category: ServiceCategory;
  categoryLabel: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  audience: string;
  processSteps: string[];
  iconName: string;
  badge?: string;
}

export interface CareerProgramDeliverable {
  title: string;
  description: string;
  iconName: string;
}

export interface CareerProgramStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'admissions' | 'career' | 'it';
}

export interface ValuePillar {
  title: string;
  description: string;
  iconName: string;
}

export interface ApproachStage {
  step: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  status: 'planned' | 'in-progress' | 'published';
  summary: string;
}
