'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'career-counselling',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate brief network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-premium p-6 sm:p-8">
      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-heading font-bold text-slate-900">
            Consultation Request Received
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, <strong className="text-slate-800">{formData.name}</strong>. An Eminent Pathways counselor will contact you via phone ({formData.phone}) shortly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', phone: '', email: '', service: 'career-counselling', message: '' });
              }}
              className="text-xs font-semibold text-brand-navy hover:underline py-2 px-4"
            >
              Submit Another Inquiry
            </button>
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider block">
              Consultation Inquiry
            </span>
            <h3 className="font-heading font-bold text-xl text-brand-navy">
              Book a Confidential Discussion
            </h3>
            <p className="text-xs text-slate-500">
              Speak directly with an academic, IT, or career advisor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Amitabha Roy"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="block text-xs font-medium text-slate-700 mb-1">
                Area of Interest <span className="text-rose-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold bg-white"
              >
                <option value="career-counselling">Career Counselling</option>
                <option value="pay-after-placement">IT Career Program (Pay After Placement)</option>
                <option value="school-admission">School Admission Consultancy</option>
                <option value="college-admission">College Admission Consultancy</option>
                <option value="university-admission">University Admission Solutions</option>
                <option value="it-admission">IT Admission Solutions</option>
                <option value="placement-support">Placement & Career Support</option>
                <option value="management-solutions">Management Solutions (NIC 70200)</option>
                <option value="hr-services">HR Services & Staffing</option>
                <option value="it-services">IT & Software Solutions</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                Email Address <span className="text-slate-400">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. name@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
              How can we assist you?
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide a brief note regarding your academic background, career goal, or organization requirement..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-brand-navy hover:bg-brand-navy-700 text-white font-semibold text-sm shadow transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>{loading ? 'Submitting Inquiry...' : 'Submit Consultation Request'}</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Direct Instant Channels */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Prefer immediate response?</span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phones[0]}`}
                className="inline-flex items-center gap-1 text-slate-700 hover:text-brand-navy font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span>Call Now</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
