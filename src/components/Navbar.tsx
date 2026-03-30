// components/layout/Navbar.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
// 💡 Use Link from next/link for internal routing in Next.js
import Link from "next/link";
import Image from "next/image";

// --- TypeScript Interface Definition ---

interface Service {
  title: string;
  icon: string;
  image: string;
  link: string;
}

// --- Component ---

export default function Navbar() {
  // 💡 Explicitly define state types
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  // Explicitly define activeLink type
  const [activeLink, setActiveLink] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState(0);

  // 💡 Explicitly define useRef types
  const servicesRef = useRef<HTMLDivElement>(null);
  // mobileMenuRef is not strictly needed for functionality but keeping the pattern
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // --- Services Data ---
  // 💡 Apply the Service interface
  const services: Service[] = [
    {
      title: "Branding",
      icon: "/icons/brandingNavIcon.svg",
      image: "/brandingNav.png",
      link: "/services/branding",
    },
    {
      title: "Web Development",
      icon: "/icons/developmentNavIcon.svg",
      image: "/developmentNav.png",
      link: "/services/web-app-development",
    },
    {
      title: "Digital Marketing",
      icon: "/icons/marketingNavIcon.svg",
      image: "/marketingNav.png",
      link: "/services/digital-marketing",
    },
  ];

  useEffect(() => {
    // 💡 Event function types are important in TypeScript
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Check if the services dropdown is open AND the click target is outside the dropdown container
      if (
        isServicesOpen &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]); // 💡 Added isServicesOpen to dependencies to correctly close the menu

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const mobiletoggleServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Close desktop dropdown when mobile menu opens
  };

  const handleMobileNavLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleMobileServiceClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);

    // Optional smooth scroll to top after closing
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <nav className="hidden md:block fixed top-[40px] left-1/2 -translate-x-1/2 w-full max-w-[800px] z-80">
        <div className="bg-[#ffffffb7] backdrop-blur-[20px] border-[1px] border-[#0707071A] rounded-[90px] px-2 py-2 ">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <div className="w-[120px] lg:w-[124px] ">
              <Link href="/" onClick={() => setActiveLink("")}>
                <Image
                  src="/Logo_Black.png"
                  alt="Beeztech  - Creative Digital Agency in Udaipur"
                  width={160}
                  height={50}
                  className="w-full h-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="flex items-center gap-[12px]  lg:gap-[16px] ">
              {/* Services Dropdown */}
              <div
                ref={servicesRef}
                className="relative flex justify-center items-center gap-1"
              >
                <button
                  onClick={toggleServices}
                  className={`text-[#070707] font-normal leading-[100%] text-[14px] font-resonate ${
                    isServicesOpen || activeLink === "services"
                      ? "text-orange-500 font-medium"
                      : "text-[#070707] hover:text-orange-500"
                  }`}
                >
                  Expertises
                </button>
                <img
                  src="/icons/downArrow.svg"
                  alt="downArrow"
                  className={`ml-1 w-[8.7px] h-[10.5px] transition-transform duration-200 ${isServicesOpen ? "rotate-180" : "rotate-0"}`}
                />

                {isServicesOpen && (
                  <div className="absolute top-full bg-[#FFFFFF]/100 border-[1px] backdrop-blur-[20px] border-[#0707071A] rounded-[16px] px-[5px] -right-84 mt-8 w-[520px] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className=" backdrop-blur-2xl  rounded-[16px] py-[5px] ">
                      <div className="flex justify-between   gap-4">
                        {/* LEFT SIDE (List) */}
                        <div className="flex flex-col w-full py-[24px] mx-[20px]  gap-2">
                          {services.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.link}
                              onMouseEnter={() => setActiveIndex(idx)}
                              onClick={() => {
                                setIsServicesOpen(false);
                                setActiveLink("services");
                              }}
                              className={`flex items-center  border-b-[1px] border-[#0707070F] justify-start gap-1 py-[10px] transition-all duration-300 cursor-pointer
                  ${
                    activeIndex === idx
                      ? "bg-white  border-gray-200 text-black"
                      : "text-gray-400"
                  }`}
                            >
                              <img
                                src={service.icon}
                                alt="arrow-up-right"
                                className="w-[20px] h-[20px]"
                              />
                              <span className="font-resonate text-[14px] leading-[100%]">
                                {service.title}
                              </span>

                              <img
                                src="/icons/upRightArrowBlack.svg"
                                alt="arrow-up-right"
                                className=" ml-1 w-[10px] h-[10px]"
                              />
                            </Link>
                          ))}
                        </div>

                        {/* RIGHT SIDE (Image Preview) */}
                        <div className="absolute right-0 h-[185px]  w-[280px]  rounded-[11px] overflow-hidden">
                          <Image
                            src={services[activeIndex]?.image}
                            alt="preview"
                            fill
                            className="object-cover transition-all duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {["Case Studies (24)", "Beeztech Studio"].map((linkName) => (
                <Link
                  key={linkName}
                  href={`/${linkName}`}
                  onClick={() => setActiveLink(linkName)}
                  className={`text-[#070707] font-normal leading-[100%] text-[14px] font-resonate ${
                    activeLink === linkName
                      ? "text-orange-500 font-medium"
                      : "text-[#070707] hover:text-orange-500"
                  }`}
                >
                  {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
                </Link>
              ))}
            </div>
            {/* Book Call Button */}
            <div className="flex items-center gap-[2px] bg-[#070707] px-[15px] py-[11px] rounded-[97px]">
              <Link
                href="/book-call"
                className=" text-[#FFFFFF] font-resonate font-normal text-[14px] leading-[100%]"
              >
                Book a 15-min call
              </Link>
              <img
                src="/icons/upRightArrow.svg"
                alt="upRightArrow"
                className="w-[16px] h-[14px]"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Navbar --- */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-80 bg-white/70 backdrop-blur-xl shadow-lg">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-[140px]">
              <Link href="/" onClick={() => setActiveLink("")}>
                <Image
                  src="/Logo_Black.png"
                  alt="Beeztech  - Creative Digital Agency in Udaipur"
                  width={140}
                  height={45}
                  className="w-full h-auto"
                  priority
                />
              </Link>
            </div>

            {/* Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 p-2 border rounded-lg hover:bg-gray-50"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="bg-white/95 backdrop-blur-xl border-t border-gray-200 px-4 py-4 space-y-4 animate-in slide-in-from-top-1 duration-200 overflow-y-auto max-h-[calc(100vh-60px)]" // Adjusted max-height
          >
            {/* Services Dropdown */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={mobiletoggleServices}
                className={`flex items-center justify-between w-full text-lg font-medium transition-colors py-2 ${
                  isMobileServicesOpen
                    ? "text-orange-500 font-bold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="mt-3 space-y-3">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.link}
                      onClick={() => handleMobileServiceClick("services")}
                      className="block p-3 rounded-xl bg-orange-50 border border-orange-200 transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl flex-shrink-0 relative w-16 h-16">
                          <Image
                            src={service.image}
                            alt={`${service.title} - Beeztech  Services`}
                            fill
                            className="rounded-lg object-contain shadow-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-gray-900 font-bold text-base mb-1">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {["works", "about", "blogs"].map((linkName) => (
              <Link
                key={linkName}
                href={`/${linkName}`}
                onClick={() => handleMobileNavLinkClick(linkName)}
                className={`block text-lg font-medium py-2 rounded-lg transition-colors ${
                  activeLink === linkName
                    ? "text-orange-500 font-bold bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                }`}
              >
                {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
              </Link>
            ))}
            {/* Book Call Button (Mobile) */}
            <Link
              href="/book-call"
              className="mt-6 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 w-full"
              onClick={() => handleMobileNavLinkClick("book-call")}
            >
              Book Free Call <Phone className="w-5 h-5" />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
