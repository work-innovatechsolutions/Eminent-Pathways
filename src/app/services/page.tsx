import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { servicesData, serviceCategories } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services Directory | 09 Core Areas',
  description:
    'Explore the 9 core service areas offered by Eminent Pathways: School, College & University Admissions, IT Admissions, Career Counselling, Management Solutions, IT Services, HR Solutions, and Placement Support.',
};

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

export default function ServicesPage() {
  const categories = [
    {
      id: 'education',
      title: 'Education Solutions',
      tagline: 'School, College, University & IT Academic Pathways',
      services: servicesData.filter((s) => s.category === 'education'),
    },
    {
      id: 'career',
      title: 'Career & Placement Solutions',
      tagline: 'Personalized Counselling & Interview Enablement',
      services: servicesData.filter((s) => s.category === 'career'),
    },
    {
      id: 'business',
      title: 'Business & Management Solutions',
      tagline: 'Management Consultancy (NIC 70200) & HR Staffing',
      services: servicesData.filter((s) => s.category === 'business'),
    },
    {
      id: 'technology',
      title: 'Technology & IT Services',
      tagline: 'Software, Web, Application & Digital Solutions',
      services: servicesData.filter((s) => s.category === 'technology'),
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-navy to-brand-navy-900 text-white py-16 md:py-20 text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Comprehensive Directory</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Our 09 Core Service Areas
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Providing reliable institutional counseling, professional recruitment coaching, enterprise management, and digital execution.
          </p>
        </div>
      </section>

      {/* Categorized Services List */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {categories.map((category) => (
          <div key={category.id} className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="font-heading font-extrabold text-2xl text-brand-navy">
                {category.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">{category.tagline}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => {
                const Icon = iconMap[service.iconName] || GraduationCap;
                return (
                  <div
                    key={service.slug}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-gold/50 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 text-brand-navy flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-brand-gold-dark uppercase tracking-wider block">
                          {service.categoryLabel}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-slate-900 mt-0.5">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="pt-2">
                        <ul className="space-y-1.5">
                          {service.features.slice(0, 3).map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-blue"
                      >
                        <span>Detailed Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-slate-500 hover:text-brand-navy"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
