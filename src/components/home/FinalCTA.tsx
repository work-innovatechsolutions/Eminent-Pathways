import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FinalCTA() {
  return (
    <section className="bg-brand-navy-900 text-white py-16 md:py-20 relative overflow-hidden border-b border-slate-800">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-800 border border-brand-gold/30 text-brand-gold-light text-xs font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span>Take The First Step</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          Let’s build your future together.
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Whether you are navigating institutional admissions, preparing for a technology career with Pay After Placement, or seeking enterprise management solutions.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-sm shadow-md transition-all group"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
          <span>Operational in Kalyani (741235)</span>
          <span>•</span>
          <a href={`tel:${siteConfig.phones[0]}`} className="hover:text-white transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-brand-gold" />
            <span>+91 {siteConfig.phones[0]}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
