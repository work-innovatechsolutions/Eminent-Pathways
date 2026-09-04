'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import PathwayVisual from '@/components/ui/PathwayVisual';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold-dark text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>EDUCATION • CAREER • IT • HR</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.12]">
            The right direction <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-navy-700 to-blue-700">
              can change your future.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Eminent Pathways helps students, professionals and businesses make better decisions across education, careers, technology and HR with structured, reliable guidance.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold shadow-sm transition-all"
            >
              <Compass className="w-4 h-4 text-brand-navy" />
              <span>Explore 09 Core Services</span>
            </Link>
          </div>

          {/* Verified Fast Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>09 Service Disciplines</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>5-Step Guided Approach</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Udyam Registered Micro Enterprise</span>
            </span>
          </div>
        </div>

        {/* EP Signature Pathway Visual Motif */}
        <div className="mt-12 pt-6">
          <div className="text-center mb-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              The Eminent Pathways Progression
            </span>
          </div>
          <PathwayVisual variant="full" />
        </div>
      </div>
    </section>
  );
}
