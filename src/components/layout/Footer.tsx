import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Shield, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-brand-navy-900 text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Main Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold/40">
                <Image
                  src="/images/eminent-pathways-logo.jpeg"
                  alt="Eminent Pathways"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white block">
                  Eminent Pathways
                </span>
                <span className="text-xs text-brand-gold-light tracking-wide block">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.positioning}. Helping students, professionals, and organizations navigate academic, career, and digital decisions with structured guidance.
            </p>

            <div className="p-3.5 rounded-lg bg-brand-navy-800/80 border border-slate-800 space-y-1">
              <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">
                Official Mottos
              </span>
              <p className="text-xs text-slate-300 italic">
                &ldquo;Train Today. Get Placed. Pay After Placement.&rdquo;
              </p>
              <p className="text-xs text-slate-400 italic">
                &ldquo;Your Dream. Our Guidance. Together We Achieve.&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Core Services
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors text-brand-gold-light">
                  IT Career Program
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Operational Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Operational Office</span>
            </span>
            <p className="text-sm text-slate-300 leading-snug">
              {siteConfig.operationalOffice.line1}, {siteConfig.operationalOffice.city}
              <br />
              District {siteConfig.operationalOffice.district}, {siteConfig.operationalOffice.state}
              <br />
              PIN – {siteConfig.operationalOffice.pin}
            </p>

            <div className="pt-2 space-y-1 text-sm">
              <span className="text-xs text-slate-400 block">Direct Inquiries:</span>
              <div className="flex flex-col gap-1">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 text-white hover:text-brand-gold-light transition-colors text-xs font-mono"
                  >
                    <Phone className="w-3 h-3 text-brand-gold" />
                    <span>+91 {phone}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs text-brand-gold hover:underline"
              >
                <span>View Google Map & Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Registered Enterprise (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Registered Enterprise Details</span>
            </span>
            <div className="p-3 rounded-lg bg-brand-navy-800/90 border border-slate-800 space-y-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Udyam Registration No:</span>
                <span className="font-mono text-white font-semibold">
                  {siteConfig.registeredEnterprise.udyamNumber}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Enterprise Type:</span>
                <span className="text-slate-200">
                  {siteConfig.registeredEnterprise.enterpriseType} ({siteConfig.registeredEnterprise.majorActivity})
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">NIC Classification:</span>
                <span className="text-slate-200">
                  {siteConfig.registeredEnterprise.nicCode}
                </span>
              </div>
              <div className="pt-1 border-t border-slate-700/60">
                <span className="text-slate-400 block text-[11px]">Registered Address:</span>
                <span className="text-slate-300 leading-tight block">
                  {siteConfig.registeredEnterprise.fullAddress}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span>ISO 9001:2015 Quality Management System (Cert # {siteConfig.iso.certNumber})</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
            <span>Ministry of Micro, Small & Medium Enterprises (Udyam Verified)</span>
          </div>
          <div className="flex items-center gap-2 sm:col-span-2 lg:col-span-1">
            <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
            <span>Operational Base: Kalyani, Nadia, West Bengal</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="bg-brand-navy-900 border-t border-slate-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Eminent Pathways. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
