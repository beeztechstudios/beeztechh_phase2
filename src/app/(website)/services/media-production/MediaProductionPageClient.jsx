"use client"
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Pencil,
  BarChart2,
  Megaphone,
  RefreshCcw,
  Monitor,
  Zap,
  ChevronDown,
  Star,
  Phone,
  Film, // New icon for video
  Scissors, // New icon for editing
  Camera, // New icon for photography
  LayoutGrid, // New icon for graphic design
  Layers, // Icon for content planning (reused)
  Rocket, // Icon for MVP/SaaS (reused)
} from "lucide-react";
import { motion } from "framer-motion";

import ContactSection from "@/components/ContactSection";
import Link from "next/link"

const MediaProductionPageclient = () => {
  const [scrollCol1, setScrollCol1] = useState(0);
  const [scrollCol2, setScrollCol2] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);

  // Auto-scroll animation for image grid
  // NOTE: This effect runs infinitely and should be optimized for production use.
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setScrollCol1((prev) => (prev + 0.1) % 100); // Scroll down
      setScrollCol2((prev) => (prev - 0.1 + 100) % 100); // Scroll up
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  

  // UPDATED SERVICES DATA
  const services = [
    {
      icon:"https://res.cloudinary.com/dwz07ormq/image/upload/v1760201314/a-sleek-flat-vector-icon-featuring-three_Q5G2DVXRRO6LK_6CEe1QrQ_xfAHSHDsREav9MFicbSpZg-Photoroom_g8e7j1.png",
      title: "Graphic Design & Creatives",
      description:
        "High-impact designs for posters, detailed infographics, and engaging social media creatives that drive immediate action.",
    },
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760201315/a-sleek-vector-icon-design-featuring-a-t_VnaK8Sv8Q_u6GwvkFPLPxA_Mdi-ncV9Q_-pPH9kcDEaaw-Photoroom_qrieqo.png",
      title: "Motion Graphics & Animation",
      description:
        "Engaging 2D/3D motion graphics for ads, explainer videos, and captivating animated elements for your website or app launch.",
    },
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760201315/a-flat-vector-icon-design-featuring-a-cl_fenu6ehTQu-PAo-ufs3l4w_1cIVLkOuRnqS-MW9uf61cQ-Photoroom_e2w3mg.png",
      title: "Video Editing & Production",
      description:
        "Full-service video editing, post-production, and production for corporate narratives, brand stories, and promotional campaigns.",
    },
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760201315/a-premium-vector-icon-featuring-a-dynami_J__Ybj2wRi2CY7E2qbn14g_h5pYuLnRTrmndJ-3Zg9dYg-Photoroom_rkgcgm.png",
      title: "Commercial Photography",
      description:
        "Professional product, event, and corporate photography to capture high-quality, authentic visual assets for your brand's digital presence.",
    },
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760201314/a-premium-flat-vector-icon-featuring-a-c_yyUXVdkqTUmS2tp5Oc4Hvg_J-gmUJWTQ4KNHDpbied6Gg-Photoroom_vviqau.png",
      title: "Creative Direction & Planning",
      description:
        "Full content strategy, storyboarding, and creative direction to ensure all your media assets are consistent and aligned with marketing goals.",
    },
  ];

  // UPDATED FAQ DATA
  const faqs = [
    {
      q: "How fast can you deliver a social media creative package?",
      a: "For standard social media design packages, we aim for a **3-5 business day** turnaround, from initial brief to final delivery. Complex infographics or animations may require more time, which is specified in the project scope.",
    },
    {
      q: "Do you specialize in explainer videos for SaaS/MVP-stage products?",
      a: "Absolutely. We are experts in creating concise, engaging **Explainer Videos** tailored for early-stage products, focusing on clarity and a strong call-to-action to maximize conversion rates.",
    },
    {
      q: "What is included in the 'Pitch Presentation' preparation service?",
      a: "We offer end-to-end presentation preparation, including narrative structuring, professional graphic design, data visualization, and practice sessions to ensure your pitch is visually stunning and highly persuasive for investors.",
    },
    {
      q: "Can you provide production support for on-location corporate video shoots?",
      a: "Yes, our team handles all aspects of **video production**, including scriptwriting, crew sourcing, equipment, on-site directing, and post-production editing for a polished, final corporate video.",
    },
  ];

  // Framer Motion Variants (kept the same)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.3, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const cardPop = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };
  return (
    <>
   



    <div className="bg-white min-h-screen mt-8 md:-mt-5">
      {/* --- Hero Section --- */}
      <section className="bg-white px-4 sm:px-6 text-gray-900 min-h-screen flex items-center py-16 sm:py-28">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main animated container: Stacks on mobile, 2 columns on large screens */}
          <motion.div
            className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Left Content (Text and Buttons) */}
            <div className="space-y-4 lg:space-y-6 text-black">
              <motion.div
                variants={itemSlide}
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                MEDIA PRODUCTION & CREATIVE SERVICES
              </motion.div>

              <motion.h1
                variants={itemSlide}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight sm:leading-tight lg:leading-tight"
              >
                  <span className="block">Visual  </span>
                  <span className="block">Storytelling for </span>{" "}
                  <span className="block"> Digital Growth.</span>
              </motion.h1>

              <motion.p
                variants={itemSlide}
                className="text-normal sm:text-xl text-gray-600 max-w-xl"
              >
                Beeztech crafts powerful brand stories through graphic design, motion graphics, and professional video production that captivate audiences and drive engagement. 
                
              </motion.p>

              {/* Buttons: Wrap when needed on small screens */}
              <motion.div
                variants={itemSlide}
                className="flex flex-wrap gap-4 pt-4 sm:pt-6"
              >
                {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
                              View Pricing <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button> */}
                <Link
                  href="/book-call"
                  className="bg-orange-500 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Book Free Call <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>

              {/* Testimonials/Stats Block */}
              {/* <motion.div
                variants={itemSlide}
                className="flex items-center gap-4 pt-4"
              >
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 border-2 border-white"
                    ></div>
                  ))}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-xs sm:text-sm font-bold">
                    50+
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium text-xs sm:text-sm">
                    Trusted By 50+ Businesses
                  </span>
                </div>
              </motion.div> */}
            </div>

            {/* Right Side (Image Grid with Staggered Pop-In) */}
            <motion.div variants={cardPop} className=" lg:pt-0  ">
              <img src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760200414/a-sleek-isometric-infographic-design-sho_PxwqQyjfS_25AkCtOfeJIQ_wU0L1lOGQemuFbhdaRB-3A-Photoroom_qxefo1.png" alt="" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- Services Section (Using Lucide Icons with Gradient) --- */}
      <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Comprehensive Creative and Production Suite
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Icon with Gradient (using Lucide icons and the fill-current fix) */}
                <div className="mb-4 w-28 h-28 flex items-center justify-center">
                  <img src={service.icon} alt={service.title} className="rounded-full bg-white/5 border border-white/10 hover:bg-orange-500/10 transition duration-300"/>
                   
                  
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Explainer Video / Pitch Deck Section (Re-themed from Rebrand) --- */}
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 " // Adjusted width class for better responsiveness
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Launch Your Product Story with Explainer Videos & Pitch Decks that Convert
            </h2>
            <p className="text-gray-300 text-base md:text-xl mb-4">
              For SaaS startups, tech innovators, and teams at the MVP stage, clear communication defines success.
Beeztech creates high-impact explainer videos and investor-ready pitch decks that simplify your value proposition and make your product story unforgettable.
            </p>
            <p className="text-gray-300 text-base md:text-xl mb-4">
             Our creative team crafts a compelling narrative flow, designs captivating motion graphics, and builds pitch presentations that engage, persuade, and impress.
Every slide, animation, and transition is purpose-built to help you secure funding, attract early users, and stand out in competitive markets.
            </p>
            <p className="text-gray-300 text-base md:text-xl ">
              From concept to final edit, Beeztech ensures your visual communication is optimized for clarity, conversion, and investor impact — empowering your brand to grow with confidence and creativity.
            </p>
            <Link
              href="/book-call"
              className="mt-8 inline-flex items-center bg-orange-500 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg text-base"
            >
              Start Your Production <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          {/* Image/Illustration Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center items-center"
          >
            {/* Placeholder image for Explainer/Pitch theme */}
            <img
              src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760202097/a-modern-premium-infographic-visual-for-_m6mss338QimkjpOQdiBgRQ_zlYNdXVGRTKlli5NVvNh-Q-Photoroom_bnpxwt.png" // Reused image placeholder
              alt="Explainer Video and Pitch Deck Illustration"
              className="w-full max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* --- FAQ Section (Re-themed) --- */}
      <motion.section
              className="py-20 bg-gray-50"
              initial="hidden"
              whileInView="visible" // Triggers animation when the section scrolls into view
              viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% visible
              variants={containerVariants}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column: Title and CTA */}
                  <motion.div variants={itemVariants}>
                    <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                      FAQs
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                      Questions <span className="text-gray-400">& answers.</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Everything you need to know about our **web development** and
                      recurring support service.
                    </p>
      
                    {/* Contact Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">
                            Have more questions?
                          </p>
                          <p className="text-sm text-gray-600">
                            Book a free discovery call with a founder
                          </p>
                        </div>
                      </div>
                      <a
                        href="/book-call"
                        className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
                      >
                        Book Free Call <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
      
                  {/* Right Column: FAQ List */}
                  <motion.div className="space-y-4" variants={containerVariants}>
                    {faqs.map((faq, idx) => (
                      <motion.div // Each FAQ item uses motion
                        key={idx}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                        variants={itemVariants} // Applies staggered animation
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors"
                        >
                          <span className="font-bold text-gray-900">{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform text-yellow-500 ${
                              openFaq === idx ? "rotate-180" : ""
                            }`}
                          />
                        </button>
      
                        {/* Answer Content - Uses Framer Motion's AnimatePresence for smooth open/close */}
                        {openFaq === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

      {/* --- Contact Section --- */}
      <ContactSection />
    </div>
    </>
  );
};

export default MediaProductionPageclient;
