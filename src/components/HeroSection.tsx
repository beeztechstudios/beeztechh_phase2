// // components/sections/HeroSection.tsx
// 'use client';
// import React from "react";
// import { motion } from "framer-motion";
// // 💡 Use Link from next/link for internal routing in Next.js
// import Link from "next/link"; 
// import { Phone, Star, ArrowRight } from "lucide-react";

// // --- TypeScript Interface Definition ---

// // Define the shape of the props this component expects
// interface HeroSectionProps {
//     // scrollToServices is expected to be a function that takes no arguments and returns nothing (void)
//     scrollToServices: () => void; 
// }

// // --- Component ---

// // 💡 Explicitly type the functional component with the defined interface
// const HeroSection: React.FC<HeroSectionProps> = ({ scrollToServices }) => {
    
   

//     return (
//         <div className="relative z-0 px-4 sm:px-6 lg:px-16 py-8 overflow-hidden">
//             <div className="fixed inset-0 opacity-15 pointer-events-none ">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ff8800' stroke-width='1'/%3E%3C/svg%3E")`,
//               backgroundSize: "60px 60px",
//             }}
//           ></div>
//         </div>
//             <div className="max-w-7xl mx-auto z-10">
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="space-y-4 sm:space-y-5 w-full lg:w-1/2 text-left lg:text-left order-2 lg:order-1 "
//                     >
//                        <motion.div
                                       
//                                        className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium"
//                                      >
//                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse "></div>
//                                        BUZZING IDEAS INTO REALITY
//                                      </motion.div>

//                         {/* Main Heading - Highly Responsive text sizes */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3 }}
//                             className="space-y-2 sm:space-y-4"
//                         >
//                             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight sm:leading-tight lg:leading-tight">
//                                 <span className="block">We Design,</span>
//                                 <span className="block">Build And Grow</span>{" "}
//                                 <span className="block">Your Digital Brand </span>
//                             </h1>
//                         </motion.div>

//                         {/* Description - Mobile responsive */}
//                         <motion.p
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.4 }}
//                             className="text-base sm:text-lg lg:text-xl text-gray-600 font-pilogue font-medium leading-relaxed max-w-lg mx-auto lg:mx-0"
//                         >
//                             From branding & design to web development and marketing Beeztech  is your all-in-one creative digital agency in Udaipur. 
                            
//                         </motion.p>

//                         {/* Buttons */}
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.5 }}
//                             className="pt-4 flex justify-center lg:justify-start"
//                         >
//                             <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md">
//                                 <button
//                                     onClick={scrollToServices}
//                                     className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
//                                 >
//                                     Our Services
//                                     <ArrowRight className="w-5 h-5" />
//                                 </button>
                                
//                                 {/* 💡 Use Next.js Link for internal navigation */}
//                                 <Link href="/book-call" className="bg-black hover:bg-gray-800 text-white px-8 py-4 justify-center rounded-full font-semibold transition-all flex items-center gap-2">
                                    
                                        
                                
//                                         Book Free Call <Phone className="w-5 h-5" />
                                    
//                                 </Link>
//                             </div>
//                         </motion.div>
                        
//                         {/* Testimonials/Stats Block */}
//                         {/* <motion.div
//                             className="flex items-center gap-4 pt-4"
//                         >
//                             <div className="flex -space-x-3">
//                                 {[...Array(3)].map((_, i) => (
//                                     <div
//                                         key={i}
//                                         className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 border-2 border-white"
//                                     ></div>
//                                 ))}
//                                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-xs sm:text-sm font-bold">
//                                     50+
//                                 </div>
//                             </div>
//                             <div className="flex flex-col">
//                                 <div className="flex text-orange-500">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star
//                                             key={i}
//                                             className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
//                                         />
//                                     ))}
//                                 </div>
//                                 <span className="text-gray-700 font-medium text-xs sm:text-sm">
//                                     Trusted By 50+ Businesses
//                                 </span>
//                             </div>
//                         </motion.div> */}
//                     </motion.div>

//                     <div className="w-full lg:w-1/2 flex justify-center items-center pt-8 lg:pt-0 order-1 lg:order-2">
//                         <div className="relative w-full flex justify-center items-center aspect-square max-w-[280px] sm:max-w-lg mx-auto">
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.4 }}
//                             >
//                                 {/* Background Glow Effects (Scaled down for better mobile look) */}
//                                 <div className="absolute top-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl" />
//                                 <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full blur-3xl" />

//                                 {/* Main Image */}
//                                 <motion.div
//                                     className="z-10 w-full"
//                                     animate={{
//                                         y: [-15, 15, -15],
//                                         rotate: [-1, 1, -1],
//                                     }}
//                                     transition={{
//                                         duration: 8,
//                                         repeat: Infinity,
//                                         ease: "easeInOut",
//                                     }}
//                                 >
//                                     <img
//                                         src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026415/hero_img_eeujut.png"
//                                         alt="Abstract visual representation of digital growth and design" // Improved alt text
//                                         className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
//                                     />
//                                 </motion.div>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;
'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  scrollToServices: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToServices }) => {
  return (
    <section
      className="relative z-0 px-4 sm:px-6 lg:px-16 py-12 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative Background Pattern (Non-blocking & accessible) */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ... %3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE — TEXT + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 w-full lg:w-1/2 order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              BUZZING IDEAS INTO REALITY
            </div>

            {/* ⭐ MAIN H1 (SEO IMPORTANT) */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              <span className="block">We Design,</span>
              <span className="block">Build And Grow</span>
              <span className="block">Your Digital Brand</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
              From branding & design to web development and marketing Beeztech is
              your all-in-one creative digital agency in Udaipur.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md">
              <button
                onClick={scrollToServices}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                href="/book-call"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
              >
                Book Free Call <Phone className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE — HERO IMAGE (LCP) */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 pt-4 lg:pt-0">
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-lg mx-auto">

              {/* Glow Effects (non-render-blocking) */}
              <div
                aria-hidden="true"
                className="absolute top-1/4 right-1/4 w-44 h-44 sm:w-60 sm:h-60 bg-orange-200/20 rounded-full blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-1/4 left-1/4 w-44 h-44 sm:w-60 sm:h-60 bg-yellow-200/20 rounded-full blur-3xl"
              />

              {/* ⭐ Optimized LCP Image */}
              <motion.div
                className="relative z-10 w-full"
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 4 , repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="https://res.cloudinary.com/dwz07ormq/image/upload/f_auto,q_auto,w_450/v1760026415/hero_img_eeujut.png"
                  alt="Creative digital branding and web development hero illustration"
                  width={700}
                  height={700}
                  priority // ⭐ Forces LCP optimization
                  className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
