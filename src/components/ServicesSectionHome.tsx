// // components/ServicesSectionHome.tsx
// 'use client';
// import React, { useState, forwardRef, Ref } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { ChevronDown, ArrowRight, Check, Sparkles } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image'; 

// // --- TypeScript Interface Definitions ---

// interface Service {
//     id: number;
//     title: string;
//     link: string;
//     image: string;
//     description: string;
//     details: string[];
// }

// // The component itself is defined with React.ForwardedRef<HTMLDivElement>
// // since it uses forwardRef to accept a ref to the main div.
// const ServicesSection = forwardRef((props, ref: Ref<HTMLDivElement>) => {
//     // 💡 Explicitly define state types. 
//     // expandedService should be number | null (null when closed)
//     const [expandedService, setExpandedService] = useState<number | null>(null);
//     const [hoveredService, setHoveredService] = useState<number>(0);

//     // 💡 Apply the Service interface
//     const services: Service[] = [
//         {
//             id: 1,
//             title: 'Web & App Development',
//             link: '/services/web-app-development',
//             image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/web_service_logo_rl7um1.png',
//             description:
//                 'We design and develop modern, scalable, and high-performing web and mobile applications tailored to your business goals.',
//             details: [
//                 'Website design & development — static, dynamic, or CMS-based (WordPress, Webflow, etc.)',
//                 'E-Commerce development — online stores, marketplaces, and payment integrations',
//                 'Custom web application development — dashboards, admin panels, CRMs, and booking systems',
//                 'Mobile app development — iOS, Android, and cross-platform (React Native, Flutter)',
//                 'API development & integration — RESTful and GraphQL-based services',
//                 'Website maintenance, performance optimization, and hosting setup'
//             ]
//         },
//         {
//             id: 2,
//             title: 'Branding & Identity',
//             link: '/services/branding',
//             image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026415/branding_service_logo_fa5bam.png',
//             description:
//                 'We help you create a strong, memorable, and consistent brand identity that connects emotionally with your audience.',
//             details: [
//                 'Logo design and concept creation',
//                 'Brand identity & visual system — colors, typography, and iconography',
//                 'Packaging & product graphics design',
//                 'Print design — business cards, flyers, brochures, and stationery',
//                 'Brand guidelines — tone, voice, and usage documentation',
//                 'UI/UX design for web and mobile applications'
//             ]
//         },
//         {
//             id: 3,
//             title: 'Digital Marketing',
//             link: '/services/digital-marketing',
//             image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/marketing_service_logo_abelyq.png',
//             description:
//                 'We grow your brand online through data-driven digital marketing campaigns and consistent creative execution.',
//             details: [
//                 'SEO (Search Engine Optimization) — on-page, off-page, and technical SEO',
//                 'Social media management — strategy, creative design, and content posting',
//                 'Paid ads — Facebook, Instagram, Google, LinkedIn, YouTube, and more',
//                 'Influencer marketing & collaborations',
//                 'Video marketing — short videos, explainer videos, ad campaigns',
//                 'Online reputation management and digital PR'
//             ]
//         },
//         {
//             id: 4,
//             title: 'Graphics & Media Production',
//             link: '/services/media-production',
//             image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026416/media_service_logo_usuh0b.png',
//             description:
//                 'Our creative team delivers high-quality graphics, videos, and media assets that make your brand visually impactful.',
//             details: [
//                 'Graphic design — posters, infographics, and social media creatives',
//                 'Motion graphics & animations for ads and explainer videos',
//                 'Video editing and production for corporate, brand, or promotional use',
//                 'Product, event, and corporate photography',
//                 'Creative direction and content planning for marketing campaigns'
//             ]
//         },
        
//     ];


//     const toggleService = (index: number) => {
//         setExpandedService(expandedService === index ? null : index);
//     };

//     return (
//         <div ref={ref} className="relative z-60 bg-gradient-to-br from-black via-gray-950 to-black mt-0 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
//             {/* Enhanced Background Elements */}
//             <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full animate-pulse"
//                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
//             <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-500/15 to-yellow-400/15 blur-3xl rounded-full animate-pulse" />

//             <div className="max-w-7xl mx-auto relative z-10">
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//                     {/* Left Side - Content */}
//                     <div>
//                         {/* Header */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6 }}
//                             className="mb-12"
//                         >
//                             <motion.div
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5 }}
//                                 className="flex items-center gap-2 mb-4"
//                             >
                                
//                                 <p className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
//                                     Our Services
//                                 </p>
//                             </motion.div>
//                             <motion.h2
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6, delay: 0.2 }}
//                                 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
//                             >
//                                 Expertise Solutions
//                             </motion.h2>
//                             <motion.p
//                                 initial={{ opacity: 0 }}
//                                 whileInView={{ opacity: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6, delay: 0.4 }}
//                                 className=" mt-4 text-base sm:text-lg lg:text-xl text-gray-400 font-pilogue font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
//                             >
//                                 Beeztech provide end-to-end digital solutions to  businesses across India and overseas build strong brands and scalable digital experiences.
//                             </motion.p>
//                         </motion.div>

//                         {/* Services List */}
//                         <div className="space-y-4">
//                             {services.map((service, index) => (
//                                 <motion.div
//                                     key={service.id}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     className="border-b border-gray-800"
//                                 >
//                                     {/* Desktop View - Accordion */}
//                                     <div className="hidden lg:block">
//                                         <motion.button
//                                             onClick={() => toggleService(index)}
//                                             onMouseEnter={() => setHoveredService(index)}
//                                             whileHover={{ x: 8 }}
//                                             className="w-full py-6 flex items-center justify-between group hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-orange-500/10 transition-all duration-300 px-4 rounded-xl border border-transparent hover:border-orange-500/20"
//                                         >
//                                             <div className="flex items-center gap-4">
//                                                 <motion.span
//                                                     whileHover={{ scale: 1.2, rotate: 5 }}
//                                                     className="text-yellow-400 text-2xl font-bold"
//                                                 >
//                                                     {service.id}.
//                                                 </motion.span>
//                                                 <span className="text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
//                                                     {service.title}
//                                                 </span>
//                                             </div>
//                                             <motion.div
//                                                 animate={{ rotate: expandedService === index ? 180 : 0 }}
//                                                 transition={{ duration: 0.3, type: "spring" }}
//                                             >
//                                                 <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors" />
//                                             </motion.div>
//                                         </motion.button>

//                                         <AnimatePresence>
//                                             {expandedService === index && (
//                                                 <motion.div
//                                                     initial={{ height: 0, opacity: 0 }}
//                                                     animate={{ height: 'auto', opacity: 1 }}
//                                                     exit={{ height: 0, opacity: 0 }}
//                                                     transition={{ duration: 0.3 }}
//                                                     className="overflow-hidden"
//                                                 >
//                                                     <div className="px-4 pb-6 pl-16 space-y-3">
//                                                         {service.details.map((detail, idx) => (
//                                                             <motion.div
//                                                                 key={idx}
//                                                                 initial={{ opacity: 0, x: -10 }}
//                                                                 animate={{ opacity: 1, x: 0 }}
//                                                                 transition={{ delay: idx * 0.1 }}
//                                                                 className="flex items-start gap-3"
//                                                             >
//                                                                 <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
//                                                                 <span className="text-gray-300">{detail}</span>
//                                                             </motion.div>
//                                                         ))}
//                                                     </div>
//                                                 </motion.div>
//                                             )}
//                                         </AnimatePresence>
//                                     </div>

//                                     {/* Mobile View - Navigate to Service Page */}
//                                     {/* 💡 Use Next.js Link and include <a> tag */}
//                                     <Link
//                                         href={service.link}
//                                         className="lg:hidden w-full py-5 flex items-center justify-between group active:bg-gradient-to-r active:from-yellow-500/10 active:to-orange-500/10 transition-all duration-200 px-2"
//                                     >
//                                         <div className="flex items-center gap-3">
//                                             <span className="text-orange-500 text-xl font-bold">
//                                                 {service.id}.
//                                             </span>
//                                             <span className="text-lg font-bold tracking-wider text-white">
//                                                 {service.title}
//                                             </span>
//                                         </div>
//                                         <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right Side - Image (Desktop only) */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                         className="hidden lg:flex items-center justify-center sticky top-24"
//                     >
//                         <div className="relative w-full max-w-sm">
//                             {/* Enhanced Glow effect behind image */}
//                             <motion.div
//                                 animate={{
//                                     scale: [1, 1.1, 1],
//                                     opacity: [0.3, 0.5, 0.3],
//                                 }}
//                                 transition={{
//                                     duration: 4,
//                                     repeat: Infinity,
//                                     ease: "easeInOut"
//                                 }}
//                                 className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 blur-3xl rounded-3xl"
//                             />

//                             {/* Image Container with enhanced 3D tilt effect */}
//                             <motion.div
//                                 key={hoveredService}
//                                 initial={{ opacity: 0, rotateY: -15, rotateX: 10, scale: 0.9 }}
//                                 animate={{
//                                     opacity: 1,
//                                     rotateY: 5,
//                                     rotateX: 5,
//                                     scale: 1,
//                                 }}
//                                 transition={{ duration: 0.6, ease: "easeOut", type: "spring" }}
//                                 whileHover={{
//                                     rotateY: 0,
//                                     rotateX: 0,
//                                     scale: 1.05,
//                                     transition: { duration: 0.3 }
//                                 }}
//                                 className="relative rounded-3xl overflow-hidden shadow-2xl"
//                                 style={{
//                                     transformStyle: 'preserve-3d',
//                                     perspective: '1000px'
//                                 }}
//                             >
//                                 <Image
//                                     src={services[hoveredService].image}
//                                     alt={`${services[hoveredService].title} - Beeztech   Service`}
//                                     width={500}
//                                     height={500}
//                                     className="w-full h-auto rounded-3xl"
//                                     priority
//                                 />
//                                 {/* Enhanced Overlay gradient */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                               
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// });

// export default ServicesSection;
'use client';
import React, { useState, forwardRef, Ref } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// -------------------- TYPES --------------------
interface Service {
  id: number;
  title: string;
  link: string;
  image: string;
  description: string;
  details: string[];
}

// -------------------- COMPONENT --------------------
const ServicesSection = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number>(0);

  const services: Service[] = [
    {
      id: 1,
      title: 'Web & App Development',
      link: '/services/web-app-development',
      image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/web_service_logo_rl7um1.png',
      description:
        'We design and develop modern, scalable, high-performing web and mobile applications.',
      details: [
        'Website design & development — static, dynamic, CMS-based',
        'E-Commerce development — stores, marketplaces, payments',
        'Custom web apps — dashboards, CRMs, booking systems',
        'Mobile apps — iOS, Android, React Native, Flutter',
        'API development — REST, GraphQL',
        'Website maintenance & optimization'
      ]
    },
    {
      id: 2,
      title: 'Branding & Identity',
      link: '/services/branding',
      image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026415/branding_service_logo_fa5bam.png',
      description: 'We help you create a strong and memorable brand identity.',
      details: [
        'Logo design & concept creation',
        'Brand identity system — colors, typography, icons',
        'Packaging & product graphics',
        'Print design — cards, flyers, brochures, stationery',
        'Brand guidelines — tone, voice, usage',
        'UI/UX design for apps'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing',
      link: '/services/digital-marketing',
      image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/marketing_service_logo_abelyq.png',
      description: 'We grow your brand online through performance marketing.',
      details: [
        'SEO — on-page, off-page, technical',
        'Social media management',
        'Paid ads — Meta, Google, LinkedIn, YouTube',
        'Influencer collaborations',
        'Video marketing & campaigns',
        'Online reputation management'
      ]
    },
    {
      id: 4,
      title: 'Graphics & Media Production',
      link: '/services/media-production',
      image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026416/media_service_logo_usuh0b.png',
      description:
        'We deliver high-quality graphics and media assets that make your brand stand out.',
      details: [
        'Graphic design — posts, infographics, creatives',
        'Motion graphics & animations',
        'Video editing & brand production',
        'Product, event & corporate photography',
        'Creative direction & campaign planning'
      ]
    }
  ];

  const toggleService = (index: number) =>
    setExpandedService(expandedService === index ? null : index);

  return (
    <section
      ref={ref}
      aria-labelledby="services-heading"
      className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden"
    >
      {/* 🔥 Background optimized (no layout shifts) */}
      <div aria-hidden="true" className="absolute top-20 left-10 w-40 h-40 sm:w-56 sm:h-56 bg-yellow-400/10 blur-3xl rounded-full" />
      <div aria-hidden="true" className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-orange-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ---------- SECTION HEADINGS ---------- */}
        <div className="mb-12 text-left">
          <p className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
            Our Services
          </p>

          {/* ⭐ H2 for SEO */}
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight"
          >
            Expertise Solutions
          </h2>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-400 max-w-xl">
            Beeztech provides end-to-end digital solutions to help businesses build strong brands and
            scalable digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE – SERVICE ACCORDION */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={service.id} className="border-b border-gray-800">

                {/* Desktop Accordion */}
                <div className="hidden lg:block">
                  <button
                    onClick={() => toggleService(index)}
                    onMouseEnter={() => setHoveredService(index)}
                    className="w-full py-6 flex items-center justify-between group transition-all px-4 rounded-xl hover:bg-white/5"
                    aria-expanded={expandedService === index}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-yellow-400 text-2xl font-bold">{service.id}.</span>
                      
                      {/* ⭐ H3 (correct hierarchy) */}
                      <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-orange-400">
                        {service.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 transition-transform ${
                        expandedService === index ? 'rotate-180 text-yellow-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-16 pr-4 pb-6"
                      >
                        {service.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 mt-2">
                            <Check className="w-5 h-5 text-green-400 mt-1" />
                            <p className="text-gray-300 text-sm sm:text-base">{detail}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile – direct navigation */}
                <Link
                  href={service.link}
                  className="lg:hidden w-full py-5 flex items-center justify-between px-2 active:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-xl font-bold">{service.id}.</span>
                    <span className="text-lg font-bold">{service.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – IMAGE PREVIEW */}
          <div className="hidden lg:flex items-center justify-center sticky top-24">
            <div className="relative w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 blur-3xl rounded-3xl"
              />

              <motion.div
                key={hoveredService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={services[hoveredService].image}
                  alt={`${services[hoveredService].title} service preview`}
                  width={600}
                  height={600}
                  loading="lazy" // ⭐ No priority – fixes LCP issues
                  className="w-full h-auto rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default ServicesSection;
