
import React from 'react';
import PortfolioPage from './Work_client';

export const metadata = {
  title: 'Beeztech Portfolio – Case Studies, Branding & Web Development Projects',
  description:
    'Explore Beeztech’s portfolio showcasing branding, UI/UX design, website development, SaaS products, and digital transformation projects for clients across India and globally.',
  
  keywords: [
    'Beeztech portfolio',
    'branding projects Udaipur',
    'web development case studies',
    'UI UX portfolio Udaipur',
    'SaaS development portfolio',
    'Beeztech work showcase',
    'creative agency portfolio'
  ],

  authors: [{ name: 'Beeztech' }],

  openGraph: {
    title: 'Beeztech Portfolio – Branding, UI/UX & Web Development Case Studies',
    description:
      'See how Beeztech transforms brands with world-class design, development, and digital strategy. Explore our best work across industries.',
    url: 'https://www.beeztech.studio/works',
    siteName: 'Beeztech',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026418/workspace_fzoeje.jpg',
        width: 1200,
        height: 630,
        alt: 'Beeztech Portfolio & Case Studies',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Beeztech Portfolio – Best Branding & Web Development Case Studies',
    description:
      'Discover Beeztech’s top branding, UI/UX, SaaS, and website development case studies.',
    images: [
      'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026418/workspace_fzoeje.jpg'
    ],
  },

  alternates: {
    canonical: 'https://www.beeztech.studio/works',
  },
};

export default function WorkPage() {
  return <PortfolioPage />;
}

