// 'use client'; // Required because of framer-motion (a library that uses browser APIs)

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link'; // 1. Import next/link
// import Image from 'next/image'; // 2. Import next/image

// const AboutUsSection = () => {
//   return (
//     <div className="relative z-70  py-8 sm:py-12  bg-gradient-to-b from-white via-orange-50/30 to-white  mb-1 md:mb-0 lg:py-20 overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-10 right-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto  ">
//         <div className="grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:gap-16 items-center">
          
//           {/* Left Side - Visual Elements */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative order-2 lg:order-1 "
//           >
//             {/* Enhanced Decorative Background Elements */}
//             <motion.div
//               animate={{
//                 rotate: [0, 10, 0],
//                 scale: [1, 1.05, 1],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="absolute top-0 left-0 w-32 h-32 border-2 border-orange-300 rounded-3xl "
//             />
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full "
//             />
            
//             {/* Main Workspace Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               whileHover={{ scale: 1.02 }}
//               className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-100/50"
//             >
//               <Image
//                 src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026418/workspace_fzoeje.jpg"
//                 alt="Beeztech   Studio Modern Creative Workspace"
//                 width={700}
//                 height={500}
//                 className="w-full h-auto object-cover"
//                 priority={true}
//               />

//               {/* Enhanced Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent pointer-events-none" />

//               {/* Enhanced Floating Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 whileHover={{ y: -5, scale: 1.05 }}
//                 className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 border border-orange-100"
//               >
//                 <div className="flex -space-x-2">
//                   <motion.div
//                     animate={{ scale: [1, 1.1, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 0 }}
//                     className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 ring-2 ring-white"
//                   />
//                   <motion.div
//                     animate={{ scale: [1, 1.1, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
//                     className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 ring-2 ring-white"
//                   />
//                   <motion.div
//                     animate={{ scale: [1, 1.1, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
//                     className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 ring-2 ring-white"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <motion.div
//                     animate={{ width: ["48px", "64px", "48px"] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                     className="h-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full"
//                   />
//                   <motion.div
//                     animate={{ width: ["64px", "80px", "64px"] }}
//                     transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
//                     className="h-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full"
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Team Member Circle - Bottom Left */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               className="absolute -bottom-8 -left-8 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-orange-400 to-orange-500 ring-4 ring-orange-200/50"
//             >
//               <Image
//                 src="https://framerusercontent.com/images/EtyhVt5k6VdQGzImZKutvGH8I.png"
//                 alt="Beeztech   Studio Team Member"
//                 width={192}
//                 height={192}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             {/* Decorative Element - Bottom Right */}
//             <motion.div
//               initial={{ opacity: 0, rotate: -45 }}
//               whileInView={{ opacity: 1, rotate: 0 }}
//               viewport={{ once: true }}
//               animate={{
//                 rotate: [0, 360],
//               }}
//               transition={{
//                 opacity: { duration: 0.8, delay: 0.6 },
//                 rotate: {
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }
//               }}
//               className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-orange-300 rounded-full "
//             />
//           </motion.div>

//           {/* Right Side - Content (Content unchanged) */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="space-y-6 order-1 lg:order-2 "
//           >
//             {/* Label */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
//                 ABOUT
//               </span>
//             </motion.div>

//             {/* Main Heading (Keyword Integration Reminder: This is the perfect place for relevant SEO keywords.) */}
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
//             >
//               Buzzing Ideas into Digital Reality 
//             </motion.h2>

//             {/* Subheading */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-lg sm:text-xl text-gray-600 leading-relaxed"
//             >
//               We’re a creative tech agency turning bold ideas into powerful digital experiences that inspire, engage, and grow brands
//             </motion.p>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="text-base text-gray-500 leading-relaxed"
//             >
              
//               At Beeztech  , we blend creativity, technology, and strategy to craft digital solutions that stand out. From startups to enterprises, our team helps transform concepts into impactful brands — through design, development, and digital innovation.
//             </motion.p>

//             {/* Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="pt-4"
//             >
//               <Link href="/about">
//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group shadow-lg"
//                 >
//                   <span>Know More</span>
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </motion.div>
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsSection;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden"
    >
      {/* Softened Background Glows (lighter for GPU render) */}
      <div aria-hidden="true"
        className="absolute top-10 right-10 w-56 h-56 bg-orange-200/10 rounded-full blur-3xl" />
      <div aria-hidden="true"
        className="absolute bottom-16 left-10 w-64 h-64 bg-yellow-200/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:gap-16 items-center">

          {/* LEFT SIDE — WORKSPACE VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Gentle animated border element (lighter animation) */}
            <motion.div
              aria-hidden="true"
              animate={{ rotate: [0, 6, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-28 h-28 border-2 border-orange-300/40 rounded-3xl"
            />

            {/* Background Glow Circle */}
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full"
            />

            {/* Main About Workspace Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-100/50"
            >
              <Image
                src="https://res.cloudinary.com/dwz07ormq/image/upload/f_auto,q_auto,w_450/v1760026418/workspace_fzoeje.jpg"
                alt="Beeztech Studio creative workspace area"
                width={700}
                height={500}
                loading="lazy"       // ⭐ FIX — priority removed (not LCP)
                className="w-full h-auto object-cover"
              />

              {/* Overlay gradient (lighter impact) */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent pointer-events-none" />

              {/* Floating Card — simplified animation for mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 border border-orange-100"
              >
                {/* Pulsing dots */}
                <div className="flex -space-x-2">
                  {[0, 0.3, 0.6].map((delay, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 ring-2 ring-white"
                    />
                  ))}
                </div>

                {/* Animated lines (lighter) */}
                <div className="space-y-1">
                  <motion.div
                    animate={{ width: ["48px", "64px", "48px"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full"
                  />
                  <motion.div
                    animate={{ width: ["64px", "80px", "64px"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="h-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Team Circular Image — CLS FIXED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl"
            >
              <Image
                src="https://framerusercontent.com/images/EtyhVt5k6VdQGzImZKutvGH8I.png"
                alt="Beeztech creative team member photo"
                width={192}
                height={192}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Rotating element (lighter + smooth) */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ rotate: 360 }}
              transition={{
                rotate: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: { duration: 0.6, delay: 0.6 },
              }}
              className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-orange-300 rounded-full"
            />
          </motion.div>

          {/* RIGHT SIDE — TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-1 lg:order-2"
          >
            
            {/* Section Label */}
            <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
              ABOUT
            </span>

            {/* ⭐ Heading (H2 — correct semantic level) */}
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Buzzing Ideas into Digital Reality
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We’re a creative tech agency turning bold ideas into powerful digital experiences.
            </p>

            <p className="text-base text-gray-500 leading-relaxed max-w-lg">
              At Beeztech, we blend creativity, technology, and strategy to build brands,
              websites, digital products, and experiences that stand out and drive growth.
            </p>

            {/* CTA */}
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 shadow-lg transition-all"
              >
                Know More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
