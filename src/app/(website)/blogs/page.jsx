export const revalidate = 0;
export const dynamic = 'force-dynamic';

import React from 'react';
import BeezTechBlogPageClient from './BeezTechBlogPageClient';

export const metadata = {
  // ---- Primary SEO ----
  title: 'Beeztech  Blog | Web Design, Branding & Digital Marketing Insights in Udaipur',
  description:
    'Discover expert insights from Beeztech  — Udaipur’s leading creative digital agency. Explore blogs on IT solutions, branding, product design, web development, SaaS, and digital marketing for startups and enterprises across India and overseas.',
  keywords:
    'Beeztech  Blog, Branding blogs India, Digital agency blog Udaipur, IT blogs Rajasthan, Web development blogs Udaipur, SaaS design blogs, UI UX blogs, Product design insights, Digital marketing blogs India, Beeztech branding insights',
  authors: [{ name: 'Beeztech Studio' }],
  robots: {
    index: true,
    follow: true,
  },

  // ---- Open Graph (Facebook, LinkedIn, etc.) ----
  openGraph: {
    title: 'Beeztech  Blog | Creative, Branding & IT Insights from Udaipur',
    description:
      'Read Beeztech  latest insights on branding, SaaS design, web development, and digital marketing — crafted for modern businesses in India and abroad.',
    type: 'website',
    url: 'https://www.beeztech.studio/blogs',
    siteName: 'Beeztech ',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.beeztech.studio/images/og-blogs.png',
        width: 1200,
        height: 630,
        alt: 'Beeztech  Blog - Creative Branding & Web Insights',
      },
    ],
  },

  // ---- Twitter Card ----
  twitter: {
    card: 'summary_large_image',
    title: 'Beeztech  Blog | Creative, Branding & IT Insights',
    description:
      'Explore Beeztech  blogs on IT, branding, SaaS, and digital marketing — insights for startups, agencies, and global businesses.',
    images: ['https://www.beeztech.studio/images/og-blogs.png'],
  },

  // ---- Canonical URL ----
  alternates: {
    canonical: 'https://www.beeztech.studio/blogs',
  },

  // ---- Geo & Location ----
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Udaipur',
    'geo.position': '24.5854;73.7125',
    ICBM: '24.5854, 73.7125',
  },

  // ---- Optional Schema (JSON-LD) ----
  metadataBase: new URL('https://www.beeztech.studio'),
};






import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';

async function getPosts() {
  const query = groq`*[_type == "post"] | order(_publishedAt desc, _createdAt desc) {
    _id,
    id,
    title,
    slug,
    date,
    readingTime,
    category,
    excerpt,
    image,
    author,
    keywords,
    meta,
    _publishedAt,
    _createdAt,
    content[] {
      ...,
      "type": _type
    }
  }`;
  return client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function BeezTechBlogPage() {
  const posts = await getPosts();
  return <BeezTechBlogPageClient posts={posts} />;
}
