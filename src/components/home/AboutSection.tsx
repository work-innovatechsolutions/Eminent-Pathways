import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function AboutSection() {
  return (
    <section className="bg-brand-navy-900 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-800 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-wider uppercase">
              <span>Why Eminent Pathways Exists</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              A purposeful pathway connecting <br />
              <span className="text-brand-gold-light">education, skills & employment.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Navigating academic choices, technology readiness, and career advancement is frequently fragmented and confusing. Eminent Pathways was established to unite educational guidance, professional IT training, interview readiness, and corporate solutions into a transparent, dependable journey.
            </p>

            {/* Mottos banner */}
            <div className="p-4 rounded-xl bg-brand-navy-800/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 italic">
                  &ldquo;Train Today. Get Placed. Pay After Placement.&rdquo;
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 italic">
                  &ldquo;Your Dream. Our Guidance. Together We Achieve.&rdquo;
                </span>
              </div>
            </div>

            {/* Strictly 3 Verified Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-gold block font-mono">
                  09
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Core Service Areas
                </span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-gold block font-mono">
                  05
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Step Approach
                </span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-gold block font-mono">
                  2025
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Udyam Registration
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-gold-light hover:text-white transition-colors group"
              >
                <span>Read more about our approach and methodology</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Real Learning Space Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src="/images/classroom-1.jpg"
                  alt="Real learning environment at Eminent Pathways facility"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-brand-navy-900/90 backdrop-blur-sm border border-slate-800 text-xs">
                <span className="font-semibold text-white block">
                  Dedicated Learning & Counselling Facility
                </span>
                <span className="text-slate-400 text-[11px] block">
                  Operational in Kalyani, Nadia, West Bengal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
