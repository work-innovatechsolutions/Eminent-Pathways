import React from 'react';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import CareerProgramPreview from '@/components/home/CareerProgramPreview';
import ApproachTimeline from '@/components/home/ApproachTimeline';
import AudienceSplit from '@/components/home/AudienceSplit';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CredentialsSection from '@/components/home/CredentialsSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (Light) */}
      <Hero />

      {/* 2. Trust Strip (White) */}
      <TrustStrip />

      {/* 3. About Summary (Dark Navy) */}
      <AboutSection />

      {/* 4. Services (White) - All 9 services visible across 4 category blocks */}
      <ServicesSection />

      {/* 5. IT Career Program Preview (Deep Navy + Gold) */}
      <CareerProgramPreview />

      {/* 6. How We Work / Our Approach (Light) */}
      <ApproachTimeline />

      {/* 7. Audience Split Panels (White) */}
      <AudienceSplit />

      {/* 8. Why Eminent Pathways (Off-White) */}
      <WhyChooseUs />

      {/* 9. Trust & Compliance Credentials (White) */}
      <CredentialsSection />

      {/* 10. FAQ (Light) */}
      <FAQSection />

      {/* 11. Final CTA (Dark Navy) */}
      <FinalCTA />

      {/* 12. Contact & Location (White) */}
      <ContactSection />
    </>
  );
}
