import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, GraduationCap, Briefcase, Building } from 'lucide-react';
import { aboutData } from '@/data/about';

export default function AudienceSplit() {
  const icons = [GraduationCap, Briefcase, Building];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
            Focused Value Propositions
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Tailored solutions for every journey.
          </h2>
          <p className="text-slate-600 text-sm">
            Whether you are planning school admissions, pursuing IT career readiness, or growing an enterprise team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.audiencePanels.map((panel, idx) => {
            const Icon = icons[idx] || GraduationCap;
            return (
              <div
                key={panel.category}
                className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-navy border border-slate-200 shadow-sm flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {panel.category}
                    </h3>
                    <p className="text-xs font-medium text-brand-gold-dark mt-0.5">
                      {panel.tagline}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-200/80">
                    {panel.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/80">
                  <Link
                    href={panel.ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-blue transition-colors group"
                  >
                    <span>{panel.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
