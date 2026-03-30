import React from 'react';
import BrandingPageClient from './BrandingPageClient';


export const metadata = {
  title: "Branding Agency in Udaipur | Logo & Brand Identity Design – BeezTech",
  description:
    "Beeztech is a creative branding agency in Udaipur offering professional logo design, brand identity, packaging, and marketing materials for startups and growing businesses. We also serve clients in Indore, Gandhinagar, and overseas.",
  keywords: [
    "branding agency Udaipur",
    "logo design Udaipur",
    "brand identity design",
    "packaging design",
    "print design",
    "branding services Indore",
    "branding company Gandhinagar",
    "startup branding solutions",
    "affordable branding studio Rajasthan",
    "international branding partner",
  ],
  authors: [{ name: "Beeztech " }],
  robots: "index, follow",

  openGraph: {
    title: "Creative Branding Agency in Udaipur | Beeztech ",
    description:
      "Looking for professional branding in Udaipur? Beeztech creates logos, brand identities, and design systems for startups in India and overseas.",
    url: "https://www.beeztech.studio/services/branding",
    type: "website",
    // images: [
    //   {
    //     url: "https://www.beeztech.studio/images/og-branding.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Beeztech Branding Services in Udaipur",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Branding & Logo Design Agency in Udaipur – BeezTech",
    description:
      "Professional branding and logo design services in Udaipur. We help startups build strong brand identities and visuals that scale globally.",
    // images: ["https://www.beeztech.studio/images/og-branding.png"],
  },

  alternates: {
    canonical: "https://www.beeztech.studio/services/branding",
  },
};
 

export default function BrandingPage() {
  return <BrandingPageClient />;
}
