// // components/FaqAccordion.jsx
// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function FaqAccordion({ faqs }) {
//   const [openIndex, setOpenIndex] = useState(-1);

//   const toggleFaq = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left Column */}
//           <div>
//             <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
//               FAQs
//             </span>
//             <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//               Questions <span className="text-gray-400">& answers.</span>
//             </h2>
//             <p className="text-xl text-gray-600 mb-8">
//               Everything you need to know about our web development services.
//             </p>
//             <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
//               <div className="flex items-center gap-4 mb-5">
//                 <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
//                   <ChevronDown className="w-6 h-6 text-gray-900" />
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900">Have more questions?</p>
//                   <p className="text-sm text-gray-600">
//                     Book a free discovery call with a founder
//                   </p>
//                 </div>
//               </div>
//               <a
//                 href="/book-call"
//                 className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
//               >
//                 Book Free Call
//               </a>
//             </div>
//           </div>

//           {/* Right Column - FAQ List */}
//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
//               >
//                 <button
//                   onClick={() => toggleFaq(idx)}
//                   className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors"
//                 >
//                   <span className="font-bold text-gray-900">{faq.q}</span>
//                   <ChevronDown
//                     className={`w-5 h-5 transition-transform text-orange-500 ${
//                       openIndex === idx ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <AnimatePresence>
//                   {openIndex === idx && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
//                     >
//                       {faq.a}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      {/* JSON-LD for SEO (Google FAQ Rich Snippet Boost) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div>
            <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
              FAQs
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Questions <span className="text-gray-400">& answers.</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about our development, branding & digital services.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <ChevronDown className="w-6 h-6 text-gray-900" />
                </div>

                <div>
                  <p className="font-bold text-gray-900">Have more questions?</p>
                  <p className="text-sm text-gray-600">Book a free discovery call with our team</p>
                </div>
              </div>

              <Link
                href="/book-call"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
              >
                Book Free Call
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN – FAQ ACCORDION */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 text-lg">{faq.q}</h3>

                    <ChevronDown
                      className={`w-5 h-5 text-orange-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        role="region"
                        aria-label={faq.q}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
