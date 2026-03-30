// import React from 'react';
// import HomePageClient from './HomePageClient';


// export const metadata = {
//   title: 'Beeztech | Web App, SaaS & Branding Agency in Udaipur',
//   description:
//     'Beeztech  is a creative tech agency from Udaipur specializing in custom web apps, SaaS MVPs, UI/UX design, and branding. We help startups and businesses turn buzzing ideas into reality across India and globally.',
//   keywords:
//     'web development company udaipur, SaaS development udaipur, branding agency udaipur, UI UX design udaipur, MVP development udaipur, custom web app development, creative agency rajasthan, product design studio udaipur, startup design and development agency',
//   authors: [{ name: 'Beeztech  ' }],
//   openGraph: {
//     title:
//       'Beeztech  Studio | Creative Web & Branding Agency in Udaipur, India',
//     description:
//       'Build your next SaaS, website, or brand identity with Beeztech  — a creative tech agency from Udaipur offering web app development, UI/UX design, and branding solutions for startups and businesses.',
//     url: 'https://www.Beeztech.studio/',
//     siteName: 'Beeztech ',
//     images: [
//       {
//         url: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Logo_Black_s4dbro.png',
//         width: 1200,
//         height: 630,
//         alt: 'Beeztech | Web App & Branding Agency in Udaipur',
//       },
//     ],
//     type: 'website',
//     locale: 'en_IN',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title:
//       'Beeztech  | Web App, SaaS & Branding Agency in Udaipur',
//     description:
//       'Beeztech   creates stunning brands, SaaS products, and custom web apps. Based in Udaipur, serving startups across India and abroad.',
//     images: ['https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Logo_Black_s4dbro.png'],
//     creator: '@Beeztech ',
//   },
//   alternates: {
//     canonical: 'https://www.Beeztech.studio/',
//   },
// };


// export default function HomePage() {
//   return <HomePageClient />;
// }
import React from 'react';
import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'Beeztech | Web App, SaaS & Branding Agency in Udaipur',
  description:
    'Beeztech is a creative tech agency from Udaipur specializing in custom web apps, SaaS MVPs, UI/UX design, and branding. We help startups and businesses turn buzzing ideas into reality across India and globally.',

  // ⭐ Keywords optimized safely (not spammy)
  keywords: [
    'web development company Udaipur',
    'SaaS development Udaipur',
    'branding agency Udaipur',
    'UI UX design Udaipur',
    'MVP development Udaipur',
    'custom web app development',
    'creative agency Rajasthan',
    'startup design and development agency'
  ],

  authors: [{ name: 'Beeztech' }],

  openGraph: {
    title: 'Beeztech Studio | Creative Web & Branding Agency in Udaipur, India',
    description:
      'Build your next SaaS, website, or brand identity with Beeztech — a creative tech agency from Udaipur offering web app development, UI/UX design, and branding solutions for startups and growing businesses.',
    url: 'https://www.beeztech.studio/',
    siteName: 'Beeztech',
    images: [
      {
        url: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Logo_Black_s4dbro.png',
        width: 1200,
        height: 630,
        alt: 'Beeztech | Web App & Branding Agency in Udaipur',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Beeztech | Web App, SaaS & Branding Agency in Udaipur',
    description:
      'Beeztech creates stunning brands, SaaS products, and custom web apps. Based in Udaipur, serving startups across India and abroad.',
    images: [
      'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Logo_Black_s4dbro.png'
    ],
    creator: '@Beeztech',
  },

  alternates: {
    canonical: 'https://www.beeztech.studio/',
  },
};

export default function HomePage() {
  return <HomePageClient />;
 
}

