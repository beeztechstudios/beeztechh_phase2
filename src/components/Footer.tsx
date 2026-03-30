"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const [email, setEmail] = useState("");
  const avatarsRef = useRef([]);

  const handleMouseEnter = () => {
  const tl = gsap.timeline();

  // Step 1: Lift up (ALL together)
  tl.to(avatarsRef.current, {
    y: -5,
    scale: 1.05,
    duration: 0.25,
    ease: "power2.out",
  });

  // Step 2: Spread in curve (staggered)
  tl.to(
    avatarsRef.current,
    {
      x: (i) => i * 42,
      y: (i) => -35 - Math.sin(i * 0.8) * 20, // curve effect 🔥
      rotate: (i) => i * 8,
      scale: 1.5,
      duration: 0.35,
      ease: "power3.out",
      stagger: 0.05,
    },
    "-=0.1" // overlap for smoothness
  );
};

const handleMouseLeave = () => {
  gsap.to(avatarsRef.current, {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    duration: 0.4,
    ease: "power3.out",
    stagger: 0.05,
  });
};

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-100 font-resonate">
      {/* ── Top Section ── */}
      <div className="max-w-[1300px]  mx-auto px-6 lg:px-10 pt-12 pb-10">
        <div className="flex flex-col  md:flex-row items-start md:items-center justify-between gap-8">
          {/* CTA Pill */}
          <div
            className="flex items-center gap-4 bg-white border border-[#0707071A] rounded-full px-1 py-4 w-fit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Avatar Stack */}
            <div className="relative flex items-center">
              {["/kishanCta.svg", "/abhishekCta.svg", "/aadarshCta.svg"].map(
                (src, i) => (
                  <div
                    key={i}
                    ref={(el) => (avatarsRef.current[i] = el)}
                    className={`relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md
          ${i !== 0 ? "-ml-5" : ""}
        `}
                    style={{ zIndex: 10 - i }}
                  >
                    <Image
                      src={src}
                      alt="avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                ),
              )}
            </div>

            {/* Text */}
            <p className="text-sm border-l border-[#0707071A] pl-[16px] text-[#070707] font-resonate text-[20px] leading-[27px]">
              Ready to build 🐝
              <br />
              <span className="font-medium">something amazing</span> with
              Beeztech?
            </p>

            {/* Button */}
            <div className="flex items-center gap-[2px] bg-[#070707] px-[15px] py-[11px] rounded-[97px]">
              <Link href="/book-call" className="text-white text-[14px]">
                Book a 15-min call
              </Link>
              <img
                src="/icons/upRightArrow.svg"
                className="w-[16px] h-[14px]"
              />
            </div>
          </div>

          {/* Big Wordmark */}
          <img
            src="/beeztechFooter.svg"
            alt="Beeztech"
            className="w-[529px] h-[108px]"
          />
        </div>
      </div>

      {/* ── Middle Section ── */}
      <div className="max-w-[1300px]  mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[140px_120px_1.5fr_1fr] gap-10 lg:gap-6">
          {/* Company */}
          <div>
            <p className="font-resonate text-[18px] leading-[140%] font-medium  mb-3">
              Company
            </p>
            <ul className="space-y-[12px]">
              {[
                { label: "Beeztech Studio", href: "/" },
                { label: "Case Studies", href: "/works" },
                { label: "Contact", href: "/book-call" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-resonate text-[14px] leading-[100%] font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <p className="font-resonate text-[18px] leading-[140%] font-medium  mb-3">
              Learn
            </p>
            <ul className="space-y-[12px]">
              {[
                { label: "Blog", href: "/blogs" },
                { label: "Careers", href: "/careers" },
                { label: "Clients", href: "/works" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-resonate text-[14px] leading-[100%] font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Email CTA */}
          <div className="col-span-2 w-full  md:col-span-2  lg:col-span-1">
            {/* Service links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
              {[
                { label: "Branding", href: "/services/branding" },
                { label: "Development", href: "/services/web-app-development" },
                {
                  label: "Marketing & Advertising",
                  href: "/services/digital-marketing",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-resonate font-semibold text-[18px] tracking-[0%] leading-[130%] transition-colors flex items-center gap-1"
                >
                  {item.label}{" "}
                  <img
                    src="/icons/upRightArrowBlack.svg"
                    alt="upRightArrow"
                    className="w-[8px] h-[8px]"
                  />
                </Link>
              ))}
            </div>

            {/* Big email */}
            <a
              href="mailto:hello@beeztech.studio"
              className="block text-[36px] font-resonate font-semibold  leading-[48px] tracking-[-1.2%] mb-6 break-all"
            >
              hello@beeztech.studio
            </a>

            {/* Talk branding CTA */}
            <div className="flex items-center gap-[2px] w-fit bg-[#070707] px-[15px] py-[11px] rounded-[97px]">
              <Link
                href="/book-call"
                className=" text-[#FFFFFF] font-resonate font-normal text-[14px] leading-[100%]"
              >
                Let&apos;s talk branding.
              </Link>
              <img
                src="/icons/upRightArrow.svg"
                alt="upRightArrow"
                className="w-[16px] h-[14px]"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 w-fit mx-auto lg:col-span-1 ">
            <p className="text-[#070707] font-resonate font-medium text-[18px] leading-[140%] mb-4 max-w-[400px]">
              Get valuable strategy, culture, <br /> and brand insights straight
              to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex items-center border border-[#0707071A] rounded-full px-4 py-2.5 mb-3 max-w-[320px] focus-within:border-black transition-colors"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                className="flex-1 bg-transparent text-sm text-gray-800 placeholder-[#07070799] outline-none"
                required
              />
              <button
                type="submit"
                className="flex-shrink-0 w-7 h-7 hover:scale-110  bg-black rounded-full flex items-center justify-center transition-colors ml-2"
                aria-label="Subscribe"
              >
                <img
                  src="/icons/upRightArrow.svg"
                  alt="upRightArrow"
                  className="w-[16px] h-[16px] cursor-pointer"
                />
              </button>
            </form>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[300px]">
              By signing up to receive emails from Beeztech, you agree to our{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-gray-600 transition-colors"
              >
                Privacy Policy
              </Link>
              . We treat your info responsibly. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[#070707] font-resonate text-[14px] leading-[100%] order-2 sm:order-1">
            © 2025 Beeztech Studio — All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <a
              href="https://instagram.com/beeztech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#070707] font-resonate text-[14px] leading-[100%]"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/beeztech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#070707] font-resonate text-[14px] leading-[100%]"
            >
              LinkedIn
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-6 order-3">
            <Link
              href="/privacy-policy"
              className="text-[#070707] font-resonate text-[14px] leading-[100%]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[#070707] font-resonate text-[14px] leading-[100%]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
