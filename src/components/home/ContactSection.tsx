import React from 'react';
import { MapPin, Phone, MessageCircle, ShieldCheck, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import { siteConfig } from '@/config/site';

export default function ContactSection() {
  return (
    <section id="contact-section" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-widest uppercase">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Visit our office or reach out today.
          </h2>
          <p className="text-slate-600 text-sm">
            Our counselors are available to assist you with in-person or remote consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (6 cols) */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          {/* Contact Details & Map Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Operational Office Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    {siteConfig.operationalOffice.heading}
                  </h3>
                  <span className="text-xs text-slate-500">
                    Primary location for student & client visits
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 block text-sm">
                  {siteConfig.operationalOffice.line1}
                </span>
                <p>
                  {siteConfig.operationalOffice.city}, District {siteConfig.operationalOffice.district}
                  <br />
                  {siteConfig.operationalOffice.state} – {siteConfig.operationalOffice.pin}
                </p>
              </div>

              {/* Direct Communication Channels */}
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

              {/* Google Maps Embed for Kalyani Location */}
              <div className="rounded-xl overflow-hidden border border-slate-200 h-48 w-full relative bg-slate-100">
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

            {/* Separated Box: Registered Enterprise Details (Kolkata) */}
            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {siteConfig.registeredEnterprise.heading}
                </span>
              </div>
              <div className="text-xs text-slate-600 space-y-1 pt-1">
                <p>
                  <strong>Registered Address:</strong> {siteConfig.registeredEnterprise.fullAddress}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 font-mono">
                  <span>Udyam: {siteConfig.registeredEnterprise.udyamNumber}</span>
                  <span>•</span>
                  <span>Classification: {siteConfig.registeredEnterprise.enterpriseType}</span>
                  <span>•</span>
                  <span>NIC: 70200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
