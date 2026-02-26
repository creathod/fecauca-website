import { ReactNode } from 'react';

export interface RouteItem {
  path: string;
  label: string;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}