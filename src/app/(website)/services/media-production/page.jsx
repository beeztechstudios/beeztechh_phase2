import React from 'react';
import MediaProductionPageClient from './MediaProductionPageClient';


export const metadata = {
  title:
    "Media & Graphics Production Agency in Udaipur | Video Editing, Motion Graphics – Beeztech",
  description:
    "Beeztech offers professional media and graphics production services in Udaipur, including motion graphics, video editing, photography, and creative direction. Trusted by startups and brands in Indore, Gandhinagar, and overseas for high-impact visuals.",
  keywords: [
    "media production Udaipur",
    "graphics design Udaipur",
    "motion graphics Udaipur",
    "video editing Udaipur",
    "photography Udaipur",
    "creative direction Udaipur",
    "video production Indore",
    "media agency Gandhinagar",
    "post production studio Rajasthan",
    "international media design partner",
  ],
  authors: [{ name: "Beeztech " }],
  robots: "index, follow",

  openGraph: {
    title:
      "Media & Graphics Production Agency in Udaipur | Beeztech ",
    description:
      "Professional media and graphics production services by Beeztech in Udaipur. From motion graphics and video production to creative campaigns for startups and global brands.",
    url: "https://www.beeztech.studio/services/media-production",
    type: "website",
    // images: [
    //   {
    //     url: "https://www.beeztech.studio/images/og-media-production.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Beeztech Media & Graphics Production Services in Udaipur",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Media & Graphics Production Services in Udaipur – Beeztech ",
    description:
      "Beeztech provides media production, video editing, motion graphics, and creative direction for startups and marketing teams across Udaipur and beyond.",
    // images: ["https://www.beeztech.studio/images/og-media-production.png"],
  },

  alternates: {
    canonical: "https://www.beeztech.studio/services/media-production",
  },
};

 

export default function MediaProductionPage() {
  return <MediaProductionPageClient />;
}
