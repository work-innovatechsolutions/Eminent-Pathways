import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  GraduationCap,
  Building2,
  BookOpen,
  Laptop,
  Compass,
  Briefcase,
  TrendingUp,
  Users,
  Code,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { servicesData, getServiceBySlug } from '@/data/services';
import ContactForm from '@/components/ui/ContactForm';
import { siteConfig } from '@/config/site';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  BookOpen,
  Laptop,
  Compass,
  Briefcase,
  TrendingUp,
  Users,
  Code,
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Eminent Pathways`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.iconName] || GraduationCap;
  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Breadcrumbs Header */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-brand-navy">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/services" className="hover:text-brand-navy">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-navy to-brand-navy-900 text-white py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>{service.categoryLabel} Discipline</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details & Process */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-brand-navy">
                Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl text-brand-navy">
                Key Deliverables & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Guidance Process */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl text-brand-navy">
                Step-by-Step Guidance Flow
              </h3>
              <div className="space-y-3">
                {service.processSteps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      0{sIdx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Fit */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 space-y-1">
              <span className="font-bold block">Who is this service designed for?</span>
              <p className="text-slate-700">{service.audience}</p>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <h4 className="font-heading font-bold text-base text-brand-navy">
                  Related {service.categoryLabel} Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-between text-xs font-semibold text-slate-800"
                    >
                      <span>{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-navy" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Form & Quick Inquiries (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ContactForm />

            {/* Quick Consultation Card */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
              <span className="font-bold text-slate-900 block">
                Prefer Direct Consultation?
              </span>
              <p className="text-slate-600">
                Call our Kalyani office or send a message directly on WhatsApp for immediate guidance.
              </p>
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={`tel:${siteConfig.phones[0]}`}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call +91 {siteConfig.phones[0]}</span>
                </a>
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
