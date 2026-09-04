import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Eminent Pathways',
  description: 'Privacy policy and data handling guidelines for Eminent Pathways.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider block">
            Legal & Compliance
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: September 2026 | Standard Editable Template
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Overview
            </h2>
            <p>
              Eminent Pathways (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects the privacy of our visitors, students, and clients. This Privacy Policy explains how information is collected, used, and safeguarded when you visit our website or contact our operational office at {siteConfig.operationalOffice.line1}, {siteConfig.operationalOffice.city}, West Bengal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p>
              When you submit a consultation inquiry or contact us via telephone or WhatsApp, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name and contact telephone number</li>
              <li>Email address (if provided voluntarily)</li>
              <li>Academic interests, career goals, or organization requirements shared during inquiry</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. Use of Information
            </h2>
            <p>
              The information collected is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your direct inquiries and schedule counseling sessions</li>
              <li>Provide preliminary guidance on admissions, IT programs, or management solutions</li>
              <li>Maintain internal records for communication follow-up</li>
            </ul>
            <p className="text-slate-500 italic">
              [Note for Business Administrator: Update this section with any specific CRM or third-party data processing tools upon formal deployment.]
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. Data Protection & Security
            </h2>
            <p>
              We implement standard physical and administrative security measures to protect the integrity of submitted information. We do not sell, rent, or trade your contact information to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              5. Contact Information
            </h2>
            <p>
              For privacy-related inquiries or data update requests, please contact our operational office:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="font-bold text-slate-900">{siteConfig.operationalOffice.name}</span>
              <p>{siteConfig.operationalOffice.fullAddress}</p>
              <p>Telephone: {siteConfig.phones.join(' / ')}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
