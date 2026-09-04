import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-slate-200/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Item 1: Udyam */}
          <div className="flex items-center gap-3.5 p-2 justify-start md:justify-center">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">
                Udyam Registered Enterprise
              </span>
              <span className="text-[11px] text-slate-500 font-mono block">
                {siteConfig.registeredEnterprise.udyamNumber}
              </span>
            </div>
          </div>

          {/* Item 2: ISO */}
          <div className="flex items-center gap-3.5 p-2 justify-start md:justify-center md:border-x md:border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/15 text-brand-gold-dark flex items-center justify-center flex-shrink-0 border border-brand-gold/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">
                ISO 9001:2015 Quality Management System Certificate
              </span>
              <span className="text-[11px] text-slate-500 font-mono block">
                Certificate No. {siteConfig.iso.certNumber}
              </span>
            </div>
          </div>

          {/* Item 3: 09 Core Services */}
          <div className="flex items-center gap-3.5 p-2 justify-start md:justify-center">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 border border-blue-200">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">
                09 Core Service Areas
              </span>
              <span className="text-[11px] text-slate-500 block">
                Education • Career • Business • Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
