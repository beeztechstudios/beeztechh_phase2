// // components/Slider.tsx
// 'use client';
// import React from "react";
// import { motion } from "framer-motion";

// // 💡 Explicitly type the constant as string
// const CLOUDINARY_ICON: string =
//   "https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg";

// // 💡 Explicitly type the array of words
// const words: string[] = ["Innovative", "Creative", "Digital", "Designer"];

// // 💡 Define the component as a React Functional Component (React.FC)
// const Slider: React.FC = () => {
//   return (
//     <div className="relative z-10 bg-white pb-12 pt-4 mt-12 sm:mt-16">
//       <div className="relative mx-auto w-full overflow-hidden max-w-7xl bg-transparent py-6 sm:py-8 mb-8 sm:mb-12">
//         {/* Fade Effects */}
//         <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
//         <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

//         {/* Scrolling Content */}
//         <motion.div
//           className="flex items-center gap-6 sm:gap-8 text-black whitespace-nowrap" // Added whitespace-nowrap for correct infinite scroll behavior
//           animate={{ x: [0, -1000] }}
//           transition={{ 
//             x: { 
//               repeat: Infinity, 
//               repeatType: "loop", 
//               duration: 20, 
//               ease: "linear" 
//             }, 
//           }}
//         >
//           {/* Loop twice to ensure seamless scrolling transition */}
//           {[...Array(2)].map((_, i) => (
//             // 💡 Explicitly type the loop index
//             <React.Fragment key={i}>
//               {words.map((word, idx) => (
//                 // 💡 Explicitly type the inner loop index
//                 <React.Fragment key={idx}>
//                   <img
//                     src={CLOUDINARY_ICON}
//                     alt="separator icon"
//                     className="h-10 md:h-16"
//                     loading="lazy"
//                   />
//                   <span
//                     className={`text-5xl sm:text-4xl md:text-[100px] font-pilogue font-extrabold ${
//                       idx % 2 === 0 ? "opacity-100" : ""
//                     }`}
//                   >
//                     {word}
//                   </span>
//                 </React.Fragment>
//               ))}
//             </React.Fragment>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Slider;
'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CLOUDINARY_ICON =
  "https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg";

const words = ["Innovative", "Creative", "Digital", "Designer"];

const Slider: React.FC = () => {
  return (
    <section
      className="relative z-10 bg-white py-10 sm:py-14 mt-10 sm:mt-16 overflow-hidden"
      aria-label="Creative scrolling text section"
    >
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden">

        {/* Fade Masks (decorative elements, not read by screen readers) */}
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Optimized Infinite Scrolling Animation */}
        <motion.div
          className="flex items-center gap-8 sm:gap-10 whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 18, // optimized for mobile GPU
          }}
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {words.map((word, idx) => (
                <React.Fragment key={idx}>
                  {/* Optimized Icon (fixed size, Next/Image) */}
                  <Image
                    src={CLOUDINARY_ICON}
                    alt=""
                    width={60}
                    height={60}
                    loading="eager"
                    aria-hidden="true"
                    className="h-8 sm:h-12 md:h-16 w-auto object-contain"
                  />

                  {/* Words */}
                  <span
                    className="text-4xl sm:text-5xl md:text-[90px] font-pilogue font-extrabold tracking-tight"
                    aria-label={word}
                  >
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
