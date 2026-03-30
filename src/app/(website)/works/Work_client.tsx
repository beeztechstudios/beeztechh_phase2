// "use client";

// import React, { useState, useRef } from "react";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { ExternalLink, X } from "lucide-react";
// import TestimonialsSection from "../../components/Testimonials";
// import ContactSection from "../../components/ContactSection";

// const HeroSection = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       className="max-w-7xl mx-auto pt-16 md:pt-32 lg:pt-20 mb-12 relative overflow-hidden"
//     >
//       {/* Rotating Logo Circle */}
//       <div className="absolute top-64 md:top-52 right-12 w-0 h-0 sm:w-48 sm:h-48 z-10">
//         <div className="relative w-full h-full">
//           <div className="absolute inset-0 animate-spin-slow">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <path
//                 id="circlePath"
//                 fill="none"
//                 stroke="none"
//                 d="
//                   M 50, 50
//                   m -45, 0
//                   a 45,45 0 1,1 90,0
//                   a 45,45 0 1,1 -90,0
//                 "
//               />
//               <text fill="#ffffff">
//                 <textPath
//                   href="#circlePath"
//                   startOffset="0%"
//                   className="uppercase text-[6px] tracking-[.3em] font-medium"
//                 >
//                   DIGITAL · CREATIVE · AGENCY ·
//                 </textPath>
//               </text>
//             </svg>
//           </div>
//           <img src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg" alt="icon image " className="p-5" />
//         </div>
//       </div>

//       <motion.p
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-orange-500 font-medium text-sm md:text-lg uppercase tracking-wider mb-2 inline-block pb-1"
//       >
//         Case Studies
//       </motion.p>

//       <h1 className="text-5xl sm:text-5xl lg:text-[120px] font-bold text-white leading-none mt-4 uppercase">
//         <motion.span
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           Amazing
//         </motion.span>

//         <div className="flex items-center space-x-4 py-6">
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "4rem" }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="h-px bg-white/50 hidden sm:block"
//           />
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex space-x-[-15px] opacity-70"
//           >
//             <div className="w-8 h-8 rounded-full border border-orange-500/90" />
//             <div className="w-8 h-8 rounded-full border border-orange-500/90" />
//             <div className="w-8 h-8 rounded-full border border-orange-500/90" />
//           </motion.div>
//           <motion.span
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             Work
//           </motion.span>
//         </div>
//       </h1>
//     </motion.div>
//   );
// };

// const PortfolioPage = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -70]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, 70]);

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "TARAKSH",
//       category: "Brand Identity",
//       image: "https://res.cloudinary.com/dwz07ormq/image/upload/v1761583136/taraksh_yoxxzb.jpg",
//       challenge:
//         "TARAKSH, an international law firm operating in Dubai and India, wanted to establish a timeless brand identity that reflected both their professional excellence and deep-rooted spiritual values. They needed a cohesive system that could translate their ethos into every brand touchpoint—from logo to stationery and digital presence.",
//       solution:
//         "We crafted a powerful and balanced brand identity inspired by the client’s devotion to ‘Tara Mata Devi’. The logo embodies divine guidance and fairness, integrating the star symbol for purity, the letter ‘T’ for TARAKSH, the letter ‘A’ for Aksh and Lord Shiva (balance and wisdom), and the scales of justice for equality. The visual system extended to elegant business cards, letterheads, and a modern website design—combining sophistication with spirituality.",
//       results: [
//         "A distinct and meaningful brand identity aligned with the firm’s values",
//         "Consistent visual presence across print and digital platforms",
//         "Positive feedback from clients and partners on the new professional image"
//       ],
//       techStack: ["Adobe Illustrator", "Photoshop", "Figma"],
//     },

//     {
//       id: 2,
//       title: "HiLe",
//       category: "Brand Identity & Development",
//       image: "https://res.cloudinary.com/dwz07ormq/image/upload/v1761583165/hile_ry2wdg.png",
//       challenge:
//         "HiLe, a tech-driven HR platform for the legal industry, needed a complete brand and digital presence to establish trust and communicate innovation. The goal was to create a distinct identity and seamless digital experience that would connect law firms with the right talent efficiently.",
//       solution:
//         "We partnered with HiLe to build their brand from the ground up starting with strategy, naming, and visual identity, followed by a modern website and product interface design. The brand identity centers on simplicity, clarity, and connection. The green dot in the logo represents growth and human focus, while the clean typography conveys professionalism. The website was designed and developed to deliver a smooth, intuitive user experience with strong performance and scalability.",
//       results: [
//         "A unified brand and digital ecosystem built from concept to launch",
//         "Increased credibility and engagement within the legal tech sector",
//         "Seamless user experience across desktop and mobile platforms"
//       ],
//       techStack: ["Adobe Illustrator", "Figma", "React", "Next.js", "Tailwind CSS"],
//     },
//     {
//       id: 3,
//       title: "Merchant Xporters",
//       category: "Brand Identity & Web Development",
//       image: "https://res.cloudinary.com/dwz07ormq/image/upload/v1761583148/mercentexporter_geekok.jpg",
//       challenge:
//         "Merchant Xporters, a global export company, needed a strong brand identity and an impactful digital presence to represent their international operations. The challenge was to create a visual language and website that communicates reliability, growth, and global connectivity.",
//       solution:
//         "We developed a complete brand identity system that conveys trust and movement through bold typography, a dynamic logo, and a clean blue color palette. The symbol reflects global connections and forward momentum, aligning with the brand’s tagline ‘Beyond Exporting’. Alongside the visual identity, we designed and developed a responsive website that highlights the company’s services and global reach with a professional, modern interface.",
//       results: [
//         "A cohesive brand identity aligned with the company’s global vision",
//         "A modern and responsive website enhancing digital credibility",
//         "Improved client engagement and stronger online presence"
//       ],
//       techStack: ["Adobe Illustrator", "Figma", "React", "Next.js", "Tailwind CSS"],
//     },
//     {
//       id: 4,
//       title: "Alliedge Healthcare",
//       category: "Brand Identity & Web Design",
//       image: "https://res.cloudinary.com/dwz07ormq/image/upload/v1761583130/alliedge_k4s1mq.png",
//       challenge:
//         "Alliedge Healthcare, India’s leading SaaS-based medical software provider, needed a modern and trustworthy brand identity that would reflect innovation, care, and reliability in the healthcare technology space. The challenge was to balance a professional tech-driven aesthetic with a human, approachable feel.",
//       solution:
//         "We crafted a clean and impactful brand identity that visually communicates growth, connection, and precision in healthcare technology. The logo design combines a medical cross with forward-moving elements, symbolizing progress and digital transformation. Alongside the branding, we designed a user-focused website showcasing their SaaS solutions with clarity and credibility, ensuring an engaging and seamless user experience.",
//       results: [
//         "A strong, modern brand identity that conveys trust and innovation",
//         "Enhanced digital presence through a user-centric website",
//         "Strengthened brand positioning as India’s #1 SaaS-based medical software company"
//       ],
//       techStack: ["Adobe Illustrator", "Figma", "React", "Next.js", "Tailwind CSS"],
//     },
//   ];

//   const PortfolioCard = ({ item, index, style }) => (
//     <motion.div
//       onClick={() => setSelectedProject(item)}
//       key={item.id}
//       style={style}
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px 0px" }}
//       transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
//       className="group bg-white/5 backdrop-blur-2xl  rounded-2xl hover:scale-105 transition-transform duration-700 ease-out cursor-pointer overflow-hidden"
//     >
//       <div className="relative aspect-[5/4] overflow-hidden">
//         <motion.img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.8 }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//         <motion.div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
//           <ExternalLink className="w-6 h-6 text-gray-900" />
//         </motion.div>
//       </div>

//       <div className="p-6">
//         <p className="text-sm text-orange-500 uppercase tracking-wider mb-2">
//           {item.category}
//         </p>
//         <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="bg-black text-white overflow-hidden">
//       <div ref={containerRef} className="relative px-6 sm:px-8 lg:px-16">
//         <HeroSection />

//         {/* ✅ Fixed grid: now properly two-column on large screens */}
//         <div className="grid grid-cols-1 md:p-24 lg:grid-cols-2 gap-24 mt-16 pb-32">
//           <div className="space-y-12">
//             {portfolioItems.slice(0, 2).map((item, i) => (
//               <PortfolioCard key={item.id} item={item} index={i} style={{ y: y1 }} />
//             ))}
//           </div>
//           <div className="space-y-12 mt-0 lg:mt-20">
//             {portfolioItems.slice(2).map((item, i) => (
//               <PortfolioCard key={item.id} item={item} index={i} style={{ y: y2 }} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <TestimonialsSection />
//       <ContactSection />

//       {/* Modal */}
//       (
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-90 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
//             onClick={() => setSelectedProject(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="sticky top-0 flex items-center justify-between bg-white/90 backdrop-blur-sm border-b border-gray-200 px-5 sm:px-8 py-4 sm:py-5 z-10">
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//                   {selectedProject.title}
//                 </h3>
//                 <button
//                   onClick={() => setSelectedProject(null)}
//                   className="w-10 h-10 bg-gray-100 hover:bg-gray-200 transition rounded-full flex items-center justify-center"
//                 >
//                   <X className="w-6 h-6 text-gray-700" />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="p-5 sm:p-8 space-y-8 overflow-y-auto max-h-[85vh]">
//                 {/* Image */}
//                 {selectedProject.image && (
//                   <img
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     className="w-full sm:w-1/2 mx-auto rounded-2xl shadow-md object-cover"
//                   />
//                 )}

//                 {/* Challenge */}
//                 <section>
//                   <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
//                     Challenge
//                   </h4>
//                   <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//                     {selectedProject.challenge}
//                   </p>
//                 </section>

//                 {/* Solution */}
//                 <section>
//                   <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
//                     Solution
//                   </h4>
//                   <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//                     {selectedProject.solution}
//                   </p>
//                 </section>

//                 {/* Results */}
//                 {selectedProject.results?.length > 0 && (
//                   <section>
//                     <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
//                       Results
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
//                       {selectedProject.results.map((r, i) => (
//                         <li key={i}>{r}</li>
//                       ))}
//                     </ul>
//                   </section>
//                 )}

//                 {/* Tech Stack */}
//                 {selectedProject.techStack?.length > 0 && (
//                   <section>
//                     <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
//                       Tech Stack
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {selectedProject.techStack.map((tech, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-xs sm:text-sm font-medium border border-gray-200"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </section>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default PortfolioPage;
"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import TestimonialsSection from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

// ---------------------------------------------------
// ⭐ HERO SECTION (Optimized for SEO + Accessibility)
// ---------------------------------------------------
const HeroSection = () => {
  return (
    <section
      aria-labelledby="portfolio-title"
      className="max-w-7xl mx-auto pt-20 md:pt-32 lg:pt-24 mb-12 relative overflow-hidden"
    >
      {/* Decorative rotating circle */}
      <div
        aria-hidden="true"
        className="absolute top-64 md:top-52 right-12 w-40 h-40 sm:w-48 sm:h-48"
      >
        <div className="relative w-full h-full animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
            <path
              id="circleText"
              fill="none"
              stroke="none"
              d="
                M 50 50
                m -45 0
                a 45 45 0 1 1 90 0
                a 45 45 0 1 1 -90 0
              "
            />
            <text fill="#fff">
              <textPath
                href="#circleText"
                className="uppercase text-[6px] tracking-[.3em]"
              >
                DIGITAL · CREATIVE · AGENCY ·
              </textPath>
            </text>
          </svg>
        </div>

        <Image
          src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg"
          alt="Beeztech spinning icon"
          width={80}
          height={80}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-orange-500 text-sm md:text-lg uppercase tracking-wider"
      >
        Case Studies
      </motion.p>

      {/* ⭐ H1 for SEO */}
      <h1
        id="portfolio-title"
        className="text-5xl sm:text-5xl lg:text-[120px] font-bold text-white uppercase leading-none mt-4"
      >
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Amazing
        </motion.span>

        <div className="flex items-center space-x-4 py-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            className="h-px bg-white/50 hidden sm:block"
          />

          <div className="flex opacity-70 space-x-[-15px]">
            <div className="w-8 h-8 rounded-full border border-orange-500" />
            <div className="w-8 h-8 rounded-full border border-orange-500" />
            <div className="w-8 h-8 rounded-full border border-orange-500" />
          </div>

          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Work
          </motion.span>
        </div>
      </h1>
    </section>
  );
};

// ---------------------------------------------------
// Portfolio Items Type
// ---------------------------------------------------
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

// ---------------------------------------------------
// Portfolio Page
// ---------------------------------------------------
const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // ---------------------------------------------------
  // Portfolio Data
  // ---------------------------------------------------
  const portfolioItems: PortfolioItem[] = [
    // {
    //   id: 1,
    //   title: "TARAKSH",
    //   category: "Brand Identity",
    //   image:
    //     "https://res.cloudinary.com/dwz07ormq/image/upload/v1761583136/taraksh_yoxxzb.jpg",
    //   challenge:
    //     "TARAKSH needed a timeless identity reflecting professionalism + spiritual values across digital touchpoints.",
    //   solution:
    //     "Designed a symbol combining purity, balance, justice & devotion. Extended identity to stationery and website.",
    //   results: ["Meaningful identity", "Consistent system", "High client praise"],
    //   techStack: ["Illustrator", "Photoshop", "Figma"],
    // },

    {
      id: 2,
      title: "HiLe",
      category: "Brand Identity & Development",
      image:
        "https://res.cloudinary.com/dwz07ormq/image/upload/v1761583165/hile_ry2wdg.png",
      challenge:
        "HiLe needed a complete digital ecosystem with a strong, trustworthy brand.",
      solution:
        "Built brand, website, and product UI with focus on clarity, professionalism, and growth.",
      results: [
        "Full digital ecosystem",
        "Higher credibility",
        "Smooth UX across all devices",
      ],
      techStack: ["Figma", "Next.js", "Tailwind"],
    },

    // {
    //   id: 3,
    //   title: "Merchant Xporters",
    //   category: "Brand Identity & Web Development",
    //   image:
    //     "https://res.cloudinary.com/dwz07ormq/image/upload/v1761583148/mercentexporter_geekok.jpg",
    //   challenge: "Needed global appeal + strong digital presence.",
    //   solution:
    //     "Created dynamic identity and responsive website representing forward movement & global connectivity.",
    //   results: ["Modern identity", "Client engagement up", "Global-ready brand"],
    //   techStack: ["Figma", "Next.js", "Tailwind"],
    // },

    {
      id: 4,
      title: "Alliedge Healthcare",
      category: "Brand Identity & Web Design",
      image:
        "https://res.cloudinary.com/dwz07ormq/image/upload/v1761583130/alliedge_k4s1mq.png",
      challenge:
        "Needed a modern brand combining innovation with trust for India’s top healthcare SaaS.",
      solution:
        "Designed identity representing precision & care. Created user-focused SaaS website.",
      results: ["Improved positioning", "Better UX", "Stronger trust"],
      techStack: ["Figma", "Next.js", "Tailwind"],
    },
  ];

  // ---------------------------------------------------
  // Portfolio Card Component
  // ---------------------------------------------------
  const PortfolioCard = ({
    item,
    index,
    style,
  }: {
    item: PortfolioItem;
    index: number;
    style: any;
  }) => (
    <motion.div
      key={item.id}
      style={style}
      onClick={() => setSelectedProject(item)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-2xl rounded-2xl cursor-pointer overflow-hidden hover:scale-[1.03] transition-transform"
    >
      <div className="relative aspect-[5/4]">
        <Image
          src={item.image}
          alt={`${item.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
          <ExternalLink className="w-6 h-6 text-gray-900" />
        </div>
      </div>

      <div className="p-6">
        <p className="text-orange-500 text-sm tracking-wider uppercase">
          {item.category}
        </p>
        <h3 className="text-2xl text-white font-semibold">{item.title}</h3>
      </div>
    </motion.div>
  );

  // ---------------------------------------------------
  // FINAL RETURN (Page Layout)
  // ---------------------------------------------------
  return (
    <main className="bg-black text-white overflow-hidden">
      <div ref={containerRef} className="relative px-6 sm:px-8 lg:px-16">
        <HeroSection />

        {/* GRID */}
        <section className="grid grid-cols-1 md:p-20 lg:grid-cols-2 gap-20 mt-16 pb-28">
          <div className="space-y-12">
            {portfolioItems.slice(0, 2).map((item, i) => (
              <PortfolioCard
                key={`left-${item.id}`}
                item={item}
                index={i}
                style={{ y: y1 }}
              />
            ))}
          </div>

          <div className="space-y-12 lg:mt-20">
            {portfolioItems.slice(2).map((item, i) => (
              <PortfolioCard
                key={`right-${item.id}`}
                item={item}
                index={i + 2}
                style={{ y: y2 }}
              />
            ))}
          </div>
        </section>
      </div>

      <TestimonialsSection />
      <ContactSection />

      {/* ---------------------------------------------------
         MODAL (Smooth Animated + Scroll-Locked)
      --------------------------------------------------- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white w-full max-w-5xl rounded-3xl shadow-xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center px-6 py-4 border-b bg-white/90 backdrop-blur">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* BODY */}
              <div className="p-6 space-y-8 max-h-[80vh] overflow-y-auto">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={900}
                  height={600}
                  className="rounded-xl object-cover w-full"
                />

                <section>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Challenge
                  </h4>
                  <p className="text-gray-700">{selectedProject.challenge}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-700">{selectedProject.solution}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Results
                  </h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedProject.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default PortfolioPage;
