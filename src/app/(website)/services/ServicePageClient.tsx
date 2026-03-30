'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Code,
  Palette,
  TrendingUp,
  Video,
  Cloud,
  ArrowRight,
  Check,
  ExternalLink,
} from 'lucide-react';
import ContactSection from '@/components/ContactSection';


// Service data
const services = [
  {
    id: 1,
    title: 'Web & App Development',
    slug: 'web-app-development',
    icon: Code,
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/web_service_logo_rl7um1.png',
    description: 'Build modern, scalable, and high-performing web and mobile applications tailored to your business goals.',
    features: [
      'Website Design & Development',
      'E-Commerce Solutions',
      'Custom Web Applications',
      'Mobile App Development (iOS/Android)',
      'API Development & Integration',
      'Performance Optimization',
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Branding & Identity',
    slug: 'branding',
    icon: Palette,
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026415/branding_service_logo_fa5bam.png',
    description: 'Create a strong, memorable, and consistent brand identity that connects emotionally with your audience.',
    features: [
      'Logo Design & Concept Creation',
      'Brand Identity & Visual System',
      'Packaging & Product Graphics',
      'Print Design & Stationery',
      'Brand Guidelines',
      'UI/UX Design',
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: TrendingUp,
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/marketing_service_logo_abelyq.png',
    description: 'Grow your brand online through data-driven digital marketing campaigns and consistent creative execution.',
    features: [
      'SEO - On-page, Off-page, Technical',
      'Social Media Management',
      'Paid Advertising (Google, Facebook, Instagram)',
      'Influencer Marketing',
      'Video Marketing Campaigns',
      'Online Reputation Management',
    ],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 4,
    title: 'Graphics & Media Production',
    slug: 'media-production',
    icon: Video,
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026416/media_service_logo_usuh0b.png',
    description: 'Deliver high-quality graphics, videos, and media assets that make your brand visually impactful.',
    features: [
      'Graphic Design - Posters, Infographics',
      'Motion Graphics & Animations',
      'Video Editing & Production',
      'Product & Event Photography',
      'Creative Direction',
      'Content Planning',
    ],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    id: 5,
    title: 'SaaS Development',
    slug: 'web-app-development',
    icon: Cloud,
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026416/saas_service_logo_argw77.png',
    description: 'Build robust SaaS products from concept to launch — scalable, secure, and user-friendly platforms.',
    features: [
      'End-to-end SaaS Development',
      'MVP Creation for Startups',
      'Subscription & User Management',
      'Cloud Integration (AWS, Firebase)',
      'Analytics & Monitoring',
      'Multi-tenant Architecture',
    ],
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
  },
];

export default function ServicesPageclient() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching Works Page Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto pt-24 md:pt-32 lg:pt-40 xl:pt-48 pb-12 md:pb-16 px-4 sm:px-6 lg:px-16 relative"
      >
        {/* Large Heading - Fully Responsive */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-orange-500 font-medium text-base sm:text-lg md:text-xl lg:text-[24px] uppercase tracking-wider mb-2 border-b border-black/20 inline-block pb-1"
        >
          Our Services
        </motion.p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold text-black leading-[1.1] mt-4 uppercase">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="block"
          >
            Expertise
          </motion.span>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 py-3 sm:py-4 md:py-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-black/50 hidden sm:block sm:w-12 md:w-16"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex -space-x-2 sm:-space-x-3 opacity-70"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-orange-500/90" />
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-orange-500/90" />
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-orange-500/90" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="block"
            >
              Solutions
            </motion.span>
          </div>
        </h1>
      </motion.div>

      {/* Services Cards - Matching Testimonials Style */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center group cursor-pointer">
                  {/* Service Image Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-[400px] md:h-[500px] ${
                      index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                    } rounded-3xl overflow-hidden shadow-2xl`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain p-12 opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Service Number Badge */}
                    <div className="absolute top-8 right-8 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {service.id}
                    </div>
                  </motion.div>

                  {/* Service Details */}
                  <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <p className="text-orange-500 font-semibold text-sm md:text-base uppercase tracking-wider border-b border-orange-500/30 inline-block pb-1 mb-4">
                        0{service.id} — Service
                      </p>
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
                        {service.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="inline-flex items-center gap-3 text-black font-bold text-lg pt-4 group-hover:text-orange-500 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
