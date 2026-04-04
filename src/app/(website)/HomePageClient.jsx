"use client";

import { useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Portfolio from "@/components/Portfolio";
import HeroSection from "@/components/HeroSection";
import Slider from "@/components/Slider";
import ServicesSection from "@/components/ServicesSectionHome";
import AboutUsSection from "@/components/AboutUsSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamData = [
  {
    name: "Kishan",
    role: "Co-Founder & Visionary Leader",
    description:
      "Driving the company's vision and shaping the future of innovation.",
    image: "/kishanImg.png",
  },
  {
    name: "Abhishek",
    role: "Co-Founder & Business Strategy Lead",
    description:
      "Building growth strategies and strong partnerships for long-term success.",
    image: "/abhishekImg.png",
  },
  {
    name: "Aadarsh",
    role: "Co-Founder & Technology Lead",
    description:
      "Leading technology development and delivering scalable digital solutions.",
    image: "/aadarshImg.png",
  },
];

export default function HomePageClient() {
  const servicesRef = useRef(null);
  const leadershipRef = useRef(null);
  const teamMembersRef = useRef([]);

  useEffect(() => {
    // Leadership Section Animations
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".leadership-header", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".leadership-header",
          start: "top 85%",
        },
      });

      // Team Members Stagger
      gsap.from(teamMembersRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.9,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
        },
      });
    }, leadershipRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-transparent">
      {/* Leadership Section */}
      <section className="relative py-32 px-6 lg:px-12 bg-transparent">
        <div className="max-w-[1500px] mx-auto text-center">
          {/* Header */}
          <div className="leadership-header mb-24">
            <p className="text-[#070707] font-resonate  font-normal md:text-[14px] lg:text-[18px]  mb-6 leading-[100%]">
              The minds behind our innovation.
            </p>
            <h2 className="text-[24px] md:text-[36px] lg:text-[52px] leading-[48px]  text-[#070707] font-stk-bureau tracking-[-1.2%]">
              Leadership{" "}
              <span className="font-semibold  leading-[48px]   tracking-[-1.2%] font-resonate ">
                team
              </span>
            </h2>
          </div>

          {/* Team Grid */}
          <div className=" flex mx-auto flex-wrap justify-center gap-4 md:gap-8 lg:gap-14 items-start ">
            {teamData.map((member, i) => (
              <div
                key={i}
                ref={(el) => (teamMembersRef.current[i] = el)}
                className="flex flex-col items-center  group"
              >
                <div className="relative w-full aspect-[5/6] gap-4 md:gap-8 lg:gap-10  max-w-[282px] mb-10 transition-all duration-700 ease-out group-hover:scale-[1.03]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                </div>

                {/* Member Details */}
                <div className="text-center max-w-[280px]">
                  <h3 className="text-lg md:text-xl font-semibold font-resonate text-[#070707] mb-3 ">
                    {member.role}
                  </h3>
                  <p className="text-[#07070766] max-w-[230px] mx-auto  font-resonate text-[15px] md:text-[14px] lg:text-[16px] leading-[130%]">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ask AI Section */}
          <div className=" mt-[78px] flex flex-col md:flex-row items-center justify-center gap-3 w-fit mx-auto ">
            <span className="text-md md:text-lg lg:text-[20px] leading-[140%] font-normal font-resonate text-[#070707]">
              Ask AI about Beeztech
            </span>
            <div className="flex gap-3 items-center">
              {/* ChatGPT */}
              <div className="hover:scale-110 transition-all cursor-pointer ">
                <img
                  src="/aiIcon1.svg"
                  className="md:w-11 md:h-11 w-7 h-7 lg:w-14 lg:h-14 "
                  alt="ChatGPT"
                />
              </div>
              {/* Midjourney (Cyan) */}
              <div className="hover:scale-110 transition-all cursor-pointer ">
                <img
                  src="/aiIcon2.svg"
                  className="md:w-11 md:h-11 w-7 h-7 lg:w-14 lg:h-14 "
                  alt="Logo"
                />
              </div>
              {/* Other */}
              <div className="hover:scale-110 transition-all cursor-pointer ">
                <img
                  src="/aiIcon3.svg"
                  className="md:w-11 md:h-11 w-7 h-7 lg:w-14 lg:h-14 "
                  alt="Logo"
                />
              </div>
              {/* Other */}
              <div className="hover:scale-110 transition-all cursor-pointer">
                <img
                  src="/aiIcon4.svg"
                  className="md:w-11 md:h-11 w-7 h-7 lg:w-14 lg:h-14 "
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
