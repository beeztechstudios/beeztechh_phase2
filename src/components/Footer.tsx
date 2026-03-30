// components/layout/Footer.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, LucideIcon } from 'lucide-react';

// --- TypeScript Interface Definitions ---

// Type for navigation/service links
interface NavLink {
    name: string;
    href: string;
}

// Type for social media links
interface SocialLink {
    name: string;
    href: string;
    // 💡 LucideIcon is the correct type for icons imported from lucide-react
    icon: LucideIcon; 
}

// --- Data ---

const quickLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    // Incorporating a primary keyword 'pet services in Udaipur' (as an example)
    { name: 'Services', href: '/services' }, 
    { name: 'Portfolio', href: '/works' },
    // Incorporating a long-tail keyword 'book pet service appointment' (as an example)
    { name: 'Book-Call', href: '/book-call' } 
];

const services: NavLink[] = [
    { name: 'Graphic & Media Production', href: '/services/media-production' },
    { name: 'Web & App Development', href: '/services/web-development' },
    { name: 'Branding & Identity', href: '/services/branding' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
];

const socialLinks: SocialLink[] = [
    // { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/BeezTechStudio' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/beeztech/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/beeztech' },
    // { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
];

// --- Component ---

// 💡 Explicitly type the functional component as React.FC
const Footer: React.FC = () => {
    
    // --- SEO Integration Reminder ---
    // The address below already includes the Geographical Keyword: "Udaipur, Rajasthan, India"
    // The mail link uses the company name: "hello@Beeztech .studio"

    return (
        <footer className="bg-black relative text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* Company Info */}
                    <div className="space-y-6">
                        {/* Logo Space */}
                        <Link href="/" className="block mb-6">
                            <Image
                                src="/Logo_White.png"
                                alt="Beeztech  Studio - Creative Digital Agency"
                                width={200}
                                height={60}
                                className="w-52 h-auto"
                            />
                            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mt-2 rounded-full"></div>
                        </Link>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Designing, building, and branding digital experiences that inspire
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                                    aria-label={`Visit Beeztech  on ${social.name}`}
                                >
                                    {/* 💡 Rendering the LucideIcon component */}
                                    <social.icon className="w-5 h-5" /> 
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    {/* 💡 Use the Next.js Link component for internal navigation */}
                                    <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group" >
                                        
                                            
                                        
                                            <span className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                                            {link.name}
                                        
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    {/* 💡 Use the Next.js Link component for internal navigation */}
                                    <Link href={service.href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group" >
                                        
                                            
                                        
                                            <span className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                                            {service.name}
                                        
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            {/* Address with Geographical Keyword */}
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span>
                                    
                                    Udaipur, Rajasthan, India
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span>
                                    
                                    Satellite, Ahmedabad, Gujrat, India
                                </span>
                            </li>
                            {/* Phone Number */}
                            {/* Email Address */}
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <a href="mailto:hello@Beeztech.studio" className="hover:text-orange-500 transition-colors">
                                    hello@beeztech.studio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-800"></div>

            {/* Bottom Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>
                        ©2025 Beeztech . All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* 💡 Use Link for Policy pages */}
                        <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors" >
                             
                                Privacy Policy
                            
                        </Link>
                       
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
