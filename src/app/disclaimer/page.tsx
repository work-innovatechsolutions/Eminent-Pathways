import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Disclaimer | Eminent Pathways',
  description: 'Legal disclaimer and institutional notice for Eminent Pathways.',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider block">
            Legal & Compliance
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy mt-1">
            Disclaimer
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: September 2026 | Standard Editable Template
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. General Information
            </h2>
            <p>
              The information provided by Eminent Pathways on this website is for general educational, career advisory, and institutional informational purposes. While we strive to maintain accuracy, institutional criteria, university cutoff scores, and corporate hiring conditions remain subject to independent third-party decisions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              2. No Guarantee of Admission or Placement Outcomes
            </h2>
            <p>
              Eminent Pathways provides guidance, document preparation aid, technical training, and interview coaching. We do not guarantee final admission decisions by independent academic boards or colleges, nor do we issue unconditional employment guarantees. Final selection depends on candidate performance, qualifying examinations, and hiring enterprise requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. Independent Enterprise Status
            </h2>
            <p>
              Eminent Pathways is an independent Micro Enterprise registered under the Ministry of MSME, Government of India (Udyam Registration: {siteConfig.registeredEnterprise.udyamNumber}) with registered activity in Management Consultancy (NIC 70200). Mentions of institutions or industry boards are purely descriptive of counseling domains.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. External Links & Certifications
            </h2>
            <p>
              Our website may link to third-party verification registries (such as www.uscert.co.uk for our ISO 9001:2015 Quality Management System Certificate No. {siteConfig.iso.certNumber}). We are not responsible for the ongoing availability or third-party web content of external domains.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
