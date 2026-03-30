"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Users,
  Video,
  ShieldCheck,
  CheckCircle,
  ChevronDown,
  Phone,
  Star,
  Search,
  Share2,
  PenTool,
  Code,
  ShoppingCart,
  BarChart,
  Megaphone,
  Mail,
  Zap,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

const DigitalMarketingPage = () => {
  const [activeTab, setActiveTab] = useState("Graphic");
  const [openFaq, setOpenFaq] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const processRef = useRef(null);

  // Horizontal scroll effect for process section
  useEffect(() => {
    const handleScroll = () => {
      if (processRef.current) {
        const element = processRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scroll progress when section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = Math.max(
            0,
            Math.min(1, (windowHeight - rect.top) / windowHeight)
          );
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO (Search Engine Optimization)",
      description:
        "Improve visibility and organic reach with data-driven on-page, off-page, and technical SEO strategies.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Link Building",
        "Technical SEO",
      ],
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description:
        "Build a strong brand presence through creative content, consistent posting, and community engagement.",
      features: [
        "Strategy & Planning",
        "Creative Design",
        "Content Scheduling",
        "Analytics Reporting",
      ],
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Paid Advertising (PPC)",
      description:
        "Maximize ROI through targeted ad campaigns across Google, Meta, LinkedIn, and YouTube.",
      features: [
        "Google Ads",
        "Facebook & Instagram Ads",
        "LinkedIn Ads",
        "YouTube Campaigns",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Marketing & Collaborations",
      description:
        "Leverage trusted voices to amplify your brand reach and credibility in niche markets.",
      features: [
        "Influencer Outreach",
        "Partnership Strategy",
        "Campaign Management",
        "Performance Tracking",
      ],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Marketing",
      description:
        "Engage and convert audiences through visually powerful storytelling and ad-ready video content.",
      features: [
        "Short Reels",
        "Explainer Videos",
        "Ad Campaign Videos",
        "Product Showcases",
      ],
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Online Reputation & Digital PR",
      description:
        "Protect and enhance your brand’s online image through proactive reputation management.",
      features: [
        "Review Monitoring",
        "Crisis Management",
        "Press Releases",
        "Digital PR Campaigns",
      ],
    },
  ];

  const tools = {
    SEO: [
      {
        name: "Google Trends",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171810/731eac2a-1586-46f9-9a90-b2ea6d414bc9_426x366_pk1whp.png",
      },
      {
        name: "Ahrefs",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAACUCAMAAAC9QNUEAAAAnFBMVEUAAAD/////iADExMQvLy//jAD09PTW1tbT09P0gQCRkZGMjIw+Pj5aWlobGxv/jwAvGADEawDf398jIyPKysqKSgBubm6srKx5eXlFJADbdwBVVVUMDAwpKSmioqLm5uY4HwC6urqDg4OamprwhABKSkpQLAA2NjYmFACfVgATCgBxPQBpOABaMQBjY2OoWwAdDwDPcAB7QgC2ZQC8goI+AAAFYUlEQVR4nO2a25aiOhBAQQS8ICqgoKKAirfutkfn///tiJiQQILBRs6sXrXfhFzYgqlKoSQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwD+MbyKanKuZ+e54VkoQvXcef+G5jm5lKPZ7J0T05Qf6W6eJV5pMYy3fOiEGC3beOUusy3n03yS4VAp+v0twWvT7XYKdXy7oM/x+1SITY6uoj/H8901I0oRgDz+WDcU+kiYEXTTHqu6RT4cRn7RJFujtNgmdSfltJuTPyI4H52nCeRC36cvAQWKzRD332fht1PHedV9JMPwe88kJagrFgBoojhQWLm5wXkU6ylU0S1l5pLuDFxbc01k/7NYrxcqSHC1w3HWF53g2H6o8WjlBGs2jBhqwWwXodBTk+3f6We9iGiPL6Xfj6fkMLul6riCotnh0ywWntGDxOhKs9GyPeTb7UbME7z/HHuNEMrmwYTOCLvMc1ucLLjgdZVk0hDQiuOFepuKXC+af6wzRvVsTgjHzTDqIVyrIGfQ+sOAtbELQYZ5JicwyQf6tlwPBX+FtFS0gKNiPFwmDZ4ID4jnrrDzP6xNbI23AFbytolH2yXE3mxWxFGt9jlGOw3WS5zjkCAYuCZ7KzAlqJB1yhdFxeM+u3KMFe9TV4XuPqxfZt/V6zjPjCdKpGk9Qy+0B2vgqdYNx6a4vIEjEXPx1udKr7H4oaNDD4e9cIy9+j3o7toCgtciGQxmT4CP6fkEPtQuoJBI1D5bVBKXl0k5Yvl5UrFlwjdpZ1GG80OwFBAN6xX6R05/bziIMw496BfFS71CH8W9JRFCO9j/b/IZfH5Pj9/gy73ZVfph4SdDEJta6l9HH114mmMWTwO173nSwMF4oY4wm35etqia7ivJA/5KgHcnllAmucm0Dy1Hc1XohVeB0nLfyZnUKsgqewoJTZvZw2xLSzcoYjbmZ2j8gKHFzUdHXCKPt8H8W1Nplgh63XyC2qx8z/NRGBa2yOEhlozmEMpkZ+eO7rTNDtdXdzhsVdMxSQanHysMTdCPflME3FlSH28v3cXL9+NzVGwezVTRQnCKddVkumhB7rsUS1ESCP75Zw0sYHk7pwXozmUxQkewiyzSAlwgmFUnDOK9dsraWsH7uN9qi+3ckjtYr6ONAT2cyNKWC5Ghe9pZGIFR8IcH57m2CRFW+BkGJSN82zwU/H4LqZUQc/el+kJtsl+T/FQTxeFUEx3+Io3/ftF0qWxXYgvajYO+R9Rf8qvTVOziuNw4SRQYycrWDx1833JIwEetp/eO2Pv1MsNX9eBwZXbtZaKxH0MaBkCz26/RlsgXb6DC5H8TDCWzp8SKjzq+7MNx9TqgiYj2CRNEp6C32pu+b+0GEj01LBE28ZHamhu1Lpr0fbHCsEAgTByR4S8/ml9tucEhtK2oSJLcEgRNFkeJk1b9HMeLZhlfWOkquZ+7lD5sLmagVNk01CTKLngg314QWjEp6WiK7wglzI4hM6xLkv0Eplu5F9oMpYi8nugxDdfJXrVWwsDEvXiUvDjKzUOqrecLXNm+obicoB69NUOLtKBwU+3mCrP8HpYjWfa85w+H8egv1dQuahT/a3VFwKZ+byfBufiRcFv0aZ2W01rB7nElJLnNHTVvgZJIubOYEz/hzzJjFXxTfgQb9rEKGH8VC9PZYT6m1rlD2Pe3GSa0w2ezOr4f7oUOYkjawjQf0PyPQ0ccNM/FndgXTb0/J1/SBOyBrDnvUuVgVNBf0flDTN4vqVe1wNgtPlXu9gGHEcfxCFbed9IuNfXU1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjnP04nduaUL41RAAAAAElFTkSuQmCC",
      },
      {
        name: "Google Analytics",
        icon: "data:image/png;base64,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",
      },
      {
        name: "Google Page Speed",
        icon: "https://cdn.worldvectorlogo.com/logos/google-pagespeed-insights-icon-2021-.svg",
      },
      {
        name: "Google Keyword Planner",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/images_d9cg0d.png",
      },
    ],
    "Social Media": [
      {
        name: "Hootsuite",
        icon: "data:image/png;base64,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",
      },
      {
        name: "Business Suite ",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/images_ntvfcn.jpg",
      },
      {
        name: "Buffer",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171339/buffer-icon_id537y.png",
      },
      {
        name: "ChatGpt",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/9bde60a7b4539b203b0048c26ccb9f61_l1aiqv.jpg",
      },
      {
        name: "Canva",
        icon: "data:image/png;base64,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",
      },
    ],
    Graphic: [
      {
        name: "Photoshop",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171339/photoshop_ffrl9d.png",
      },
      {
        name: "Illustrator",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171339/Adobe_Illustrator_CC_icon.svg_ndq4wj.png",
      },
      {
        name: "Premiere Pro",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171339/photoshop_ffrl9d.png",
      },
      {
        name: "After Effects",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171339/Adobe_After_Effects_CC_icon.svg_s9i7gh.png",
      },
      {
        name: "Figma",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/download_wsdc2m.jpg",
      },
    ],
    Content: [
      {
        name: "Ubersuggest ",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/images_2_agp4hp.png",
      },
      {
        name: "Semrush ",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/images_1_hmgqwf.png",
      },
      {
        name: "Grammarly",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/download_1_phxnun.png",
      },
      {
        name: "Hemingway",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/download_xceudr.png",
      },
      {
        name: "Copyscape",
        icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760171338/copyscape_nxeaf2.png",
      },
    ],
  };

  const process = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We dive deep into your business goals, target audience, and market landscape to craft a winning strategy.",
    },
    {
      number: "02",
      title: "Strategy Planning",
      description:
        "Develop a comprehensive marketing roadmap with clear objectives, KPIs, and actionable tactics.",
    },
    {
      number: "03",
      title: "Creative Development",
      description:
        "Our team creates compelling content, designs, and campaigns that resonate with your audience.",
    },
    {
      number: "04",
      title: "Campaign Launch",
      description:
        "Execute campaigns across multiple channels with precision timing and perfect coordination.",
    },
    {
      number: "05",
      title: "Performance Monitoring",
      description:
        "Track real-time metrics and gather insights to understand campaign effectiveness.",
    },
    {
      number: "06",
      title: "Optimization",
      description:
        "Continuously refine and improve campaigns based on data-driven insights and testing.",
    },
    {
      number: "07",
      title: "Reporting & Analysis",
      description:
        "Receive detailed reports with actionable recommendations for sustained growth.",
    },
    {
      number: "08",
      title: "Scale & Grow",
      description:
        "Expand successful strategies and explore new opportunities for exponential growth.",
    },
  ];

  const whyUs = [
    {
      icon: "👥",
      title: "Experienced Team",
      description:
        "We're a group of experienced marketing professionals who understand digital marketing like the back of our hands.",
    },
    {
      icon: "😊",
      title: "Satisfied Clients",
      description:
        "10+ satisfied clients, 20+ successful campaigns, and multiple successful branding projects are just a few reasons why our clients love us.",
    },
    {
      icon: "📅",
      title: "Industry Relevant",
      description:
        "We're a specialized digital marketing company with knowledge of everyday growth in the digital marketing world.",
    },
    {
      icon: "🎯",
      title: "Custom Solutions",
      description:
        "Get access to tailored digital marketing consulting from a company that matches your business goals and budgets.",
    },
  ];

  const faqs = [
    {
      q: "What digital marketing services do you offer?",
      a: "We offer comprehensive digital marketing services including SEO, social media marketing, content marketing, PPC advertising, email marketing, web development, and analytics.",
    },
    {
      q: "How long does it take to see results?",
      a: "Results vary by service. SEO typically takes 3-6 months, while PPC and social media can show results within weeks. We provide monthly reports to track progress.",
    },

    {
      q: "What makes your agency different?",
      a: "We focus on data-driven strategies, transparent communication, and long-term partnerships. Our team stays ahead of industry trends to deliver cutting-edge solutions.",
    },
    {
      q: "How do you measure success?",
      a: "We track key metrics like traffic, conversions, ROI, engagement rates, and other KPIs specific to your goals. You'll receive detailed monthly reports.",
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

  const cardPop = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };
  const imageSources = [
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F54514%2Ffusion-ai-wS70RFMTxlA0bMlp8ouZoqCOQjRpFw&w=3840&q=100",

    "/webimg1.jpg",
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49749%2Foptimistic-7QAhEhFXH72T4u3Djr8Qk1z7BLNJVf&w=3840&q=100",
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51012%2Fxtract-xqzXUvtiwNfRpXdCNOSbHGhjlIXzdS&w=3840&q=100",
  ];
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
  const itemSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };
  return (
    <>
      
      <div className="bg-white mt-8 md:-mt-1 min-h-screen ">
        {/* Hero Section */}

        <section className="bg-[white] px-4 sm:px-6 text-gray-900 min-h-screen flex items-center py-16 sm:py-24">
          <div className="max-w-7xl mx-auto w-full">
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
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  DIGITAL MARKETING SERVICES
                </motion.div>

                <motion.h1
                  variants={itemSlide}
                  className="text-4xl sm:text-5xl lg:text-6xl  font-extrabold mb-4 leading-tight sm:leading-tight lg:leading-tight"
                >
                    <span className="block">Grow Your  </span>
                    <span className="block">Business with </span>{" "}
                    <span className="block">Smart Marketing</span>
                </motion.h1>

                <motion.p
                  variants={itemSlide}
                  className="text-normal sm:text-xl text-gray-600 max-w-xl"
                >
                 From SEO and performance ads to social media and content marketing, Beeztech help your business achieve measurable growth across every channel.
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
              <motion.div variants={cardPop} className=" lg:pt-0 bg-pink-300 ">
                <img src="/marketing_hero_section_image.jpeg" alt="" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-2 md:py-20 px-4 sm:px-6 bg-white">
          <div className="container max-w-7xl   mx-auto ">
            <div className="text-left  mb-16">
              <span className="text-orange-500  font-semibold text-sm md:text-lg uppercase tracking-wider">
                OUR SERVICES
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-4 mb-6">
                Complete Digital Marketing Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600  leading-relaxed max-w-3xl ">
                From strategy to execution, we provide everything you need to
                succeed online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all group"
                >
                  <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20  bg-gray-50">
          <div className="container px-4 sm:px-6 max-w-7xl mx-auto ">
            <div className="text-left mb-16">
              <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                OUR TOOLS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-4 mb-6">
                Top Tools For Digital Marketing
              </h2>
              <p className="text-lg sm:text-xl text-gray-600  leading-relaxed max-w-3xl ">
                From strategy to execution, we provide everything you need to
                succeed online.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {Object.keys(tools).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tool Icons */}
            <div className="flex justify-center gap-2 md:gap-4 flex-wrap mb-8">
              {tools[activeTab].map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 w-28 h-28 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
                >
                  {tool.color ? (
                    <div
                      className={`${tool.color} w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {tool.icon}
                    </div>
                  ) : (
                    <img src={tool.icon} alt="" className="text-4xl" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* How we work */}
        <section ref={processRef} className="py-20  bg-white overflow-hidden">
          <div className="container px-4 sm:px-6 mx-auto max-w-7xl mb-12">
            <div className="text-left">
              <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                OUR PROCESS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-4 mb-6">
                How We Work
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
                A systematic approach to delivering exceptional results at every
                stage.
              </p>
            </div>
          </div>

          {/* Horizontal Scroll Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-6 pb-4">
              {process.map((step, idx) => (
                <div
                  key={idx}
                  className="snap-center flex-shrink-0 w-80 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ease-out"
                >
                  <div className="text-6xl font-bold text-orange-500 opacity-20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-0 items-start">
              <div className="space-y-4  lg:space-y-6 ">
                <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                  Why Us
                </span>

                <motion.h1
                  variants={itemSlide}
                  className="text-4xl sm:text-5xl lg:text-[62px] font-bold mb-4 leading-tight sm:leading-tight lg:leading-tight"
                >
                  Why Choose Beeztech,{" "}
                  {/* Note: Incorporating the concept of professional service and user experience for SEO relevance */}
                  <span className="text-gray-500">as Marketing Firm </span>
                </motion.h1>

                <motion.p
                  variants={itemSlide}
                  className="text-base sm:text-xl text-gray-600 max-w-xl"
                >
                  We combine creativity, technology, and data to grow your brand
                  online. From lead generation to brand visibility, we deliver
                  strategies that truly work.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {whyUs.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <motion.section
          className="py-20 bg-white"
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
                  Everything you need to know about our digital-marketing and
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
                        Book a free discovery call with team
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

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default DigitalMarketingPage;
