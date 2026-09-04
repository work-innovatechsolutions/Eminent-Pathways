import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { ourWorkData } from '@/data/our-work';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Our Work & Initiatives | Eminent Pathways',
  description:
    'Documenting verified institutional collaborations, technology implementations, and placement enablement at Eminent Pathways.',
};

export default function OurWorkPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-navy to-brand-navy-900 text-white py-16 md:py-20 text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Portfolio & Case Studies</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            {ourWorkData.heading}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            {ourWorkData.subheading}
          </p>
        </div>
      </section>

      {/* Honest Portfolio Section (Zero Fabrication) */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-white text-brand-navy border border-slate-200 shadow-sm flex items-center justify-center mx-auto">
            <Clock className="w-8 h-8 text-brand-gold" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="font-heading font-extrabold text-2xl text-slate-900">
              {ourWorkData.notice.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {ourWorkData.notice.message}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={ourWorkData.notice.actionHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white text-xs font-semibold hover:bg-brand-navy-700 transition-colors shadow-sm"
            >
              <span>{ourWorkData.notice.actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 border-t border-slate-200 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Adhering to verified documentation standards</span>
          </div>
        </div>
      </section>
    </div>
  );
}
