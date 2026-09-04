import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, GraduationCap, Users, Briefcase } from 'lucide-react';
import { careerProgramData } from '@/data/career-program';

export default function CareerProgramPreview() {
  const deliverableIcons = [GraduationCap, Users, Briefcase, ShieldCheck];

  return (
    <section className="bg-brand-navy-900 text-white py-16 md:py-24 relative overflow-hidden border-y border-slate-800">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Offer & Deliverables (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Specialized IT Initiative</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Learn IT. Get Interview-Ready. <br />
              <span className="text-brand-gold-light">Pay After Placement!</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {careerProgramData.hero.benefitScope} Our structured 6-step journey prepares you for corporate technical interviews before any course fee obligation.
            </p>

            {/* 4 Exact Deliverables (Source Wording) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {careerProgramData.deliverables.map((item, idx) => {
                const Icon = deliverableIcons[idx] || CheckCircle2;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-navy-800/90 border border-slate-700/80"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-400 block mt-0.5 leading-snug">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Transparency Note */}
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>
                <strong>Terms & eligibility may apply:</strong> Candidate evaluation, curriculum scope, and placement support parameters are reviewed transparently during the initial consultation.
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/career"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-sm shadow-md transition-all group"
              >
                <span>Explore the 6-Step Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                <span>Book Free Demo Session</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic Visual Presentation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] aspect-[873/1280] rounded-2xl overflow-hidden border-2 border-brand-gold/50 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-gold group">
              <Image
                src="/images/career-poster.jpeg"
                alt="Learn IT. Get Interview-Ready. Pay After Placement! Official Poster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
