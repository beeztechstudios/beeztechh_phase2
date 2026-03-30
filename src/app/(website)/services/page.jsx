
import React from 'react';
import ServicePageClient from './ServicePageClient';


export const metadata = {
  title: 'Services | Web App, Branding & SaaS Development Agency in Udaipur – Beeztech ',
  description:
    'Discover Beeztech  full range of services — from web & app development to SaaS MVPs, branding, UI/UX design, and digital marketing. Based in Udaipur, we help startups and businesses across India grow through creativity and technology.',
  keywords:
    'web development udaipur, app development udaipur, SaaS development udaipur, MVP development udaipur, branding agency udaipur, UI UX design rajasthan, digital marketing udaipur, creative tech agency udaipur, product design studio, Beeztech Studio services',
  authors: [{ name: 'Beeztech ' }],
  openGraph: {
    title:
      'Beeztech | Web App, SaaS & Branding Services in Udaipur, India',
    description:
      'Explore Beeztech  creative and tech-driven services: Web & App Development, SaaS MVPs, Branding, UI/UX Design, and Digital Marketing. Serving startups and businesses across India from Udaipur.',
    url: 'https://www.beeztech.studio/services',
    siteName: 'Beeztech ',
    images: [
      {
        url: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Logo_Black_s4dbro.png',
        width: 1200,
        height: 630,
        alt: 'Beeztech  | Web App, SaaS & Branding Services in Udaipur',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Beeztech  | Web App, SaaS & Branding Services in Udaipur',
    description:
      'Beeztech  offers complete digital solutions — from SaaS & web app development to branding and UI/UX design. Empowering startups across India from Udaipur.',
    images: ['https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Logo_Black_s4dbro.png'],
    creator: '@BeezTechStudio',
  },
  alternates: {
    canonical: 'https://www.beeztech.studio/services',
  },
};

export default function ServicesPage() {
    return <ServicePageClient/>;
}
