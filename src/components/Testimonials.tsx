'use client';
import React, { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate,
    useInView,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- 1. Interface Definitions ---

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    position: string;
    image: string;
}

interface Stat {
    number: string;
    label: string;
}

interface AnimatedNumberProps {
    value: string;
    label: string;
    delay?: number;
}

// --- 2. AnimatedNumber Component (Typed) ---

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, label, delay = 0 }) => {
    // 💡 Explicitly type useRef for a div element
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // 💡 count is a MotionValue<number>
    const count = useMotionValue(0);

    // 💡 rounded is a MotionValue<string> after transformation
    const rounded = useTransform(count, (latest: number) => {
        // Apply rounding first
        const roundedValue = Math.round(latest);
        
        // Then apply formatting
        if (value.includes("%")) {
            return roundedValue + "%";
        } else if (value.includes("M")) {
            return roundedValue + "M";
        } else if (value.includes("+")) {
            return roundedValue + "+"; 
        }
        return String(roundedValue); // Ensure a string is returned for the state below
    });

    // 🐞 FIX START: Use a local state to hold the final displayed string value.
    // This solves the TypeScript error caused by rendering the MotionValue object directly.
    const [displayedText, setDisplayedText] = useState('0');

    useEffect(() => {
        // Subscribe to the MotionValue changes and update the local state.
        const unsubscribe = rounded.on('change', (latest) => {
            // latest here is the string (e.g., "26+") produced by useTransform
            setDisplayedText(String(latest));
        });
        return () => unsubscribe();
    }, [rounded]);
    // 🐞 FIX END

    // 💡 Explicitly parse the numeric part of the string
    const numericValue: number = parseInt(value.replace(/[^\d]/g, "") || '0');

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, {
                duration: 2,
                delay: delay,
                ease: "easeOut",
            });
            // 💡 Ensure cleanup function is correctly typed
            return () => controls.stop();
        }
    }, [numericValue, delay, isInView, count]);

    return (
        <div ref={ref} className="mb-8 sm:mb-12">
            <motion.div
                className="text-6xl sm:text-6xl lg:text-[60px] font-bold mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
            >
                {/* 🎯 FIX: Render the standard string state (displayedText) instead of the MotionValue (rounded) */}
                <motion.span>{displayedText}</motion.span>
            </motion.div>
            <motion.div
                className="text-sm sm:text-base lg:text-[14px] text-white-300 font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (delay || 0) + 0.2 }} // Handle delay potentially being undefined
            >
                {label}
            </motion.div>
        </div>
    );
};


// --- 3. TestimonialsSection Component (Typed) ---

const TestimonialsSection: React.FC = () => {
    // 💡 State for the current index, explicitly typed as number
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // 💡 Apply the Testimonial interface
    const testimonials: Testimonial[] = [
        {
            id: 1,
            quote:
                "The team understood our vision deeply and created a brand that feels both powerful and spiritual. Our new identity truly reflects who we are as an international law firm.",
            author: "Founder, TARAKSH",
            position: "TARAKSH International Law Firm",
            image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
        },
        {
            id: 2,
            quote:
                "From brand identity to website launch, everything was handled flawlessly. The result is a clean, modern presence that perfectly represents our legal HR platform.",
            author: "CEO, HiLe",
            position: "Hiring for Legal",
            image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
        },
        {
            id: 3,
            quote:
                "They transformed our business vision into a strong brand and a seamless digital experience. The identity and website truly capture our global mission of going beyond exporting.",
            author: "Managing Director, Merchant Xporters",
            position: "Merchant Xporters Pvt. Ltd.",
            image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
        },
        {
            id: 4,
            quote:
                "Our new branding and website perfectly reflect Alliedge’s innovation and reliability in the healthcare space. The creative and strategic approach made all the difference.",
            author: "Head of Marketing, Alliedge Healthcare",
            position: "Alliedge Healthcare Pvt. Ltd.",
            image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
        },

    ];

    // 💡 Apply the Stat interface
    const stats: Stat[] = [
        { number: "45+", label: "Finalized Projects" },
        { number: "98%", label: "Client satisfaction rate" },
        { number: "8M", label: "Gross Revenue" },
    ];

    // Auto-play testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev: number) => (prev + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((prev: number) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prev: number) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className=" py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-white z-60 relative">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Large Background Text and Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                        Testimonials
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight"
                >
                    Why Brands Trust 
                </motion.h2>

                <div className="relative z-10 mt-12 md:mt-16 lg:mt-18 max-w-7xl mx-auto">
                    {/* Main Layout Grid */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">

                        {/* Left Side - Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:h-[450px] lg:w-1/3 flex-shrink-0 bg-gradient-to-br from-gray-950 via-gray-950 to-black rounded-2xl sm:rounded-2xl text-white relative overflow-hidden"
                        >

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                               
                                <img
                                    src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/testimonial_yuuyjn.jpg"
                                    alt="Background pattern"
                                    className="w-full h-full object-cover"
                                />
                            </div> 

                            {/* Stats Content */}
                            <div className="relative z-10 flex flex-col justify-center left-10 py-12 lg:py-8 h-full space-y-3 sm:space-y-4">
                                {stats.map((stat, index) => (
                                    <AnimatedNumber
                                        key={index}
                                        value={stat.number}
                                        label={stat.label}
                                        delay={index * 0.3}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side - Testimonial Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-2/3 relative h-[450px] bg-black rounded-3xl sm:rounded-2xl overflow-hidden "
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    {/* Background Image and Content */}
                                    <div className="absolute inset-0">
                                        {/* 💡 In a real Next.js app, consider using the <Image> component here */}
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].author}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                                    </div>

                                    <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-10 lg:p-12 xl:p-14">
                                        {/* Counter */}
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-white/60 text-xs sm:text-sm font-medium tracking-wider"
                                        >
                                            {/* Use String() to ensure correct typing for padStart */}
                                            {String(currentIndex + 1).padStart(2, "0")} /{" "}
                                            {String(testimonials.length).padStart(2, "0")}
                                        </motion.div>

                                        {/* Quote and Author */}
                                        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                                            <motion.blockquote
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                className="text-[15px] sm:text-3xl lg:text-4xl xl:text-[28px] font-bold text-white leading-tight"
                                            >
                                                "{testimonials[currentIndex].quote}"
                                            </motion.blockquote>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                                className="space-y-1"
                                            >
                                                <div className="text-lg sm:text-xl lg:text-[14px] font-semibold text-white">
                                                    {testimonials[currentIndex].author}
                                                </div>
                                                <div className="text-sm sm:text-base lg:text-[14px] text-gray-300">
                                                    {testimonials[currentIndex].position}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 flex gap-2 sm:gap-3 z-20">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={prevTestimonial}
                                    className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={nextTestimonial}
                                    className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
// 'use client';

// import React, { useState, useEffect, useRef } from "react";
// import {
//     motion,
//     AnimatePresence,
//     useMotionValue,
//     useTransform,
//     animate,
//     useInView,
// } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // -----------------------------------------
// // ⭐ Animated Number Component (Optimized)
// // -----------------------------------------
// const AnimatedNumber = ({ value, label, delay = 0 }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, amount: 0.4 });

//     const count = useMotionValue(0);
//     const [displayValue, setDisplayValue] = useState("0");

//     const rounded = useTransform(count, (latest) => {
//         const roundedValue = Math.round(latest);

//         if (value.includes("%")) return `${roundedValue}%`;
//         if (value.includes("M")) return `${roundedValue}M`;
//         if (value.includes("+")) return `${roundedValue}+`;

//         return String(roundedValue);
//     });

//     useEffect(() => {
//         const unsub = rounded.on("change", (v) => setDisplayValue(v));
//         return () => unsub();
//     }, [rounded]);

//     useEffect(() => {
//         if (isInView) {
//             const numeric = parseInt(value.replace(/[^\d]/g, ""));
//             const controls = animate(count, numeric, {
//                 duration: 2,
//                 delay,
//                 ease: "easeOut",
//             });
//             return () => controls.stop();
//         }
//     }, [isInView]);

//     return (
//         <div ref={ref} className="mb-8 sm:mb-12">
//             <motion.div
//                 className="text-6xl lg:text-[60px] font-bold mb-2 text-white"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay }}
//             >
//                 {displayValue}
//             </motion.div>
//             <motion.div
//                 className="text-sm lg:text-[14px] text-gray-300"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: delay + 0.2 }}
//             >
//                 {label}
//             </motion.div>
//         </div>
//     );
// };

// // -----------------------------------------
// // ⭐ Testimonials Section (Optimized)
// // -----------------------------------------
// const TestimonialsSection = () => {
//     const [index, setIndex] = useState(0);

//     const testimonials = [
//         {
//             id: 1,
//             quote:
//                 "The team understood our vision deeply and created a brand that feels both powerful and spiritual.",
//             author: "Founder, TARAKSH",
//             position: "TARAKSH International Law Firm",
//             image:
//                 "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
//         },
//         {
//             id: 2,
//             quote:
//                 "From brand identity to website launch, everything was handled flawlessly.",
//             author: "CEO, HiLe",
//             position: "Hiring for Legal",
//             image:
//                 "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
//         },
//         {
//             id: 3,
//             quote:
//                 "They transformed our business vision into a strong brand and seamless digital experience.",
//             author: "Managing Director",
//             position: "Merchant Xporters Pvt. Ltd.",
//             image:
//                 "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
//         },
//         {
//             id: 4,
//             quote:
//                 "The creative and strategic approach made all the difference.",
//             author: "Head of Marketing",
//             position: "Alliedge Healthcare",
//             image:
//                 "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
//         },
//     ];

//     const stats = [
//         { number: "45+", label: "Finalized Projects" },
//         { number: "98%", label: "Client satisfaction rate" },
//         { number: "8M", label: "Gross Revenue" },
//     ];

//     // Autoplay
//     useEffect(() => {
//         const id = setInterval(
//             () => setIndex((i) => (i + 1) % testimonials.length),
//             5000
//         );
//         return () => clearInterval(id);
//     }, []);

//     const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
//     const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//     return (
//         <section
//             aria-labelledby="testimonials-heading"
//             className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 bg-white relative"
//         >
//             <div className="max-w-7xl mx-auto">

//                 {/* Label */}
//                 <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase">
//                     Testimonials
//                 </span>

//                 {/* ⭐ H2 Heading */}
//                 <h2
//                     id="testimonials-heading"
//                     className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mt-3"
//                 >
//                     Why Brands Trust Us
//                 </h2>

//                 {/* --------------------------------------
//                     Layout Grid
//                 -------------------------------------- */}
//                 <div className="grid lg:grid-cols-3 gap-8 mt-14">

//                     {/* LEFT — Stats Card */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.7 }}
//                         className="bg-black rounded-2xl p-10 relative overflow-hidden"
//                     >
//                         <Image
//                             src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/testimonial_yuuyjn.jpg"
//                             alt="background texture"
//                             fill
//                             sizes="100vw"
//                             className="object-cover opacity-10"
//                         />

//                         <div className="relative z-10 mt-6">
//                             {stats.map((s, i) => (
//                                 <AnimatedNumber
//                                     key={i}
//                                     value={s.number}
//                                     label={s.label}
//                                     delay={i * 0.3}
//                                 />
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* RIGHT — Testimonial Slider */}
//                     <div className="lg:col-span-2 h-[460px] bg-black rounded-3xl overflow-hidden relative">
                        
//                         <AnimatePresence mode="wait">

//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 transition={{ duration: 0.5 }}
//                                 className="absolute inset-0"
//                                 aria-live="polite"
//                             >
//                                 <Image
//                                     src={testimonials[index].image}
//                                     alt={testimonials[index].author}
//                                     fill
//                                     sizes="100vw"
//                                     className="object-cover"
//                                 />

//                                 {/* Gradient overlay */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

//                                 {/* Content */}
//                                 <div className="absolute inset-0 flex flex-col justify-between p-10 z-20">
//                                     <p className="text-white/70 text-sm">{String(index + 1).padStart(2,"0")} / {String(testimonials.length).padStart(2,"0")}</p>

//                                     <blockquote className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-white leading-snug">
//                                         “{testimonials[index].quote}”
//                                     </blockquote>

//                                     <div>
//                                         <p className="text-white font-semibold text-lg">
//                                             {testimonials[index].author}
//                                         </p>
//                                         <p className="text-gray-300">{testimonials[index].position}</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </AnimatePresence>

//                         {/* Controls */}
//                         <div className="absolute bottom-6 right-6 flex gap-3 z-30">
//                             <button
//                                 onClick={prev}
//                                 aria-label="Previous testimonial"
//                                 className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20"
//                             >
//                                 <ChevronLeft className="w-6 h-6" />
//                             </button>
//                             <button
//                                 onClick={next}
//                                 aria-label="Next testimonial"
//                                 className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20"
//                             >
//                                 <ChevronRight className="w-6 h-6" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default TestimonialsSection;
