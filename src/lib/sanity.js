import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g2g7wect',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-27',
  useCdn: false, // Set to true for production
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
