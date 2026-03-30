"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Layers,
  Zap,
  CheckCircle,
  ChevronDown,
  Star,
  Phone,
  Mail,
  Compass,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { Workflow, UploadCloud } from "lucide-react";
import {
  Layout,
  ShoppingCart,
  Settings,
  Smartphone,
  ShieldCheck,
} from "lucide-react";


import { motion } from "framer-motion";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { a } from "framer-motion/client";
const WebDevelopmentPage = () => {
  const [openFaq, setOpenFaq] = useState(-1);
  // Auto-scroll animation for image grid

  const services = [
    {
      icon: Layout,
      title: "Website Design & Development",
      description:
        "Static, dynamic, or CMS-based solutions (WordPress, Webflow, etc.), tailored for high conversion.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description:
        "Building powerful online stores, robust marketplaces, and seamless payment gateway integrations.",
    },
    {
      icon: Settings,
      title: "Custom Web Applications",
      description:
        "Bespoke development of dashboards, admin panels, CRMs, and sophisticated booking systems.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native iOS/Android and cross-platform solutions using modern frameworks like React Native and Flutter.",
    },
    {
      icon: Zap,
      title: "API Development & Integration",
      description:
        "Creating high-performance RESTful and GraphQL-based services to connect your data and systems.",
    },
    {
      icon: ShieldCheck,
      title: "Maintenance & Optimization",
      description:
        "Reliable website maintenance, performance tuning, security hardening, and professional hosting setup.",
    },
  ];



  const initialProjects = [
    {
      id: 1,
      name: "SaaS Platform ",
      category: "Design & Development",
      image:
        "https://res.cloudinary.com/dwz07ormq/image/upload/v1761726748/Screenshot_2025-10-29_135937_zdvsb0.png",
      link: "https://www.ceel.io/",
      result: "120% Increase in Q4 Revenue",
      icon: <Zap className="w-8 h-8 text-orange-500" />,
    },
    {
      id: 2,
      name: "SaaS Platform ",
      category: "UX/UI Design & Development ",
      image:
        "https://res.cloudinary.com/dwz07ormq/image/upload/v1761726750/Screenshot_2025-10-29_140056_uqmwbc.png",
      link: "https://www.quotekaro.in/",
      result: "25% Higher Brand Recall",
      icon: <Compass className="w-8 h-8 text-red-600" />,
    },
    {
      id: 3,
      name: "Brand Stablish",
      category: "UI Design & Development",
      image: "https://res.cloudinary.com/dwz07ormq/image/upload/v1761726749/Screenshot_2025-10-29_140137_gw4epp.png",
      link: "https://www.petjunction.in/",
      result: "40% Reduction in Churn Rate",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    },
    {
      id: 4,
      name: "SaaS platform",
      category: "Web Design",
      image:
        "https://res.cloudinary.com/dwz07ormq/image/upload/v1761726748/Screenshot_2025-10-29_140010_rroepa.png",
      link: "https://www.blacksmith.sh/",
      result: "5M New App Downloads",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
    },
    {
      id: 5,
      name: "Mobile App Launch",
      category: "UI/UX Design ",
      image:
        "https://res.cloudinary.com/dwz07ormq/image/upload/v1761715293/IMG-20251028-WA0035_iegnpz.jpg",
      link: "https://www.figma.com/design/h9CTg95styRqRI0Jsrgn3D/QuickEats?node-id=0-1&p=f",
      result: "5M New App Downloads",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
    },
    {
      id: 5,
      name: "Travelling Website",
      category: "UI/UX Design ",
      image:
        "https://res.cloudinary.com/dwz07ormq/image/upload/v1761729245/Screenshot_2025-10-29_144343_rxnyxz.png",
      link: "https://www.sabgumo.com/",
      result: "5M New App Downloads",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
    },
  ];

  const faqs = [
    {
      q: "How does Beeztech ensure my website is scalable?",
      a: "We focus on clean architecture using modern stacks like **Next.js/React** and **Node.js**. This modular design ensures that as your user base grows or new features are needed, the application can scale horizontally without costly refactoring. We build for growth, not just for launch.",
    },
    {
      q: "Do you offer post-launch maintenance and support?",
      a: "Absolutely. Our core differentiator is the **recurring support model**. We don't believe in one-time projects. We offer comprehensive plans for security updates, performance optimization, bug fixes, and feature additions, acting as your long-term tech partner.",
    },
    {
      q: "What is your typical timeline for an MVP or Custom Web App?",
      a: "The timeline depends on scope, but our lean approach targets efficiency. A Minimal Viable Product (MVP) typically takes **4-8 weeks**. A custom web application or full SaaS product will be defined during the Discovery phase, usually ranging from 8 to 16 weeks.",
    },
    {
      q: "What is the difference between a Web App and a Business Website?",
      a: "A **Business Website** is primarily for information, branding, and lead generation. A **Web App (or SaaS)** includes complex logic, user accounts, custom dashboards, and dynamic data processing (e.g., Trello, Slack). We specialize in building both, ensuring the right solution for your business goals.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3, // Delay the children (FAQs) slightly
        staggerChildren: 0.15, // Stagger the appearance of each FAQ item
      },
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the children's animation start time
        delayChildren: 0.3, // Delay the start of the first child
      },
    },
  };

  // Variant for the left-side content (sliding up)
  const itemSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };
  const cardSlide = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 20 },
    },
  };
  // Variant for the right-side image cards (fading in and subtle scale)
  const cardPop = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };
  const imageSources = [
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F48081%2Fgympro-F9Ce8jYIZzGlIklKwKHI6b7YSpWs08&w=3840&q=100",

    "/webimg1.jpg",
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49749%2Foptimistic-7QAhEhFXH72T4u3Djr8Qk1z7BLNJVf&w=3840&q=100",
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51012%2Fxtract-xqzXUvtiwNfRpXdCNOSbHGhjlIXzdS&w=3840&q=100",
  ];



  return (
    <>
      <div className="  min-h-screen mt-8 md:mt-6">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Web & App Development",
              "description": "Professional web and app development services including custom web applications, e-commerce platforms, mobile apps, and API development in Udaipur, Rajasthan.",
              "provider": {
                "@type": "Organization",
                "name": "Beeztech ",
                "url": "https://www.beeztech.studio"
              },
              "areaServed": {
                "@type": "City",
                "name": "Udaipur",
                "containedIn": {
                  "@type": "State",
                  "name": "Rajasthan"
                }
              },
              "serviceType": "Web Development, App Development, E-Commerce Development, Custom Software Development",
              "url": "https://www.beeztech.studio/services/web-app-development"
            })
          }}
        />
        {/* Hero Section */}
        <section className="bg-white  px-4 sm:px-6  text-gray-900 min-h-screen  flex items-center py-16 sm:py-24">
          <div className="max-w-7xl   mx-auto w-full">
            {/* Main animated container: Stacks on mobile, 2 columns on large screens */}
            <motion.div
              className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Left Content (Text and Buttons) */}
              <div className="space-y-4 lg:space-y-6">
                <motion.div
                  variants={itemSlide}
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse "></div>
                  AVAILABLE FOR PROJECTS
                </motion.div>

                <motion.h1
                  variants={itemSlide}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight sm:leading-tight lg:leading-tight"
                >
                  We Build Digital Experiences,{" "}
                  {/* Note: Incorporating the concept of professional service and user experience for SEO relevance */}
                  <span className="text-black">Not Just Websites</span>
                </motion.h1>

                <motion.p
                  variants={itemSlide}
                  className="text-base sm:text-xl text-gray-600 max-w-xl"
                >
                  Beeztech design and develop high-performing, responsive, and scalable websites that go beyond aesthetics and drive measurable growth for your business.
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
              <div className="pt-2 lg:pt-0">
                <div className="flex flex-col gap-4 sm:gap-6 w-full">
                  {/* Image Grid 1 (Top Row) */}
                  <motion.div
                    className="grid grid-cols-2 gap-2 sm:gap-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {imageSources.slice(0, 2).map((src, index) => (
                      <motion.div
                        key={index}
                        variants={cardPop}
                        className="rounded-xl sm:rounded-2xl h-32 sm:h-[210px] overflow-hidden shadow-xl"
                      >
                        <img
                          src={src}
                          alt={`Web project preview ${index + 1}`}
                          className="object-cover w-full h-full transition duration-500 ease-in-out hover:scale-[1.03]"
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Image Grid 2 (Bottom Row) */}
                  <motion.div
                    className="grid grid-cols-2 gap-2 sm:gap-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {imageSources.slice(2, 4).map((src, index) => (
                      <motion.div
                        key={index + 2}
                        variants={cardPop}
                        className="rounded-xl sm:rounded-2xl h-32 sm:h-[210px] overflow-hidden shadow-xl"
                      >
                        <img
                          // Using a relevant image URL here. For example, for Pet Services in Udaipur, you might use
                          // a professional dog grooming or pet boarding facility image.
                          src={src}
                          alt={`Web project preview ${index + 3}`}
                          className="object-cover w-full h-full transition duration-500 ease-in-out hover:scale-[1.03]"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white px-4 sm:px-6 py-16 sm:py-24 text-gray-900">
          <div className="max-w-7xl mx-auto ">
            {/* Section Header */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center md:text-left max-w-4xl space-y-4 mb-12 sm:mb-20"
            >
              <motion.p
                variants={itemSlide}
                className="text-4xl lg:text-5xl font-bold mb-4 text-orange-500 "
              >
                Our Digital Solutions
              </motion.p>
              {/* <motion.h2 variants={itemSlide} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Comprehensive Digital Mastery
          </motion.h2> */}
              {/* <motion.p variants={itemSlide} className="text-base text-gray-500 leading-relaxed">
            From initial concept to deployment and beyond, we handle the full spectrum of digital product development.
          </motion.p> */}
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardSlide}
                  // Card Styling and Hover Effects
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 
                         hover:shadow-2xl hover:border-orange-500 hover:scale-[1.01]"
                >
                  {/* Icon (Animated) */}
                  <motion.div
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="p-3 bg-black rounded-xl inline-flex mb-4"
                  >
                    <service.icon className="w-6 h-6 text-orange-500" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>



        {/* Projects */}
        <section className="py-20 px-4 sm:px-6 bg-gray-50 font-sans">
          <div className="container max-w-7xl mx-auto ">
            {/* Header */}
            <div className="text-center md:text-left mb-16">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Projects that{" "}
                <span className="text-orange-600 rounded-lg px-2">
                  delivered results.
                </span>
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto md:mx-0">
                A look at some of the brands we've helped achieve measurable
                outcomes across digital strategy, development, and design.
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 p-0 sm:p-6 md:p-0">

              {initialProjects.map((project, idx) => (
                
                <a  href={project.link}
                      target="_blank"
                      rel="noopener noreferrer">
                <div key={idx} className="relative bg-black hover:border-none border-orange-500 rounded-xl h-70 md:h-96 pb-2 flex flex-col justify-end  transition-all duration-800 ease-in-out transform hover:scale-105 overflow-hidden  flex-shrink-0 " >
                  
                  <img
                    src={project.image}
                    alt={`brand-img-col1-${idx}`}
                    className="w-full h-full object-fill transition-all  "
                  />

                  <div className="  bg-black/70  p-4 backdrop-blur-sm rounded-xl inline-flex items-center justify-between shadow-2xl transition duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium uppercase text-orange-500 mb-1">
                        {project.category}
                      </span>
                      <h3 className="font-bold text-xl text-white">
                        {project.name}
                      </h3>
                    </div>

                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View case study for ${project.name}`}
                      className="w-12 h-12 flex-shrink-0 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                </a>


              ))}
            </div>

          </div>
        </section>

        {/* FAQ */}
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
                        className={`w-5 h-5 transition-transform text-yellow-500 ${openFaq === idx ? "rotate-180" : ""
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

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default WebDevelopmentPage;
