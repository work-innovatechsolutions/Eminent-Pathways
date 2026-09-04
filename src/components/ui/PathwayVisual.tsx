'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PathwayVisualProps {
  interactive?: boolean;
  variant?: 'compact' | 'full';
}

export default function PathwayVisual({ interactive = false, variant = 'full' }: PathwayVisualProps) {
  const milestones = [
    { label: 'EDUCATION', sub: 'Foundational Knowledge', color: 'border-blue-500 text-blue-600 bg-blue-50' },
    { label: 'SKILLS', sub: 'Technical & Interview Prep', color: 'border-brand-gold text-brand-gold-dark bg-brand-gold/10' },
    { label: 'CAREER', sub: 'Guided Pathway Direction', color: 'border-emerald-500 text-emerald-600 bg-emerald-50' },
    { label: 'OPPORTUNITY', sub: 'Placement Assistance', color: 'border-indigo-500 text-indigo-600 bg-indigo-50' },
    { label: 'GROWTH', sub: 'Endless Possibilities', color: 'border-brand-navy text-brand-navy bg-slate-100' },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 text-xs font-semibold">
        {milestones.map((item, idx) => (
          <React.Fragment key={item.label}>
            <span className={`px-2.5 py-1 rounded-full border ${item.color} tracking-wider font-mono text-[11px]`}>
              {item.label}
            </span>
            {idx < milestones.length - 1 && (
              <ArrowRight className="w-3 h-3 text-slate-300 hidden sm:inline" />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full py-8 overflow-hidden">
      {/* Background Pathway Line (SVG) */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Desktop Path Node Progress */}
        <div className="hidden md:grid md:grid-cols-5 gap-4 relative z-10">
          {milestones.map((m, idx) => (
            <div
              key={m.label}
              className={`relative flex flex-col items-center text-center p-4 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                idx === 1 ? 'ring-2 ring-brand-gold/40' : ''
              }`}
            >
              {/* Step indicator */}
              <div className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center mb-2 shadow-sm">
                0{idx + 1}
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900 tracking-wide">
                {m.label}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                {m.sub}
              </p>

              {idx < milestones.length - 1 && (
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Vertical Pathway */}
        <div className="md:hidden space-y-3">
          {milestones.map((m, idx) => (
            <div
              key={m.label}
              className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200 shadow-sm"
            >
              <div className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                0{idx + 1}
              </div>
              <div className="flex-grow">
                <span className="font-heading font-bold text-xs text-slate-900 block">
                  {m.label}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {m.sub}
                </span>
              </div>
              {idx === 4 && <Sparkles className="w-4 h-4 text-brand-gold" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
