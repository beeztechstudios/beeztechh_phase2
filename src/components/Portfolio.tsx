// // components/sections/PortfolioGallery.tsx
// 'use client';
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, MotionValue, MotionStyle } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';

// // --- TypeScript Interface Definitions ---

// // 1. Interface for a single item in the portfolioItems array
// interface PortfolioItem {
//     id: number;
//     title: string;
//     category: string;
//     link: string;
//     image: string;
// }

// // 2. Interface for the PortfolioCard component props
// interface PortfolioCardProps {
//     item: PortfolioItem;
//     index: number;
//     // 💡 Use MotionStyle to correctly type the style object, which includes MotionValue types
//     style: MotionStyle; 
// }

// // --- Data ---
// // 💡 Apply the PortfolioItem interface
// const portfolioItems: PortfolioItem[] = [
//     {
//         id: 1,
//         title: 'Clay AI SaaS Website',
//         category: 'Web Design',
//         link: "/link1",
//         image: 'https://cdn.dribbble.com/userupload/8831050/file/still-feb2b5c172267b74e51f323675645788.png?format=webp&resize=400x300&vertical=center',
//     },
//     {
//         id: 2,
//         title: 'Path to Energy',
//         category: 'Brand Identity',
//         link: "/link2",
//         image: 'https://cdn.dribbble.com/userupload/8831050/file/still-feb2b5c172267b74e51f323675645788.png?format=webp&resize=400x300&vertical=center',
//     },
//     {
//         id: 3,
//         title: 'Builder Platform',
//         category: 'UI/UX Design',
//         link: "/link3",
//         image: 'https://cdn.dribbble.com/userupload/43608346/file/still-1e21036fab512499677fb28b8439f2534.png?format=webp&resize=400x300&vertical=center',
//     },
//     {
//         id: 4,
//         title: 'Design Agency',
//         category: 'Web Development',
//         link: "/link4",
//         image: 'https://cdn.dribbble.com/userupload/41264537/file/original-ab35ca1c02bfc624e8377a94316e7e35.png?format=webp&resize=400x300&vertical=center',
//     }
// ];

// // --- Component ---

// const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, index, style }) => (
//     // Assuming the link property is an internal path, wrap the card in a Next.js Link
//     // For simplicity here, we'll use a regular anchor tag linking to the item.link
//     // 💡 NOTE: In a real Next.js app, replace `a href` with `<Link href={item.link}><a>...</a></Link>`
//     <motion.a
//         href={item.link} 
//         key={item.id}
//         style={style} // Apply motion styles (like parallax) here
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px 0px" }}
//         transition={{ 
//             duration: 1, 
//             delay: index * 0.15,
//             ease: [0.22, 1, 0.36, 1]
//         }}
//         className="group block bg-white/5 backdrop-blur-2xl rounded-2xl transition-transform duration-500 hover:scale-[1.03] cursor-pointer relative"
//     >
//         {/* Image Container */}
//         <div className="relative aspect-[5/4] overflow-hidden bg-transparent mb-6 p-4 shadow-lg">
//             <motion.img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full rounded-2xl object-cover"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             />

//             {/* Minimal Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//             {/* Arrow Icon */}
//             <motion.div
//                 initial={{ opacity: 0, x: -10, y: 10 }}
//                 whileInView={{ opacity: 1, x: 0, y: 0 }} 
//                 whileHover={{ opacity: 1, x: 0, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
//             >
//                 <ArrowUpRight className="w-6 h-6 text-gray-900" />
//             </motion.div>
//         </div>

//         {/* Content */}
//         <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
//             className='p-4'
//         >
//             <div className="flex items-center justify-between mb-3">
//                 <span className="text-sm font-medium text-orange-500 uppercase tracking-wider">
//                     {item.category}
//                 </span>
//                 <div className="w-8 h-px bg-gray-300"></div>
//             </div>
//             <h3 className="text-2xl sm:text-3xl mb-4 font-semibold text-white tracking-tight transition-colors duration-300">
//                 {item.title}
//             </h3>
//         </motion.div>
//     </motion.a>
// );

// const PortfolioGallery: React.FC = () => {
//     // 💡 Explicitly type useRef for a div element
//     const containerRef = useRef<HTMLDivElement>(null); 
    
//     // scrollYProgress is a MotionValue<number>
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start end", "end start"]
//     });

//     // y1 and y2 are MotionValue<number>
//     const y1: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, -70]);
//     const y2: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 70]);

//     return (
//         <div ref={containerRef} className="relative bg-black py-24 sm:py-32 lg:py-18 px-4 sm:px-6 lg:px-16 overflow-hidden">
//             {/* Background Effects */}
//             <div className="absolute top-40 opacity-80 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full"
//                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
//             <div className="hidden md:absolute opacity-80 top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full"
//                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
//             <div className="absolute bottom-50 opacity-80 right-35 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-orange-400/20 to-yellow-500/20 blur-3xl rounded-full"
//                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
//             <div className="absolute bottom-75 opacity-80 left-40 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-orange-400/20 to-yellow-500/20 blur-3xl rounded-full"
//                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />

//             <div className="max-w-7xl mx-auto relative z-10">
//                 {/* Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//                     className="mb-20 sm:mb-24"
//                 >
//                     <div className="flex items-center justify-between mb-3">
//                         <motion.h2
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8, delay: 0.2 }}
//                             className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider"
//                         >
//                             PORTFOLIO
//                         </motion.h2>

//                     </div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                         className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
//                     >
//                         From Vision to Launch
//                     </motion.h2>
//                 </motion.div>

//                 {/* Gallery Grid */}
//                 <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
//                     {/* Left Column - Apply y1 for parallax */}
//                     <div className="space-y-8 lg:space-y-12">
//                         {portfolioItems.slice(0, 2).map((item, index) => (
//                             <PortfolioCard
//                                 key={item.id}
//                                 item={item}
//                                 index={index}
//                                 style={{ y: y1 }} // Apply parallax here
//                             />
//                         ))}
//                     </div>

//                     {/* Right Column - Apply y2 for parallax and a top margin for staggered effect */}
//                     <div className="space-y-8 lg:space-y-12 lg:mt-20">
//                         {portfolioItems.slice(2, 4).map((item, index) => (
//                             <PortfolioCard
//                                 key={item.id}
//                                 item={item}
//                                 index={index}
//                                 style={{ y: y2 }} // Apply parallax here
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* View All Link */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                     className="mt-20 sm:mt-24 text-center"
//                 >
//                     {/* You can add a Link component here if needed, e.g., to a full portfolio page */}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default PortfolioGallery;
'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  MotionValue,
  MotionStyle,
} from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import Image from 'next/image';

// -----------------------------------------
// TYPES
// -----------------------------------------
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

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  style: MotionStyle;
  onSelect: (item: PortfolioItem) => void;
}

// -----------------------------------------
// DATA
// -----------------------------------------
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'HiLe',
    category: 'Brand Identity & Development',
    image:
      'https://res.cloudinary.com/dwz07ormq/image/upload/f_auto,q_auto,w_450/v1761583165/hile_ry2wdg.png',
    challenge:
      'HiLe needed a complete brand and digital platform for their legal HR technology product.',
    solution:
      'We crafted strategy, naming, brand identity, UI/UX, and developed a scalable website with intuitive user flow.',
    results: [
      'Brand & platform built from scratch',
      'Improved credibility in legal tech space',
      'Enhanced digital performance & engagement',
    ],
    techStack: ['Illustrator', 'Figma', 'React', 'Next.js', 'Tailwind CSS'],
  },

  {
    id: 2,
    title: 'Merchant Xporters',
    category: 'Brand Identity & Web Development',
    image:
      'https://res.cloudinary.com/dwz07ormq/image/upload/f_auto,q_auto,w_450/v1761583148/mercentexporter_geekok.jpg',
    challenge:
      'Needed a strong identity & website to reflect global operations and trustworthiness.',
    solution:
      'A bold identity system with dynamic logo and blue-toned palette representing global connectivity. Developed a clean, effective website.',
    results: [
      'Modern global-ready identity',
      'High-converting responsive website',
      'Boosted online credibility',
    ],
    techStack: ['Illustrator', 'Figma', 'React', 'Next.js'],
  },

  {
    id: 3,
    title: 'Alliedge Healthcare',
    category: 'Brand Identity & Web Design',
    image:
      'https://res.cloudinary.com/dwz07ormq/image//upload/f_auto,q_auto,w_450/v1761583130/alliedge_k4s1mq.png',
    challenge:
      'Leading SaaS healthcare provider needed a modern brand identity balancing innovation & approachability.',
    solution:
      'Created a sleek identity + user-friendly website emphasizing clarity, precision, and trust.',
    results: [
      'Stronger SaaS brand positioning',
      'Improved digital experience',
      'Higher user engagement',
    ],
    techStack: ['Illustrator', 'Figma', 'Next.js', 'Tailwind CSS'],
  },
];

// -----------------------------------------
// PORTFOLIO CARD
// -----------------------------------------
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  item,
  index,
  style,
  onSelect,
}) => (
  <motion.div
    key={item.id}
    style={style}
    onClick={() => onSelect(item)}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="group bg-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-500"
  >
    <div className="relative aspect-[5/4]">
      <Image
        src={item.image}
        alt={`${item.title} Project Preview`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
        <ExternalLink className="w-6 h-6 text-gray-900" />
      </div>
    </div>

    <div className="p-6">
      <p className="text-orange-500 text-sm tracking-wider uppercase">
        {item.category}
      </p>
      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
    </div>
  </motion.div>
);

// -----------------------------------------
// MAIN COMPONENT
// -----------------------------------------
const PortfolioGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      ref={containerRef}
      className="relative bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-16 overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2
          id="portfolio-heading"
          className="text-orange-500 font-semibold uppercase tracking-wider"
        >
          Portfolio
        </h2>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4">
          From Vision to Launch
        </h3>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        <div className="space-y-12">
          {portfolioItems.slice(0, 2).map((item, i) => (
            <PortfolioCard
              key={`left-${item.id}`}
              item={item}
              index={i}
              style={{ y: y1 }}
              onSelect={setSelectedProject}
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
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
                <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-8 max-h-[80vh] overflow-y-auto">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1000}
                  height={600}
                  className="rounded-xl object-cover w-full"
                />

                <section>
                  <h4 className="text-xl font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-700">{selectedProject.challenge}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-2">Solution</h4>
                  <p className="text-gray-700">{selectedProject.solution}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-2">Results</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedProject.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 rounded text-xs font-medium"
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
    </section>
  );
};

export default PortfolioGallery;

