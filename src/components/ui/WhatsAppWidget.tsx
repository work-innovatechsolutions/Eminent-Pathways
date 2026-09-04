'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  Send,
  ShieldCheck,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Compass,
  Building,
  Code,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

// Official authentic WhatsApp SVG icon
function WhatsAppIcon({ className = 'w-6 h-6', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

interface QuickOption {
  id: string;
  icon: React.ElementType;
  label: string;
  message: string;
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-show tooltip briefly after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const quickOptions: QuickOption[] = [
    {
      id: 'admission',
      icon: GraduationCap,
      label: 'School / College / University Admission',
      message: 'Hello Eminent Pathways, I would like to inquire about School/College/University Admission guidance.',
    },
    {
      id: 'career-program',
      icon: Briefcase,
      label: 'Pay After Placement IT Program',
      message: 'Hello Eminent Pathways, I am interested in the Pay After Placement IT Career Program.',
    },
    {
      id: 'career-counselling',
      icon: Compass,
      label: 'Career Counselling & Guidance',
      message: 'Hello Eminent Pathways, I would like to schedule a 1-on-1 Career Counselling session.',
    },
    {
      id: 'management-hr',
      icon: Building,
      label: 'Management Solutions & HR Staffing',
      message: 'Hello Eminent Pathways, I would like to discuss Management Consultancy / HR Services for my organization.',
    },
    {
      id: 'it-services',
      icon: Code,
      label: 'IT & Software Solutions',
      message: 'Hello Eminent Pathways, I would like to know more about your IT & Web Development services.',
    },
  ];

  const handleOpenWhatsApp = (customMessage?: string) => {
    const text = customMessage || siteConfig.whatsapp.message;
    const url = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-none select-none">
      {/* 1. Popup Modal / Chat Box (Golden & White Theme with Green CTA) */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 w-[92vw] sm:w-[380px] bg-white rounded-[28px] shadow-[0_20px_50px_rgba(11,19,43,0.18)] border border-brand-gold/40 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-200">
          {/* Header Banner (Ivory & Gold Gradient with Navy text) */}
          <div className="bg-gradient-to-r from-[#FCF9F2] via-white to-[#F7F1DF] border-b border-brand-gold/30 p-4 flex items-center justify-between relative shadow-sm">
            <div className="flex items-center gap-3">
              {/* Avatar with Gold Border & Live Indicator */}
              <div className="relative w-12 h-12 rounded-2xl bg-white p-0.5 shadow-sm border-2 border-brand-gold flex-shrink-0">
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/images/eminent-pathways-logo.jpeg"
                    alt="Eminent Pathways Desk"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                {/* Glowing Online status badge */}
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full animate-ping opacity-75" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-base text-brand-navy tracking-tight">
                    Eminent Pathways Desk
                  </h3>
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Online • Replies within minutes</span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body (White & Gold Theme) */}
          <div className="p-4 sm:p-5 space-y-4 max-h-[70vh] overflow-y-auto bg-slate-50/50">
            {/* Welcome message bubble */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FCF9F2] to-[#F5EED9] border border-brand-gold/35 shadow-sm space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                <span className="text-brand-gold-dark">👋 Welcome to Eminent Pathways!</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                How can we assist your academic or career journey today? Choose a quick option below or message our desk directly.
              </p>
              <div className="text-right">
                <span className="text-[10px] text-brand-gold-dark font-mono font-bold tracking-wider uppercase">
                  Official WhatsApp Desk
                </span>
              </div>
            </div>

            {/* Quick Inquiries Header */}
            <div>
              <span className="text-[11px] font-bold text-brand-gold-dark uppercase tracking-wider block mb-2 px-1">
                Quick Inquiries
              </span>

              {/* Inquiry Options List (Golden & White) */}
              <div className="space-y-2">
                {quickOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleOpenWhatsApp(opt.message)}
                      className="w-full flex items-center justify-between gap-3 p-3 rounded-xl bg-white hover:bg-[#FAF6EC] border border-slate-200/90 hover:border-brand-gold/60 text-left shadow-sm hover:shadow transition-all duration-150 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold-dark border border-brand-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-navy leading-snug">
                          {opt.label}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-gold-dark transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Chat Primary Button (Green with Official WhatsApp Logo) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleOpenWhatsApp()}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#25D366]/30 transition-all duration-200 flex items-center justify-center gap-2.5 group"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white flex-shrink-0" />
                <span className="font-extrabold tracking-wide">Start Direct Chat</span>
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Footer Trust Note */}
            <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-dark flex-shrink-0" />
              <span>Verified Business Number • Instant Response</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating Launcher Button & Tooltip Callout */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Pill Tooltip Callout ("Need help? Chat with Advisor 👋") */}
        {showTooltip && !isOpen && (
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-brand-gold/60 shadow-xl text-slate-800 text-xs font-bold animate-in fade-in slide-in-from-right-3 duration-300">
            {/* Green Online Dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="hover:text-brand-gold-dark transition-colors flex items-center gap-1 text-left text-brand-navy"
            >
              <span>Need help? Chat with Advisor</span>
              <span className="text-sm">👋</span>
            </button>

            {/* Dismiss Tooltip */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-700 p-0.5 rounded-full transition-colors ml-1"
              aria-label="Dismiss chat prompt"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Circular WhatsApp Action Button (Green with Official WhatsApp Logo) */}
        <div className="relative flex items-center justify-center">
          {/* Pulsing Outer Aura */}
          <span className="absolute w-16 h-16 rounded-full bg-[#25D366]/25 animate-ping pointer-events-none" />
          <span className="absolute w-20 h-20 rounded-full bg-[#25D366]/10 pointer-events-none" />

          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              setShowTooltip(false);
            }}
            className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white focus:outline-none"
            aria-label="Open WhatsApp Chat"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white font-bold" />
            ) : (
              <WhatsAppIcon className="w-8 h-8 fill-white" />
            )}

            {/* Notification Badge Dot */}
            {!isOpen && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
