'use client';

import React, { useState } from 'react';
import { ShieldCheck, Award, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { credentialsData } from '@/data/credentials';
import CertificateModal from '@/components/ui/CertificateModal';

export default function CredentialsSection() {
  const [activeModal, setActiveModal] = useState<'udyam' | 'iso' | null>(null);

  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-widest uppercase">
            <span>Trust & Compliance</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            {credentialsData.sectionTitle}
          </h2>
          <p className="text-slate-600 text-sm">
            {credentialsData.sectionSubtitle}
          </p>
        </div>

        {/* Credentials 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Udyam Card */}
          <div className="rounded-2xl p-7 bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{credentialsData.udyam.badge}</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Ministry of MSME</span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 tracking-tight">
                  {credentialsData.udyam.header}
                </h3>
                <span className="text-sm font-mono font-bold text-emerald-700 block mt-1">
                  {credentialsData.udyam.regNumber}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[11px]">Enterprise Type:</span>
                  <span className="font-semibold text-slate-800">{credentialsData.udyam.enterpriseType}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Major Activity:</span>
                  <span className="font-semibold text-slate-800">{credentialsData.udyam.majorActivity}</span>
                </div>
                <div className="col-span-2 pt-1">
                  <span className="text-slate-400 block text-[11px]">NIC Classification:</span>
                  <span className="font-semibold text-slate-800">{credentialsData.udyam.nicCode}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200/80">
              <button
                type="button"
                onClick={() => setActiveModal('udyam')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 shadow-sm transition-all"
              >
                <Eye className="w-4 h-4 text-emerald-600" />
                <span>{credentialsData.udyam.ctaText}</span>
              </button>
            </div>
          </div>

          {/* ISO 9001:2015 Card */}
          <div className="rounded-2xl p-7 bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark text-[11px] font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-brand-gold-dark" />
                  <span>{credentialsData.iso.badge}</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Quality Management</span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 tracking-tight">
                  {credentialsData.iso.header}
                </h3>
                <span className="text-sm font-bold text-brand-navy block mt-1">
                  {credentialsData.iso.standard}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[11px]">Certificate Number:</span>
                  <span className="font-mono font-bold text-slate-800">{credentialsData.iso.certNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Verification Portal:</span>
                  <a
                    href={credentialsData.iso.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>uscert.co.uk</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="col-span-2 pt-1">
                  <span className="text-slate-400 block text-[11px]">Scope:</span>
                  <span className="text-slate-700 text-[11px] leading-snug block line-clamp-2">
                    {credentialsData.iso.scope}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200/80">
              <button
                type="button"
                onClick={() => setActiveModal('iso')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 shadow-sm transition-all"
              >
                <Eye className="w-4 h-4 text-brand-gold-dark" />
                <span>{credentialsData.iso.ctaText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Viewers */}
      <CertificateModal
        isOpen={activeModal === 'udyam'}
        onClose={() => setActiveModal(null)}
        title="Udyam Registration Certificate"
        subtitle={`Ministry of MSME — ${credentialsData.udyam.regNumber}`}
        documentPath={credentialsData.udyam.documentPath}
        documentType={credentialsData.udyam.documentType}
        details={[
          { label: 'Enterprise Name', value: 'Eminent Pathways' },
          { label: 'Udyam Reg. Number', value: credentialsData.udyam.regNumber },
          { label: 'Enterprise Type', value: credentialsData.udyam.enterpriseType },
          { label: 'Major Activity', value: credentialsData.udyam.majorActivity },
          { label: 'NIC 2-Digit', value: '70 — Activities of head offices; management consultancy activities' },
          { label: 'Registration Date', value: credentialsData.udyam.registrationDate },
          { label: 'Registered Office', value: credentialsData.udyam.registeredAddress },
        ]}
      />

      <CertificateModal
        isOpen={activeModal === 'iso'}
        onClose={() => setActiveModal(null)}
        title="ISO 9001:2015 Certificate"
        subtitle="Universal Quality Standards — Quality Management System"
        documentPath={credentialsData.iso.documentPath}
        documentType={credentialsData.iso.documentType}
        verificationUrl={credentialsData.iso.verificationUrl}
        details={[
          { label: 'Standard', value: credentialsData.iso.standard },
          { label: 'Certificate Number', value: credentialsData.iso.certNumber },
          { label: 'Issuance Date', value: credentialsData.iso.issuanceDate },
          { label: '1st Surveillance', value: credentialsData.iso.surveillanceDate },
          { label: 'Scope of Certification', value: credentialsData.iso.scope },
          { label: 'Verification Registry', value: 'www.uscert.co.uk' },
        ]}
      />
    </section>
  );
}
