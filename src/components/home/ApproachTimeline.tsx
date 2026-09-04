import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { aboutData } from '@/data/about';

export default function ApproachTimeline() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm">
            <span>Our Methodology</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            How We Work: The 5-Step Approach
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From initial assessment to long-term accomplishment, our five sequential stages ensure clarity, confidence, and structured progress.
          </p>
        </div>

        {/* 5-Step Process Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {aboutData.approachStages.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-gold/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-brand-gold">
                    {stage.step}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold group-hover:bg-brand-navy group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {idx < aboutData.approachStages.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
