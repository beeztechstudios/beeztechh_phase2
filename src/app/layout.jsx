
// import Navbar from "@/components/Navbar";
// import "./globals.css"; // global styles
// import Footer from "@/components/Footer";
// import Script from "next/script";

// // Global Metadata for SEO
// // ✅ Improved Global Metadata for Beeztech  
// export const metadata = {
//   metadataBase: new URL('https://www.Beeztech.studio'),
//   title: {
//     default: 'Beeztech  | Creative Digital Agency in Udaipur',
//     template: '%s | Beeztech  '
//   },
//   description:
//     'Beeztech is a creative digital agency based in Udaipur, Rajasthan helping startups, law firms, and growing businesses with web development, branding, product design, and digital marketing. We serve clients across India, including Indore and Gandhinagar, and overseas.',
//   keywords: [
//     'digital agency Udaipur',
//     'branding agency Rajasthan',
//     'UI UX design for SaaS startups',
//     'custom web development Udaipur',
//     'creative agency Indore',
//     'brand identity design Gandhinagar',
//     'product design for law firms',
//     'web app development India',
//     'affordable digital agency Udaipur',
//     'Beeztech  '
//   ],
//   authors: [{ name: 'Beeztech  ', url: 'https://www.Beeztech.studio' }],
//   creator: 'Beeztech  ',
//   publisher: 'Beeztech  ',
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://www.Beeztech.studio',
//     siteName: 'Beeztech  ',
//     title: 'Beeztech   – Creative Digital Agency in Udaipur',
//     description:
//       'Full-service creative studio offering Branding, Web Development, UI/UX, Digital Marketing, and Media Production. Serving Udaipur, Indore, Gandhinagar, and overseas clients across SaaS, LegalTech, and business industries.',

//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Beeztech | Creative Digital Agency in Udaipur',
//     description:
//       'Beeztech is a full-service digital agency for startups and businesses. We offer web development, branding, digital marketing, and product design globally.',

//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon.ico',

//   },
//   manifest: '/site.webmanifest',
//   alternates: {
//     canonical: 'https://www.Beeztech.studio',
//   },
//   verification: {
//     google: 'h8AVtcYpu9JM7KWRC5j7tL6dVHEFS7p8wD_Y1fArAgY',
//   },
// };


// // JSON-LD structured data for organization
// const organizationSchema = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "Beeztech  ",
//   "url": "https://www.Beeztech.studio",
//   "logo": "https://www.Beeztech.studio/Logo_Black.png",
//   "description": "Beeztech   is a creative digital agency specializing in web development, branding, digital marketing, and media production based in Udaipur, Rajasthan, India.",
//   "address": {
//     "@type": "PostalAddress",
//     "addressLocality": "Udaipur",
//     "addressRegion": "Rajasthan",
//     "addressCountry": "IN"
//   },
//   "sameAs": [
//     "https://www.linkedin.com/company/Beeztech ",
//     "https://www.instagram.com/Beeztech ?igsh=MXJxamlwMnZ2a3N4ZA%3D%3D"
//   ],
//   "contactPoint": {
//     "@type": "ContactPoint",
//     "contactType": "Customer Service",
//     "email": "hello@Beeztech.studio"
//   }
// };

// const websiteSchema = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   "name": "Beeztech  ",
//   "url": "https://www.Beeztech.studio",
//   "potentialAction": {
//     "@type": "SearchAction",
//     "target": "https://www.Beeztech.studio/blogs?search={search_term_string}",
//     "query-input": "required name=search_term_string"
//   }
// };

// export default function RootLayout({ children }) {

//   return (
//     <html lang="en" >

//       <head>
//         {/* Global meta tags that are safe for all pages */}
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="author" content="Beeztech  " />
//         <meta name="robots" content="index, follow" />


//         {/* JSON-LD Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
//         />

//          <link
//       href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap"
//       rel="stylesheet"
//     />
//         <meta name="google-site-verification" content="h8AVtcYpu9JM7KWRC5j7tL6dVHEFS7p8wD_Y1fArAgY" />
//       </head>
//       <Script
//           id="microsoft-clarity"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(c,l,a,r,i,t,y){
//                   c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
//                   t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
//                   y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
//               })(window, document, "clarity", "script", "u0fu0a675r");
//             `,
//           }}
//         />

//       <body >
//         {/* Global Navbar */}
//         <Navbar />

//         {/* Page content */}
//         <main>{children}</main>

//         {/* Global Footer */}
//         <Footer />
//       </body>
//     </html>
//   );
// }
// app/layout.jsx
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.Beeztech.studio"),
  title: {
    default: "Beeztech  | Creative Digital Agency in Udaipur",
    template: "%s | Beeztech  ",
  },
  description:
    "Beeztech is a creative digital agency based in Udaipur, Rajasthan helping startups, law firms, and growing businesses with web development, branding, product design, and digital marketing. We serve clients across India, including Indore and Gandhinagar, and overseas.",
  keywords: [
    "digital agency Udaipur",
    "branding agency Rajasthan",
    "UI UX design for SaaS startups",
    "custom web development Udaipur",
    "creative agency Indore",
    "brand identity design Gandhinagar",
    "product design for law firms",
    "web app development India",
    "affordable digital agency Udaipur",
    "Beeztech  ",
  ],
  authors: [{ name: "Beeztech  ", url: "https://www.Beeztech.studio" }],
  creator: "Beeztech  ",
  publisher: "Beeztech  ",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.Beeztech.studio",
    siteName: "Beeztech  ",
    title: "Beeztech   – Creative Digital Agency in Udaipur",
    description:
      "Full-service creative studio offering Branding, Web Development, UI/UX, Digital Marketing, and Media Production. Serving Udaipur, Indore, Gandhinagar, and overseas clients across SaaS, LegalTech, and business industries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beeztech | Creative Digital Agency in Udaipur",
    description:
      "Beeztech is a full-service digital agency for startups and businesses. We offer web development, branding, digital marketing, and product design globally.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://www.Beeztech.studio" },
  verification: {
    google: "h8AVtcYpu9JM7KWRC5j7tL6dVHEFS7p8wD_Y1fArAgY",
  },
};

// JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beeztech  ",
  url: "https://www.Beeztech.studio",
  logo: "https://www.Beeztech.studio/Logo_Black.png",
  description:
    "Beeztech   is a creative digital agency specializing in web development, branding, digital marketing, and media production based in Udaipur, Rajasthan, India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Udaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/Beeztech",
    "https://www.instagram.com/Beeztech",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@Beeztech.studio",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Beeztech  ",
  url: "https://www.Beeztech.studio",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.Beeztech.studio/blogs?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic safe meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Beeztech" />
        <meta name="robots" content="index, follow" />
        <link rel="preload" href="/_next/static/css/87920e1f69862573.css" as="style" />
        {/* Structured data (safe in head) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="h8AVtcYpu9JM7KWRC5j7tL6dVHEFS7p8wD_Y1fArAgY"
        />

        {/*  ✅ GOOGLE ANALYTICS (gtag.js) */}
        {/* ------------------------------ */}
        <Script
          id="ga-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Q49VXJBSLN"
        />

        <Script
          id="ga-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q49VXJBSLN');
            `,
          }}
        />
      </head>

      {/* Insert GTM + Clarity using next/script (safe) */}
      {/* Google Tag Manager script (safe via next/script) */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MPCBSZQX');`,
        }}
      />

      {/* Microsoft Clarity (safe) */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "u0fu0a675r");`,
        }}
      />

      <body>
        {/* GTM noscript (keeps accessibility & fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPCBSZQX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="GTM"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
