import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B132B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://eminentpathways.com'),
  title: {
    default: 'Eminent Pathways | Education, Career, IT, HR & Placement Services',
    template: '%s | Eminent Pathways',
  },
  description:
    'Eminent Pathways is your one-stop solution for School, College & University Admission Consultancy, Career Counselling, IT Training with Pay After Placement, Management Solutions, and HR Services. Located in Kalyani, West Bengal.',
  keywords: [
    'Eminent Pathways',
    'Career Counselling Kalyani',
    'School Admission Consultancy West Bengal',
    'College Admission Consultancy Kolkata',
    'University Admission Solutions',
    'Pay After Placement IT Course',
    'IT Recruitment Training',
    'HR Services Kalyani',
    'Management Solutions Udyam',
    'ISO 9001:2015 Consultancy',
  ],
  authors: [{ name: 'Eminent Pathways' }],
  creator: 'Eminent Pathways',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://eminentpathways.com',
    title: 'Eminent Pathways | Education, Career, IT, HR & Placement Services',
    description:
      'Your Future • Our Guidance • Endless Possibilities. Helping students, job seekers and enterprises make informed choices across education, tech, and careers.',
    siteName: 'Eminent Pathways',
    images: [
      {
        url: '/images/eminent-pathways-logo.jpeg',
        width: 800,
        height: 800,
        alt: 'Eminent Pathways Official Emblem',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: 'Eminent Pathways Consultancy',
    url: 'https://eminentpathways.com',
    logo: 'https://eminentpathways.com/images/eminent-pathways-logo.jpeg',
    description: siteConfig.positioning,
    slogan: siteConfig.tagline,
    telephone: siteConfig.phones[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.operationalOffice.line1,
      addressLocality: siteConfig.operationalOffice.city,
      addressRegion: siteConfig.operationalOffice.state,
      postalCode: siteConfig.operationalOffice.pin,
      addressCountry: 'IN',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015 Quality Management System Certificate',
        credentialCategory: 'Certificate No. IN01233112',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Udyam Registration Certificate',
        credentialCategory: siteConfig.registeredEnterprise.udyamNumber,
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-brand-gold selection:text-white font-sans bg-white">
        <Navbar />
        <main className="flex-grow pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
