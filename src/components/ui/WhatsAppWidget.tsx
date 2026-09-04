'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  MessageCircle,
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
      {/* 1. Popup Modal / Chat Box (Golden & White Theme with Green WhatsApp CTA) */}
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

            {/* Direct Chat Primary Button (Green with WhatsApp Logo) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleOpenWhatsApp()}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] via-emerald-600 to-[#128C7E] hover:from-emerald-600 hover:to-[#075E54] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 flex items-center justify-center gap-2.5 group"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-white" />
                </div>
                <span>Start Direct Chat</span>
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

        {/* Circular WhatsApp Action Button (Green with WhatsApp Logo) */}
        <div className="relative flex items-center justify-center">
          {/* Pulsing Outer Aura */}
          <span className="absolute w-16 h-16 rounded-full bg-emerald-500/25 animate-ping pointer-events-none" />
          <span className="absolute w-20 h-20 rounded-full bg-emerald-500/10 pointer-events-none" />

          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              setShowTooltip(false);
            }}
            className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white focus:outline-none"
            aria-label="Open WhatsApp Chat"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white font-bold" />
            ) : (
              <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
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
