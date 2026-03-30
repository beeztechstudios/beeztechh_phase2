import React from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

const components = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed text-lg font-normal mb-6">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-10 mb-5 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3 tracking-tight">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 pl-6 py-4 italic text-xl text-gray-700 my-8 bg-blue-50/30 rounded-r-xl font-medium">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-3 pl-6 text-gray-700 text-lg mb-6">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-3 pl-6 text-gray-700 text-lg mb-6">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2.5 shrink-0"></span>
        <span className="font-normal">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="list-item font-normal">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-orange-600 px-1.5 py-0.5 rounded font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={!value.href.startsWith("/") ? "_blank" : undefined}
          style={{ color: '#2563eb', textDecoration: 'underline', textDecorationColor: 'rgba(37,99,235,0.4)' }}
          className="underline-offset-4 font-medium transition-colors hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            loading="lazy"
            className="w-full h-auto"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-500 mt-3 italic px-4 pb-4">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    // Fallback handlers for old manual block types
    paragraph: ({ value }) => (
      <p className="text-gray-700 leading-relaxed text-lg font-normal mb-6">
        {value.text}
      </p>
    ),
    heading: ({ value }) => (
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-10 mb-5 tracking-tight">
        {value.text}
      </h2>
    ),
    quote: ({ value }) => (
      <blockquote className="border-l-4 border-orange-500 pl-6 py-4 italic text-xl text-gray-700 my-8 bg-blue-50/30 rounded-r-xl font-medium">
        {value.text}
      </blockquote>
    ),
    list: ({ value }) => (
      <ul className="list-disc list-inside space-y-3 pl-6 text-gray-700 text-lg mb-6">
        {value.items?.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2.5 shrink-0"></span>
            <span className="font-normal">{item}</span>
          </li>
        ))}
      </ul>
    ),
    tip: ({ value }) => (
      <div className="p-5 rounded-xl bg-blue-50/30 border-l-4 border-orange-500 my-8 flex items-start space-x-3 shadow-sm">
        <p className="text-gray-800 font-normal text-base leading-relaxed">{value.text}</p>
      </div>
    ),
  },
};

const ContentRenderer = ({ content = [] }) => {
  if (!content || !Array.isArray(content) || content.length === 0) {
    return (
      <p className="text-gray-500 text-lg italic">
        No content available for this blog post.
      </p>
    );
  }

  return (
    <div className="portable-content font-sans antialiased [&_a]:text-blue-600 [&_a:hover]:text-blue-800 [&_a]:underline [&_a]:underline-offset-4">
      <PortableText value={content} components={components} />
    </div>
  );
};

export default ContentRenderer;
