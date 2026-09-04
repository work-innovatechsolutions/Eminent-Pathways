'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phones[0]}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-navy mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-tight">Call</span>
        </a>

        <a
          href={siteConfig.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-tight">WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-brand-navy hover:bg-brand-navy-700 text-white transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4 text-brand-gold mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-tight">Consult</span>
        </Link>
      </div>
    </div>
  );
}
