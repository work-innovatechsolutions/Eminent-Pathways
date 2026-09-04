import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Users,
  Briefcase,
  HelpCircle,
  Clock,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { careerProgramData } from '@/data/career-program';
import ContactForm from '@/components/ui/ContactForm';
import PathwayVisual from '@/components/ui/PathwayVisual';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IT Career Program | Pay After Placement',
  description:
    'Learn IT. Get Interview-Ready. Pay After Placement! Eminent Pathways offers IT recruitment training, interview preparation, and placement assistance.',
};

export default function CareerPage() {
  const deliverableIcons = [GraduationCap, Users, Briefcase, ShieldCheck];

  return (
    <div className="bg-white">
      {/* 1. Career Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-navy to-brand-navy-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>Specialized Technology Program</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                Learn IT. Get Interview-Ready. <br />
                <span className="text-brand-gold-light">Pay After Placement!</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {careerProgramData.hero.benefitScope}
              </p>

              <div className="p-4 rounded-xl bg-brand-navy-800/80 border border-slate-700/80 space-y-2">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider block">
                  Core Philosophy
                </span>
                <p className="text-sm text-slate-200 italic">
                  &ldquo;Train Today. Get Placed. Pay After Placement.&rdquo;
                </p>
                <p className="text-xs text-slate-400">
                  Our training model aligns our commitment directly with your career success.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#apply-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-sm shadow-md transition-all group"
                >
                  <span>Apply for Free Demo Session</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Poster Creative */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] aspect-[873/1280] rounded-2xl overflow-hidden border-2 border-brand-gold/50 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-gold group">
                <Image
                  src="/images/career-poster.jpeg"
                  alt="Learn IT Get Interview-Ready Pay After Placement"
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

      {/* 2. Who Can Benefit? */}
      <section className="py-14 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
            Target Audience
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
            Who Can Benefit?
          </h2>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-sm text-slate-700 leading-relaxed max-w-2xl mx-auto">
            <p className="font-medium text-base text-slate-900 mb-2">
              Designed for individuals looking to build practical IT skills, improve interview readiness and receive placement assistance.
            </p>
            <p className="text-slate-500 text-xs">
              Whether you are completing academic studies in computer science, seeking technical skill development, or preparing for corporate recruitment drives.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 4 Key Deliverables (Source Wording) */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-widest block">
              Documented Scope
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
              Four Core Deliverables
            </h2>
            <p className="text-slate-600 text-sm">
              The four foundational pillars explicitly established in our program design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerProgramData.deliverables.map((d, idx) => {
              const Icon = deliverableIcons[idx] || CheckCircle2;
              return (
                <div
                  key={d.title}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
                      {d.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {d.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Deliverable 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. The 6-Step Journey with Authentic Facility Photo */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
              Step-by-Step Flow
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
              The 6-Step Career Journey
            </h2>
            <p className="text-slate-600 text-sm">
              Follow a clear, outcome-directed pathway from skill building to formal placement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Steps Grid (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {careerProgramData.sixStepJourney.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-brand-gold/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-navy text-brand-gold font-mono font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {step.stepNumber}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Authentic Facility Image Beside the Steps (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/classroom-2.jpg"
                    alt="Eminent Pathways Learning Environment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="p-4 bg-white border-t border-slate-100">
                  <span className="font-semibold text-xs text-slate-900 block">
                    Authentic Training & Study Space
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Our dedicated facility in Kalyani provides an immersive learning environment for technical and interview preparation.
                  </p>
                </div>
              </div>

              {/* Transparency Notice Card */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>{careerProgramData.termsNotice.title}</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  {careerProgramData.termsNotice.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Program Specific FAQs */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
              Program Details
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {careerProgramData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
              >
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Apply / Consultation Form Section */}
      <section id="apply-section" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-widest block">
              Orientation Registration
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-brand-navy">
              Apply for Demo & Evaluation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Submit your inquiry to schedule an initial profile assessment and counseling session with our technical mentors.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
