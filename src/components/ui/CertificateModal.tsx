'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  documentPath: string;
  documentType: 'image' | 'pdf';
  details: { label: string; value: string }[];
  verificationUrl?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  title,
  subtitle,
  documentPath,
  documentType,
  details,
  verificationUrl,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold-dark flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy">
                {title}
              </h3>
              <p className="text-xs text-slate-500">{subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 flex-grow space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
            {details.map((item, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-slate-400 block font-medium">{item.label}</span>
                <span className="font-semibold text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Document Display */}
          <div className="relative rounded-xl border border-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center min-h-[350px]">
            {documentType === 'image' ? (
              <div className="relative w-full h-[450px]">
                <Image
                  src={documentPath}
                  alt={title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ) : (
              <iframe
                src={documentPath}
                title={title}
                className="w-full h-[450px] border-none"
              />
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-100 bg-slate-50">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Official verified document issued to Eminent Pathways</span>
          </div>

          <div className="flex items-center gap-3">
            {verificationUrl && (
              <a
                href={verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <span>Verify on Registry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={documentPath}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-brand-navy text-xs font-semibold text-white hover:bg-brand-navy-700 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Open / Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
