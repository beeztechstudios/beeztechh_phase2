export const revalidate = 0;
export const dynamic = 'force-dynamic';

import { ArrowLeft, Clock } from 'lucide-react';
import ContentRenderer from '@/components/Blogs/BeezTechContentRenderer';
import { client, urlFor } from '@/lib/sanity';
import { groq } from 'next-sanity';
import Link from 'next/link';

// Related posts helper - now using Sanity query
async function getRelatedPosts(currentPostId, currentCategory) {
  const query = groq`*[_type == "post" && _id != $currentPostId && category == $currentCategory][0...3] {
    _id,
    title,
    slug,
    date,
    readingTime,
    image
  }`;
  return client.fetch(query, { currentPostId, currentCategory }, { next: { revalidate: 0 } });
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const query = groq`*[_type == "post"] { slug }`;
  const posts = await client.fetch(query);
  return posts.map(post => ({ slug: post.slug.current }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    title,
    excerpt,
    keywords,
    author,
    date,
    meta,
    image
  }`;
  const post = await client.fetch(query, { slug }, { next: { revalidate: 0 } });

  if (!post) {
    return {
      title: 'Blog Not Found | BeezTech Studio',
      description: 'The requested blog post could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const fullUrl = `https://www.beeztech.studio/blogs/${slug}`;

  return {
    title: `${post.meta?.title || post.title} | BeezTech Studio Blog`,
    description: post.meta?.description || post.excerpt || post.title,
    keywords: post.keywords?.join(', ') || 'BeezTech Studio Blog, branding, design, marketing, Udaipur',
    authors: [{ name: post.author || 'BeezTech Studio' }],
    openGraph: {
      title: `${post.title} | BeezTech Studio Blog`,
      description: post.excerpt || post.title,
      type: 'article',
      url: fullUrl,
      siteName: 'BeezTech Studio',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | BeezTech Studio Blog`,
      description: post.excerpt || post.title,
      creator: '@beeztechstudio',
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}


export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    category,
    author,
    readingTime,
    date,
    image,
    content,
    keywords
  }`;
  const post = await client.fetch(query, { slug }, { next: { revalidate: 0 } });

  if (!post)
    return (
      <div className="p-12 text-center text-xl bg-white min-h-screen">
        404 - Article not found.
      </div>
    );

  const relatedPosts = await getRelatedPosts(post._id, post.category);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-gray-900">
      {/* Navigation / Back Button */}
      <nav className="pt-24 pb-6 px-4 sm:px-6 max-w-4xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>
      </nav>

      {/* Header Section */}
      <header className="px-4 sm:px-6 max-w-4xl mx-auto text-center mb-10">
        <div className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest text-orange-500 uppercase bg-orange-50 rounded-full">
          {post.category}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500 border-y border-gray-100 py-4">
          <span className="font-medium text-gray-900">{post.author}</span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {post.readingTime}
          </span>
          <span className="text-gray-300">•</span>
          <span>{post.date}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-gray-200" style={{paddingBottom: '52.5%'}}>
          <img
            src={post.image?.asset ? urlFor(post.image).width(1200).url() : post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <article className="prose prose-slate lg:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-strong:text-gray-900 prose-img:rounded-xl max-w-none">
          <ContentRenderer content={post.content} />
        </article>

        {/* SEO Tag Section */}
        {post.keywords && (
          <footer className="mt-16 pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-gray-600 bg-gray-50 rounded-md border border-gray-100 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-default"
                >
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </footer>
        )}
      </main>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <aside className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Recommended Reading</h2>
              <Link href="/blogs" className="text-sm font-semibold text-orange-600 hover:underline">
                View all posts →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(rPost => (
                <Link
                  key={rPost._id}
                  href={`/blogs/${rPost.slug.current}`}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-1200/630 overflow-hidden">
                    <img
                      src={rPost.image?.asset ? urlFor(rPost.image).url() : rPost.image}
                      alt={rPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {rPost.title}
                    </h3>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <span>{rPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{rPost.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
