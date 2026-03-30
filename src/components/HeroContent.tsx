// // components/sections/HeroContent.tsx
// 'use client';
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Phone, Star, ArrowRight } from "lucide-react";

// const HeroContent = ({ scrollToServices }: { scrollToServices: () => void }) => {
//   return (
//     <div className="max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        
//         {/* Text Column */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-4 sm:space-y-5 w-full lg:w-1/2 text-left order-2 lg:order-1"
//         >
//           <div className="mt-2 lg:mt-10">
//             <h3 className="font-fira-sans font-medium text-lg sm:text-base tracking-widest uppercase">
//               BUZZING IDEAS INTO REALITY
//             </h3>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="space-y-2 sm:space-y-4"
//           >
//             <h1 className="text-4xl sm:text-6xl md:text-[65px] font-pilogue font-extrabold leading-tight">
//               <span className="block">We Design,</span>
//               <span className="block">Build And Grow</span>{" "}
//               <span className="block">Digital Presence.</span>
//             </h1>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-base sm:text-lg lg:text-xl text-gray-600 font-pilogue font-medium leading-relaxed max-w-lg mx-auto lg:mx-0"
//           >
//             From branding to media, marketing to development — we’re your
//             all-in-one creative hive.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="pt-4 flex justify-center lg:justify-start"
//           >
//             <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md">
//               <button
//                 onClick={scrollToServices}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
//               >
//                 Our Services
//                 <ArrowRight className="w-5 h-5" />
//               </button>

//               <Link
//                 href="/book-call"
//                 className="bg-black hover:bg-gray-800 text-white px-8 py-4 justify-center rounded-full font-semibold transition-all flex items-center gap-2"
//               >
//                 Book Free Call <Phone className="w-5 h-5" />
//               </Link>
//             </div>
//           </motion.div>

//           {/* Testimonials */}
//           <motion.div className="flex items-center gap-4 pt-4">
//             <div className="flex -space-x-3">
//               {[...Array(3)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 border-2 border-white"
//                 ></div>
//               ))}
//               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-xs sm:text-sm font-bold">
//                 50+
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <div className="flex text-orange-500">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
//                 ))}
//               </div>
//               <span className="text-gray-700 font-medium text-xs sm:text-sm">
//                 Trusted By 50+ Businesses
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right Image Column */}
//         <div className="w-full lg:w-1/2 flex justify-center items-center pt-8 lg:pt-0 order-1 lg:order-2">
//           <div className="relative w-full flex justify-center items-center aspect-square max-w-[280px] sm:max-w-lg mx-auto">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <div className="absolute top-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl" />
//               <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full blur-3xl" />
//               <motion.div
//                 className="z-10 w-full"
//                 animate={{ y: [-15, 15, -15], rotate: [-1, 1, -1] }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <img
//                   src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026415/hero_img_eeujut.png"
//                   alt="Abstract visual representation of digital growth and design"
//                   className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroContent;
'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Star, ArrowRight } from "lucide-react";

const HeroContent = ({ scrollToServices }: { scrollToServices: () => void }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-5 w-full lg:w-1/2 order-2 lg:order-1"
        >
          <div className="mt-2 lg:mt-10">
            <h3 className="font-fira-sans font-medium text-lg tracking-widest uppercase text-orange-600">
              BUZZING IDEAS INTO REALITY
            </h3>
          </div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2 sm:space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl md:text-[65px] font-pilogue font-extrabold leading-tight text-gray-900">
              <span className="block">We Design,</span>
              <span className="block">Build And Grow</span>
              <span className="block">Digital Presence.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 font-pilogue leading-relaxed max-w-lg"
          >
            From branding to media, marketing to development —
            we’re your all-in-one creative hive.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-4 flex justify-center lg:justify-start"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md">

              {/* Services Button */}
              <button
                onClick={scrollToServices}
                aria-label="Scroll to Services Section"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                Our Services <ArrowRight className="w-5 h-5" />
              </button>

              {/* Book Call Link */}
              <Link
                href="/book-call"
                aria-label="Book a Free Call"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all"
              >
                Book Free Call <Phone className="w-5 h-5" />
              </Link>

            </div>
          </motion.div>

          {/* Testimonials Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-3">

              {/* Avatar placeholders (fixed size → ZERO CLS) */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 border-2 border-white"
                  aria-hidden="true"
                />
              ))}

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-xs sm:text-sm font-bold">
                50+
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex flex-col">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 text-xs sm:text-sm">
                Trusted By 50+ Businesses
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE COLUMN */}
        <div className="w-full lg:w-1/2 flex justify-center items-center pt-8 lg:pt-0 order-1 lg:order-2">
          <div className="relative w-full flex justify-center items-center aspect-square max-w-[280px] sm:max-w-lg mx-auto">

            {/* Glow effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute top-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-orange-300/30 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-yellow-300/30 rounded-full blur-3xl" />

              {/* Floating Hero Image */}
              <motion.div
                className="z-10 w-full"
                animate={{ y: [-15, 15, -15], rotate: [-1, 1, -1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026415/hero_img_eeujut.png"
                  alt="Digital Growth and Design Illustration"
                  width={600}
                  height={600}
                  priority
                  sizes="(max-width: 768px) 80vw, 600px"
                  className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroContent;
