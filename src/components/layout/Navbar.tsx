'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-sm py-2.5' : 'bg-white/95 border-b border-slate-100 py-3.5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-gold/40 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/eminent-pathways-logo.jpeg"
                alt="Eminent Pathways Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-heading font-bold text-lg sm:text-xl text-brand-navy tracking-tight block leading-tight">
                Eminent Pathways
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Education • Career • IT • HR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-navy font-semibold bg-slate-100/80 border-b-2 border-brand-gold'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-brand-blue transition-colors px-2.5 py-1.5 rounded-md hover:bg-slate-50"
            >
              <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{siteConfig.phones[0]}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-brand-navy hover:bg-brand-navy-700 shadow-sm hover:shadow transition-all group"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1.5">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-100 text-brand-navy font-semibold border-l-4 border-brand-gold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${siteConfig.phones[0]}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span>Call Us</span>
              </a>
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              href="/contact"
              className="w-full text-center py-3 rounded-lg bg-brand-navy text-white text-sm font-semibold shadow"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
