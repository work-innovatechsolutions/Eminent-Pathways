import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Eminent Pathways',
  description: 'Terms of service and engagement guidelines for Eminent Pathways.',
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider block">
            Legal & Compliance
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy mt-1">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: September 2026 | Standard Editable Template
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by the following terms. If you disagree with any part of these terms, please refrain from using our web services or contact our team directly for clarification.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              2. Nature of Services
            </h2>
            <p>
              Eminent Pathways provides consultation, admission guidance, IT recruitment readiness, placement assistance, and management advisory services. All guidance and counseling are provided based on academic merit, institutional guidelines, and candidate capabilities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. Program Participation & Terms
            </h2>
            <p>
              Specific program offerings—including the Pay After Placement IT career program—are subject to individual candidate evaluation, mutual written agreements, and formal enrollment criteria.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
              <strong>Transparency Notice:</strong> Terms, eligibility, and mutual commitments for specific career programs are formally outlined in candidate enrollment documentation prior to commencement.
            </div>
            <p className="text-slate-500 italic">
              [Note for Business Administrator: Insert detailed institutional contractual terms, fee fulfillment conditions, or formal agreements as established by the enterprise.]
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. Intellectual Property
            </h2>
            <p>
              The content, brand design, official logo, and materials published on this website are the property of Eminent Pathways and protected by applicable copyright and trademark provisions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising in connection with services shall be subject to the competent jurisdiction in West Bengal, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
