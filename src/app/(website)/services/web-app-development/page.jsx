
 import React from 'react';
 import WebDevelopmentPageClient from './WebDevelopmentPageClient';
 
 
export const metadata = {
  title: 'Website Development Company in Udaipur | Web App & E-Commerce Experts – Beeztech ',
  description:
    'Beeztech  is a leading website development company in Udaipur offering custom web apps, e-commerce sites, and CMS solutions. We build fast, secure, and scalable websites for startups and businesses across India and abroad.',
  keywords:
    'website development Udaipur,web development agency in udaipur, web design company Rajasthan, eCommerce development India, custom web app developers, CMS website Udaipur, responsive web design Indore, website maintenance Gandhinagar, web developers for startups, UI UX web design Rajkot, Tier 2 IT agency',
  authors: [{ name: 'Beeztech ' }],
  openGraph: {
    title: 'Website Development Company in Udaipur | Web App & E-Commerce Experts – Beeztech ',
    description:
      'Professional website and web app development company in Udaipur. Beeztech builds scalable, SEO-friendly, and high-performance web solutions for startups and growing businesses.',
    url: 'https://www.beeztech.studio/services/web-app-development',
    siteName: 'Beeztech ',
    images: [
      {
        url: 'https://www.beeztech.studio/images/og-website-development.png',
        width: 1200,
        height: 630,
        alt: 'Website Development Company in Udaipur – Beeztech ',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Udaipur | Beeztech ',
    description:
      'Top-rated web development agency in Udaipur specializing in responsive websites, custom web apps, and eCommerce platforms for startups and SMEs.',
    images: ['https://www.beeztech.studio/images/og-website-development.png'],
  },
  alternates: {
    canonical: 'https://www.beeztech.studio/services/web-app-development',
  },
};

 export default function WebDevelopmentPage() {
     return <WebDevelopmentPageClient/>;
 }
 