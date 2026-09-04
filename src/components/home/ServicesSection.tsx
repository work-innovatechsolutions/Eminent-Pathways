'use client';

import React, { useState } from 'react';
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
} from 'lucide-react';
import { servicesData, serviceCategories } from '@/data/services';
import { Service } from '@/types';

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

export default function ServicesSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    {
      id: 'education',
      title: 'EDUCATION',
      subtitle: 'School, College, University & IT Admissions',
      description: 'Systematic guidance across school levels, degree colleges, universities, and computing institutions.',
      services: servicesData.filter((s) => s.category === 'education'),
    },
    {
      id: 'career',
      title: 'CAREER',
      subtitle: 'Counselling & Placement Support',
      description: 'Personalized career evaluation, aptitude alignment, and employment readiness.',
      services: servicesData.filter((s) => s.category === 'career'),
    },
    {
      id: 'business',
      title: 'BUSINESS',
      subtitle: 'Management Solutions & HR Staffing',
      description: 'Management consultancy under registered NIC 70200 and enterprise talent acquisition.',
      services: servicesData.filter((s) => s.category === 'business'),
    },
    {
      id: 'technology',
      title: 'TECHNOLOGY',
      subtitle: 'IT-Related Services & Software Solutions',
      description: 'Practical technology execution spanning web, application, digital marketing, and technical support.',
      services: servicesData.filter((s) => s.category === 'technology'),
    },
  ];

  const filteredCategories =
    selectedFilter === 'all'
      ? categories
      : categories.filter((c) => c.id === selectedFilter);

  return (
    <section id="services-section" className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-widest uppercase">
              <span>09 Core Service Areas</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
              Integrated guidance across four disciplines.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every service is designed to deliver clarity, eliminate guesswork, and provide end-to-end procedural support.
            </p>
          </div>

          {/* Fast Category Filter */}
          <div className="w-full md:w-auto">
            {/* Mobile Filter (< sm): Structured 2-row layout with symmetrical 2x2 balance */}
            <div className="sm:hidden w-full bg-slate-100/90 p-2 rounded-2xl border border-slate-200/80 shadow-sm">
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-between ${
                  selectedFilter === 'all'
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'text-slate-700 hover:bg-white/80'
                }`}
              >
                <span>All Services</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    selectedFilter === 'all'
                      ? 'bg-brand-gold text-brand-navy'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  09
                </span>
              </button>
              <div className="grid grid-cols-2 gap-1.5 mt-1.5">
                {serviceCategories
                  .filter((cat) => cat.id !== 'all')
                  .map((cat) => {
                    const count =
                      cat.id === 'education'
                        ? '04'
                        : cat.id === 'career'
                        ? '02'
                        : cat.id === 'business'
                        ? '02'
                        : '01';
                    const isSelected = selectedFilter === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedFilter(cat.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center justify-between ${
                          isSelected
                            ? 'bg-brand-navy text-white shadow-md'
                            : 'text-slate-700 bg-white/70 hover:bg-white'
                        }`}
                      >
                        <span className="truncate">{cat.label}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ml-1 ${
                            isSelected
                              ? 'bg-white/20 text-white font-bold'
                              : 'text-slate-400'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Desktop & Tablet Filter (>= sm): Clean horizontal pill row */}
            <div className="hidden sm:inline-flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/70 shadow-inner">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 whitespace-nowrap flex-shrink-0 ${
                    selectedFilter === cat.id
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-white/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All 4 Category Blocks Rendered (All 9 Services Immediately Discoverable) */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-6"
            >
              {/* Category Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-navy tracking-wide uppercase">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{category.subtitle}</p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  {category.services.length} {category.services.length === 1 ? 'Service' : 'Services'}
                </span>
              </div>

              {/* Service Cards Grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.services.map((service) => {
                  const Icon = iconMap[service.iconName] || GraduationCap;
                  return (
                    <div
                      key={service.slug}
                      className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-gold/50 transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div>
                          <h4 className="font-heading font-bold text-base text-slate-900 group-hover:text-brand-navy transition-colors leading-snug">
                            {service.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1.5 line-clamp-3 leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-100">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy hover:text-brand-blue transition-colors group-hover:underline"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* View All Hub CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
          >
            <span>Explore Complete Services Directory & Process Flows</span>
            <ArrowRight className="w-4 h-4 text-brand-navy" />
          </Link>
        </div>
      </div>
    </section>
  );
}
