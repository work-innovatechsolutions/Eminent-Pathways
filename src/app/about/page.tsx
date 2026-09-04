import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Phone,
  Compass,
} from 'lucide-react';
import { aboutData } from '@/data/about';
import { credentialsData } from '@/data/credentials';
import { siteConfig } from '@/config/site';
import ApproachTimeline from '@/components/home/ApproachTimeline';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CredentialsSection from '@/components/home/CredentialsSection';

export const metadata: Metadata = {
  title: 'About Eminent Pathways | Guidance & Credibility',
  description:
    'Learn about Eminent Pathways, a one-stop organization for Education, Career, IT, HR & Placement Services based in Kalyani, West Bengal. Registered Micro Enterprise under MSME and ISO 9001:2015 certified system.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-navy to-brand-navy-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Organization Overview</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            About Eminent Pathways
          </h1>

          <p className="text-base sm:text-lg text-brand-gold-light font-medium">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>

          <p className="text-sm text-slate-300 leading-relaxed">
            {siteConfig.positioning}
          </p>
        </div>
      </section>

      {/* 2. Brand Story & Purpose */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                Our Foundation
              </span>

              <h2 className="font-heading font-extrabold text-3xl text-brand-navy tracking-tight leading-tight">
                Structured counsel for academic, career, and digital decisions.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {aboutData.narrative}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
                  Official Mottos
                </span>
                <p className="text-xs text-slate-700 italic">
                  &ldquo;Train Today. Get Placed. Pay After Placement.&rdquo;
                </p>
                <p className="text-xs text-slate-700 italic">
                  &ldquo;Your Dream. Our Guidance. Together We Achieve.&rdquo;
                </p>
              </div>

              {/* 3 Verified Facts */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-200">
                <div>
                  <span className="font-heading font-black text-2xl text-brand-navy block font-mono">
                    09
                  </span>
                  <span className="text-xs text-slate-500">Core Services</span>
                </div>
                <div>
                  <span className="font-heading font-black text-2xl text-brand-navy block font-mono">
                    05
                  </span>
                  <span className="text-xs text-slate-500">Step Approach</span>
                </div>
                <div>
                  <span className="font-heading font-black text-2xl text-brand-navy block font-mono">
                    2025
                  </span>
                  <span className="text-xs text-slate-500">Udyam Registered</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/classroom-3.webp"
                    alt="Eminent Pathways Learning Spaces"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoKAAcABUB8JZQCo9EQdjymMQAA/mRKgfKQxb65aXozu7bHWBnlETFY2jftTh/AAAA="
                  />
                </div>
                <div className="p-4 bg-white border-t border-slate-100">
                  <span className="font-semibold text-xs text-slate-900 block">
                    Operational Campus Facility
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    1 No. Government Market, Kalyani, Nadia, West Bengal – 741235
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5-Step Methodology */}
      <ApproachTimeline />

      {/* 4. Core Value Pillars */}
      <WhyChooseUs />

      {/* 5. Verified Credentials */}
      <CredentialsSection />

      {/* 6. Operational Location Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
            Visit Our Operational Office
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            {siteConfig.operationalOffice.fullAddress}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white text-xs font-semibold shadow hover:bg-brand-navy-700 transition-colors"
            >
              <span>View Map & Book Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 text-xs font-semibold border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>Call +91 {siteConfig.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
