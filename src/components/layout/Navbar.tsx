'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { appImages } from '@/config/images';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 py-3 sm:py-3.5 transition-[background-color,box-shadow,border-color] duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white/98 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-gold/40 shadow-sm transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
              <Image
                src={appImages.logo.src}
                alt="Eminent Pathways Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL={appImages.logo.blurDataURL}
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
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-navy font-semibold bg-slate-100/80'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbarActiveIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
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
              <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center transition-transform hover:scale-110">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{siteConfig.phones[0]}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-brand-navy hover:bg-brand-navy-700 shadow-sm hover:shadow transition-colors duration-150 group active:scale-95"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button with Animated Rotation */}
          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer with Smooth Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6"
          >
            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.03 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
              }}
              className="flex flex-col space-y-1"
            >
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -8 },
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    <Link
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-slate-100 text-brand-navy font-semibold border-l-4 border-brand-gold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${siteConfig.phones[0]}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold active:scale-95 transition-transform"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call Us</span>
                </a>
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-semibold active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-xl bg-brand-navy text-white text-sm font-semibold shadow hover:bg-brand-navy-700 active:scale-95 transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
