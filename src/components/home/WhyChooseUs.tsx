import React from 'react';
import {
  UserCheck,
  Target,
  ShieldCheck,
  Award,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { aboutData } from '@/data/about';

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Target,
  ShieldCheck,
  Award,
  Layers,
  CheckCircle2,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50/60 py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
            Core Value Pillars
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Why Choose Eminent Pathways
          </h2>
          <p className="text-slate-600 text-sm">
            Six foundational commitments driving our educational, placement, and consultancy engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.valuePillars.map((pillar) => {
            const Icon = iconMap[pillar.iconName] || CheckCircle2;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-brand-navy flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
