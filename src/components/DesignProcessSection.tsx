// // components/sections/DesignProcessSection.tsx
// 'use client';
// import React from 'react';
// import { motion, Variants } from 'framer-motion';

// // --- TypeScript Interface Definitions ---

// // Define the shape of a single step object
// interface Step {
//     number: string | null;
//     title: string | null;
//     description: string | null;
//     // Limit the type options to the specific strings used
//     type: 'gradient-card' | 'image-card' | 'dark-card'; 
//     image: string | null;
// }

// // Define the specific Tailwind class names for easier reference
// type CardStyleKey = 'gradient-card' | 'dark-card';

// // --- Data ---

// const steps: Step[] = [ // 💡 Apply the Step interface to the array
//     {
//         number: '01.',
//         title: 'RESEARCH & STRATEGY',
//         description:
//             'In this phase, I dive deep into understanding your business, target audience, and project goals. Through research and strategic planning, I create a clear roadmap to guide the entire design process.',
//         type: 'gradient-card',
//         image: null,
//     },
//     {
//         number: null,
//         title: null,
//         description: null,
//         type: 'image-card',
//         image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1761584555/workflow_1_uhfyib.jpg',
//     },
//     {
//         number: '02.',
//         title: 'CONCEPT & IDEATION',
//         description:
//             'Here, I brainstorm and develop creative concepts that align with your vision. Initial sketches and ideas are refined into tangible wireframes, setting the direction for design and functionality.',
//         type: 'gradient-card',
//         image: null,
//     },
//     {
//         number: null,
//         title: null,
//         description: null,
//         type: 'image-card',
//         image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1761584556/workflow_2_p9aokv.jpg',
//     },
//     {
//         number: '03.',
//         title: 'FEEDBACK & REFINEMENT',
//         description:
//             'Collaboration is key. I review the design with you, gather feedback, and refine the work to align with your expectations and goals. This ensures the design reflects your vision.',
//         type: 'dark-card', // This will be a dark gray card
//         image: null,
//     },

//     {
//         number: '04.',
//         title: 'TESTING & OPTIMIZATION',
//         description:
//             'I conduct thorough testing to identify and resolve any performance or usability issues. This phase optimizes the design for seamless user experience across all devices.',
//         type: 'gradient-card', // Use this type for gradient background
//         image: null,
//     },

//     {
//         number: '05.',
//         title: 'LAUNCH & DELIVERY',
//         description:
//             'Once everything is finalized, the project is prepared for launch. I assist with the implementation and ensure a smooth delivery, providing all necessary assets and support.',
//         type: 'dark-card', // This will be a dark gray card
//         image: null,
//     },
//     {
//         number: null,
//         title: null,
//         description: null,
//         type: 'image-card',
//         image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1761584556/workflow_3_e3gijx.jpg',
//     },
// ];

// // --- Animation Variants ---

// // 💡 Framer motion variants are typed as Variants
// const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1,
//         },
//     },
// };

// const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             type: 'spring',
//             stiffness: 100,
//             damping: 10,
//         },
//     },
// };

// // --- Component ---

// // 💡 Explicitly type the functional component as React.FC
// const DesignProcessSection: React.FC = () => {
    
//     // Define class mapping for the non-image cards
//     const cardStyles: Record<CardStyleKey, { wrapper: string; number: string; title: string; description: string }> = {
//         'gradient-card': {
//             wrapper: 'bg-gradient-to-br from-orange-500/60 to-yellow-400/50 text-gray-900',
//             number: 'text-gray-800',
//             title: 'text-gray-800',
//             description: 'text-gray-800',
//         },
//         'dark-card': {
//             // Updated to be a dark card with white text as intended by the original logic for non-gradient, non-image
//             wrapper: 'bg-gray-900 text-white', 
//             number: 'text-orange-400', // Use a highlight color for the number on dark cards
//             title: 'text-white',
//             description: 'text-gray-400',
//         },
//     };

//     return (
//         // Main section background changed to white
//         <section className="bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header content */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//                     className="mb-16 sm:mb-20 text-center lg:text-left"
//                 >
//                     {/* Changed text color to gray-900 */}
//                     <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                         Our Work Process
//                     </h2>
//                     {/* The original paragraph was commented out */}
//                 </motion.div>

//                 {/* Grid for process steps */}
//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {steps.map((step, index) => {
//                         const isImage = step.type === 'image-card';
                        
//                         // Safely get the styles, defaulting to 'dark-card' if the type is somehow missed (though constrained by the interface)
//                         const styleKey: CardStyleKey = isImage ? 'dark-card' : (step.type as CardStyleKey);
//                         const styles = cardStyles[styleKey];

//                         // Class mapping for the grid layout - improved for clarity
//                         const layoutClasses = [
//                             index === 0 && 'lg:col-span-1', 
//                             index === 1 && 'lg:col-span-1 hidden md:block', // Hide on small screens
//                             index === 2 && 'md:col-span-1', 
//                             index === 3 && 'md:col-span-1', 
//                             index === 4 && 'md:col-span-2 lg:col-span-2', // Span 2 columns on medium/large
//                             index === 5 && 'lg:col-span-1 hidden md:block', // Hide on small screens
//                             index === 6 && 'md:col-span-1',
//                             index === 7 && 'md:col-span-1',
//                         ].filter(Boolean).join(' '); // Filter removes false/null entries

//                         return (
//                             <motion.div
//                                 key={index}
//                                 variants={itemVariants}
//                                 className={`
//                                     relative p-8 sm:p-10 shadow-xl rounded-3xl flex flex-col justify-center 
//                                     transition-all duration-300
//                                     ${isImage ? 'overflow-hidden bg-gray-700' : styles.wrapper} 
//                                     ${layoutClasses}
//                                 `}
//                                 // Ensure all cards have a square aspect ratio
//                                                             >
//                                 {isImage ? (
//                                     step.image && (
//                                         <img 
//                                             src={step.image} 
//                                             alt={`Design process visual for step ${index + 1}`} 
//                                             className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                                         />
//                                     )
//                                 ) : (
//                                     <>
//                                         {/* Step Number */}
//                                         <h3 className={`text-5xl sm:text-6xl font-bold mb-6 ${styles.number}`}>
//                                             {step.number}
//                                         </h3>
                                        
//                                         {/* Title and Description */}
//                                         <div>
//                                             <h4 className={`text-xl sm:text-2xl font-bold mb-3 ${styles.title}`}>
//                                                 {step.title}
//                                             </h4>
//                                             <p className={`text-base sm:text-lg font-light ${styles.description}`}>
//                                                 {step.description}
//                                             </p>
//                                         </div>
//                                     </>
//                                 )}
//                             </motion.div>
//                         );
//                     })}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default DesignProcessSection;

'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from "next/image";

// --- Type Definitions ---
interface Step {
    number: string | null;
    title: string | null;
    description: string | null;
    type: 'gradient-card' | 'image-card' | 'dark-card';
    image: string | null;
}

type CardStyleKey = 'gradient-card' | 'dark-card';

// --- Process Steps ---
const steps: Step[] = [
    {
        number: '01.',
        title: 'RESEARCH & STRATEGY',
        description:
            'Deep dive into your brand, audience & project goals to create a strategic roadmap for design.',
        type: 'gradient-card',
        image: null,
    },
    {
        number: null, title: null,
        description: null,
        type: 'image-card',
        image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1761584555/workflow_1_uhfyib.jpg',
    },
    {
        number: '02.',
        title: 'CONCEPT & IDEATION',
        description:
            'Brainstorming, wireframes & initial design direction aligned with your vision.',
        type: 'gradient-card',
        image: null,
    },
    {
        number: null, title: null,
        description: null,
        type: 'image-card',
        image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1761584556/workflow_2_p9aokv.jpg',
    },
    {
        number: '03.',
        title: 'FEEDBACK & REFINEMENT',
        description:
            'Your input helps refine and shape the design until it perfectly reflects your goals.',
        type: 'dark-card',
        image: null,
    },
    {
        number: '04.',
        title: 'TESTING & OPTIMIZATION',
        description:
            'Testing across devices + performance tuning ensures a seamless experience.',
        type: 'gradient-card',
        image: null,
    },
    {
        number: '05.',
        title: 'LAUNCH & DELIVERY',
        description:
            'Final delivery, asset handover & implementation support for a smooth launch.',
        type: 'dark-card',
        image: null,
    },
    {
        number: null, title: null,
        description: null,
        type: 'image-card',
        image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1761584556/workflow_3_e3gijx.jpg',
    },
];

// --- Animation Variants ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 90, damping: 12 },
    },
};

// --- Component ---
const DesignProcessSection: React.FC = () => {

    const cardStyles: Record<CardStyleKey, { wrapper: string; number: string; title: string; description: string }> = {
        'gradient-card': {
            wrapper: 'bg-gradient-to-br from-orange-500/60 to-yellow-400/50 text-gray-900',
            number: 'text-gray-800',
            title: 'text-gray-900',
            description: 'text-gray-800',
        },
        'dark-card': {
            wrapper: 'bg-gray-900 text-white',
            number: 'text-orange-400',
            title: 'text-white',
            description: 'text-gray-300',
        },
    };

    return (
        <section
            className="bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden"
            aria-labelledby="design-process-heading"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 sm:mb-20 text-center lg:text-left"
                >
                    <h2
                        id="design-process-heading"
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                    >
                        Our Work Process
                    </h2>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {steps.map((step, index) => {
                        const isImage = step.type === 'image-card';
                        const styleKey: CardStyleKey =
                            step.type === 'image-card' ? 'dark-card' : (step.type as CardStyleKey);
                        const styles = cardStyles[styleKey];

                        // Grid layout fixes & CLS prevention
                        const layoutClasses = [
                            index === 1 && "hidden md:block",
                            index === 5 && "hidden md:block",
                        ].filter(Boolean).join(" ");

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`
                                    relative p-8 sm:p-10 rounded-3xl shadow-xl
                                    transition-all duration-300 overflow-hidden
                                    ${isImage ? "bg-gray-700" : styles.wrapper}
                                    ${layoutClasses}
                                `}
                            >
                                {/* IMAGE CARD */}
                                {isImage && step.image && (
                                    <Image
                                        src={step.image}
                                        alt={`Process step visual ${index + 1}`}
                                        width={800}
                                        height={800}
                                        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                                        loading="lazy"
                                    />
                                )}

                                {/* TEXT CARD */}
                                {!isImage && (
                                    <>
                                        <h3 className={`text-5xl sm:text-6xl font-bold mb-6 ${styles.number}`}>
                                            {step.number}
                                        </h3>

                                        <div>
                                            <h4 className={`text-xl sm:text-2xl font-bold mb-3 ${styles.title}`}>
                                                {step.title}
                                            </h4>
                                            <p className={`text-base sm:text-lg font-light ${styles.description}`}>
                                                {step.description}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default DesignProcessSection;
