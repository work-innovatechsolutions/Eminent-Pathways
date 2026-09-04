import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, MessageCircle, ShieldCheck, Mail, Sparkles, Clock } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us & Location | Kalyani & Kolkata',
  description:
    'Contact Eminent Pathways. Visit our operational office at 1 No. Government Market, Kalyani, Nadia, West Bengal 741235 or call 8777241939 / 9038179133. Udyam registered in Kolkata.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-navy to-brand-navy-900 text-white py-16 md:py-20 text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Connect With Us</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Contact & Office Locations
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Schedule a counseling session, inquire about IT career programs, or visit our operational center.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column (6 cols) */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          {/* Location & Details Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* 1. Operational Office (Kalyani) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-lg text-slate-900">
                    {siteConfig.operationalOffice.heading}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Primary center for student, candidate & client visits
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 block text-sm">
                  {siteConfig.operationalOffice.line1}
                </span>
                <p>
                  {siteConfig.operationalOffice.city}, District {siteConfig.operationalOffice.district}
                  <br />
                  {siteConfig.operationalOffice.state} – {siteConfig.operationalOffice.pin}
                </p>
              </div>

              {/* Direct Phones & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                    <Phone className="w-3 h-3 text-brand-blue" />
                    <span>Call Us</span>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-xs font-mono font-bold text-slate-800 hover:text-brand-navy"
                      >
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp</span>
                  </span>
                  <a
                    href={siteConfig.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:underline block pt-1"
                  >
                    Chat +91 {siteConfig.whatsapp.number}
                  </a>
                </div>
              </div>

              {/* Official Email Placeholder Notice */}
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Business Inquiries:</span>
                </div>
                <span className="text-slate-500 font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded">
                  {siteConfig.email}
                </span>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-slate-200 h-64 w-full relative bg-slate-100">
                <iframe
                  title="Eminent Pathways Kalyani Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${siteConfig.operationalOffice.mapEmbedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>

            {/* 2. Distinctly Separated Registered Enterprise Details (Kolkata) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {siteConfig.registeredEnterprise.heading}
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    Statutory Udyam MSME Enterprise Data
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <div>
                  <span className="text-slate-400 block text-[11px]">Registered Address:</span>
                  <span className="font-semibold text-slate-900 block">
                    {siteConfig.registeredEnterprise.fullAddress}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px]">
                  <div>
                    <span className="text-slate-400 block">Udyam Registration:</span>
                    <span className="font-mono font-bold text-slate-800">
                      {siteConfig.registeredEnterprise.udyamNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Enterprise Classification:</span>
                    <span className="font-semibold text-slate-800">
                      {siteConfig.registeredEnterprise.enterpriseType} ({siteConfig.registeredEnterprise.majorActivity})
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block">NIC Classification:</span>
                    <span className="font-semibold text-slate-800">
                      {siteConfig.registeredEnterprise.nicCode}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
