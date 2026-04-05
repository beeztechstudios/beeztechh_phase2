"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollTextAnimation from "@/components/ScrollTextAnimation";
import Link from "next/link";
import RotatingBadge from "../../components/RotatingBadge";
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

const advantageData = [
  {
    feature: "Strategic approach",
    beeztech: "Clear strategy & planning before every project",
    others: "Focus mainly on project delivery",
  },
  {
    feature: "Design quality",
    beeztech: "Research-driven design and development",
    others: "Standard design approach",
  },
  {
    feature: "Team expertise",
    beeztech: "Skilled team across\ndesign, development & branding",
    others: "Limited specialization",
  },
  {
    feature: "Delivery speed",
    beeztech: "Fast & structured delivery process",
    others: "Limited flexibility",
  },
  {
    feature: "Scalable solutions",
    beeztech: "Easily scalable solutions for growing businesses",
    others: "Slower processes",
  },
  {
    feature: "Ongoing support",
    beeztech: "Dedicated support & long-term partnership",
    others: "Limited support",
  },
];

const outcomesData = [
  { icon: "/brandingOutcomes/trusted.svg", title: "Trusted 50+ brand" },
  { icon: "/brandingOutcomes/brandRecog.svg", title: "Brand recognition" },
  {
    icon: "/brandingOutcomes/premiumPerception.svg",
    title: "Premium perception",
  },
  { icon: "/brandingOutcomes/highConversion.svg", title: "Higher conversions" },
  {
    icon: "/brandingOutcomes/lowerMarketingCost.svg",
    title: "Lower marketing cost",
  },
];

export default function HomePageClient() {
  const pageRef = useRef(null);
  const outcomesRef = useRef([]);
  const avatarsRef = useRef([]);
  const servicesRef = useRef(null);
  const leadershipRef = useRef(null);
  const advantageRef = useRef(null);
  const teamMembersRef = useRef([]);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();
    tl.to(avatarsRef.current, {
      y: -5,
      scale: 1.05,
      duration: 0.25,
      ease: "power2.out",
    });
    tl.to(
      avatarsRef.current,
      {
        x: (i) => i * 42,
        y: (i) => -35 - Math.sin(i * 0.8) * 20,
        rotate: (i) => i * 8,
        scale: 1.5,
        duration: 0.35,
        ease: "power3.out",
        stagger: 0.05,
      },
      "-=0.1",
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

      // Advantage Section Animations
      gsap.from(".advantage-header", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".advantage-header",
          start: "top 85%",
        },
      });

      gsap.from(".advantage-table-row", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".advantage-table",
          start: "top 80%",
        },
      });

      // -- Horizontal Pin Section --
      const horizontalContainer = document.querySelector(
        ".horizontal-text-container",
      );
      if (horizontalContainer) {
        // Horizontal Slide
        gsap.to(horizontalContainer, {
          x: () => -(horizontalContainer.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-section",
            start: "top top",
            end: () => `+=${horizontalContainer.scrollWidth}`, // Longer scroll
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Rotation
        gsap.to(".rotating-badge-container", {
          rotate: 1080, // Multiple rotations
          scrollTrigger: {
            trigger: ".horizontal-section",
            start: "top top",
            end: () => `+=${horizontalContainer.scrollWidth}`,
            scrub: 1.2,
          },
        });
      }
    }, pageRef); // Use pageRef for full-page scope

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full">
      {/* Strategic Studio Section */}
      <section className="strategic-studio  relative  pt-[150px]  ">
        <div className="max-w-[1400px] overflow-hidden mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column (Scrollable Text) */}
          <div className="flex flex-col  pt-24 pb-48 ">
            {/* Top Block */}
            <div className="flex  justify-between w-[1200px]">
              <div className="max-w-[500px]">
                <h2 className="text-[48px] font-stk-bureau leading-[57px]  text-[#070707] tracking-[-2%] mb-8">
                  We're a strategic <br />
                  Branding{" "}
                  <span className="font-medium font-resonate tracking-[-0.04em]">
                    studio
                  </span>{" "}
                  built on clarity & systems.
                </h2>
              </div>
              <div className="max-w-[500px]">
                <p className="text-[20px] font-stk-bureau text-[#070707] leading-[27px]">
                  We build brands & digital
                  <br />
                  products for lasting success
                </p>
                <p className="text-[14px] leading-[20px] font-resonate mt-4 text-[#070707]">
                  Beeztech.studio
                  <br />
                  @2026
                </p>
              </div>
            </div>

            {/* Center Block */}
            <div className="w-[1100px] flex flex-col items-center mt-[132px] justify-center pointer-events-none">
              <p className="text-[20px] font-normal font-stk-bureau text-left leading-[27px]">
                <span className="font-medium font-resonate">Global</span>{" "}
                creative
                <br />& Technology{" "}
                <span className="font-medium font-resonate">agency.</span>
              </p>
            </div>

            {/* Bottom Block */}
            <div className="max-w-[600px] mt-[250px]">
              <p className="text-[#070707] font-resonate font-normal text-[14px] lg:text-[16px] mb-8 leading-[100%]">
                Inside Beeztech Studio
              </p>
              <h3 className="text-[42px] font-stk-bureau font-normal leading-[55px] text-[#070707] ">
                We are consultants <br /> and craftspeople,
                <br />
                <span className="font-medium font-resonate ">brands</span> with
                tailored web <br />
                solutions, from selective
                <br />
                <span className="font-medium font-resonate">
                  collaboration
                </span>{" "}
                to complete <br /> digital service, with an unwavering
                commitment to 🍯{" "}
                <span className="font-medium font-resonate">quality</span>.
              </h3>
            </div>

            {/* Stats Block */}
            <div className="flex gap-24 mt-26">
              <div className="flex flex-col gap-4">
                <span className="text-[96px] font-normal leading-[100%] font-stk-bureau tracking-[-2%]">
                  30+
                </span>
                <span className="text-[20px] font-normal leading-[27px] font-stk-bureau ">
                  Industry Partners
                </span>
              </div>
              <div className="flex flex-col gap-4 ml-8">
                <span className="text-[96px] font-normal leading-[100%] font-stk-bureau tracking-[-2%]">
                  97%
                </span>
                <span className="text-[20px] font-normal leading-[27px] font-stk-bureau ">
                  Client Retention Rate
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Sticky Visual) */}
          <div className="sticky top-0 h-screen hidden lg:flex items-center justify-center ">
            {/* Background Hexagon Pattern */}
            <div className="absolute inset-0  right-[-290px] top-[380px]  pointer-events-none select-none">
              <img src="/grid.svg" alt="" />
            </div>

            {/* Main Visual Image (Bee/Flower) */}
            <div className="absolute right-[-45px] top-60 w-full items-center justify-center ">
              <img
                src="/heroGif.gif"
                alt=""
                className="-scale-x-100   rotate-[-50deg]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By & CTA Section */}
      <section
        className="proof-section relative py-24 px-6 lg:px-12 bg-white"
        style={{
          backgroundImage: `radial-gradient(#e5e7eb 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          {/* Trusted By Heading */}
          <h3 className="proof-item text-[20px] md:text-[24px] text-[#070707CC]   font-stk-bureau mb-6">
            Trusted by{" "}
            <span className="font-medium font-resonate leading-[27px] text-[#070707]">
              40+ startups and global brands
            </span>
          </h3>

          {/* Logo Bar */}
          <div className="proof-item w-full max-w-[1200px] border border-[#0707071A] rounded-full px-12 py-6 flex flex-wrap items-center justify-evenly gap-x-16 gap-y-8 bg-[#FFFFFF99] mb-9">
            {/* Logos - Using text labels with distinct styles for each */}
            <img
              src="/trustedByIcons/logo1.png"
              alt="ff"
              className="h-[60px] "
            />
            <img src="/trustedByIcons/logo2.png" alt="" className="h-[60px]" />
            <img src="/trustedByIcons/logo3.png" alt="" className="h-[60px]" />
            <img src="/trustedByIcons/logo4.png" alt="" className="h-[60px]" />
            <img src="/trustedByIcons/logo5.png" alt="" className="h-[60px]" />
          </div>

          {/* Ready to Build CTA */}
          <div
            className="flex items-center gap-4  justify-between  w-full max-w-[668px] bg-white border border-[#0707071A] rounded-full px-6 py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Avatar Stack */}
            <div className="relative flex items-center">
              {["/kishanCta.svg", "/abhishekCta.svg", "/aadarshCta.svg"].map(
                (src, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      avatarsRef.current[i] = el;
                    }}
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
            <p className="text-[20px] font-normal  border-l border-[#0707071A] pl-[16px] text-[#070707] font-stk-bureau leading-[27px]">
              Ready to build 🐝
              <br />
              <span className="font-semibold font-stk-bureau  leading-[27px]">
                something amazing
              </span>{" "}
              <span className="font-normal font-stk-bureau  leading-[27px]">
                with Beeztech?
              </span>
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
        </div>
      </section>

      <ScrollTextAnimation />

      {/* Aerodynamic Theory Section */}
      <section>
        <div className="max-w-full mx-auto text-center z-10 relative">
          {/* Quote */}
          <div className="mb-8 max-w-[900px] mx-auto">
            <h2 className="text-[32px] md:text-[42px] leading-[62px] lg:text-[48px] tracking-[-1.2%] text-[#070707] font-normal font-stk-bureau">
              According to{" "}
              <span className="font-medium font-resonate">
                aerodynamic theory
              </span>
              , a bee should{" "}
              <span className="font-medium font-resonate">not</span> be able to{" "}
              <span className="font-medium font-resonate">fly</span>, but the
              bee <span className="font-medium font-resonate">doesn’t</span>{" "}
              know that, so it{" "}
              <span className="font-medium font-resonate">flies anyway</span>.
            </h2>
            <p className="mt-4 mb-10 text-[14px] md:text-[16px] text-[#070707] leading-[100%] font-resonate flex items-center justify-center gap-2">
              - Inspired by the bee
            </p>
          </div>

          {/* Description */}
          <div className="mb-24 max-w-[500px] mx-auto">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#070707] leading-[130%] font-resonate ">
              Some say it’s impossible according to theory. We build the
              technology that makes it work anyway.
            </p>
          </div>

          {/* Visual Container */}
          <div className="relative w-full overflow-hidden max-w-[1500px] mx-auto mt-24 h-[560px]">
            {/* The Flight Path (Stock Line) */}
            <div className="absolute -top-2 inset-0 left-1 z-0">
              <img src="/aerodynamicBrushg.svg" alt="" />
            </div>

            {/* Aerodynamic GIF */}
            <div className="absolute top-[47%]  -left-36 -translate-y-1/2 z-10 w-[450px] md:w-[839px]">
              <Image
                src="/aerodynamic.gif"
                alt="Aerodynamic Bee"
                width={839}
                height={569}
                className="object-contain "
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section>
        <div className="max-w-[1400px] mx-auto text-center">
          {/* Header */}
          <div className="advantage-header mb-24">
            <p className="text-[#070707] font-resonate font-normal md:text-[14px] lg:text-[18px] mb-6 leading-[100%]">
              Why choose Beeztech
            </p>
            <h2 className="text-[24px] md:text-[36px] lg:text-[52px] leading-[1.2] text-[#070707] tracking-[-1.2%] font-stk-bureau ">
              The <span className="font-medium font-resonate">Beeztech</span>{" "}
              advantage
            </h2>
          </div>

          <div className="relative mt-32 bg-[#FFFFFF99] advantage-table max-w-[1200px] mx-auto">
            {/* Main Table Container */}
            <div className="grid grid-cols-[1.2fr_2fr_1.5fr] border border-[#0707071A] rounded-[24px] overflow-hidden  shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              {/* Other Agencies Badge (Top Right) */}
              <div className="absolute -top-24 right-[2.8%] -translate-x-1/2 z-50">
                <div className="bg-[#FFFFFF99] border border-[#0707071A] rounded-[40px] px-[22px] py-[20px] text-[18px] text-[#07070799] font-resonate min-w-[200px] shadow-sm">
                  Other Agencies
                </div>
              </div>

              {advantageData.map((row, i) => (
                <div
                  key={i}
                  className=" col-span-3 grid grid-cols-[1.2fr_2fr_1.5fr] border-b border-[#0707071A] last:border-b-0"
                >
                  {/* Feature Label */}
                  <div className="flex items-center text-left py-4 px-12  border-[#0707071A]">
                    <span className="font-stk-bureau font-normal md:text-[16px] lg:text-[22px] leading-[22px] text-[#070707]">
                      {row.feature}
                    </span>
                  </div>

                  {/* Beeztech Column (Empty space for the overlapping card) */}
                  <div className="py-10 px-12 ">
                    {/* Content is rendered in the absolute card below, but we need consistency for others */}
                  </div>

                  {/* Others Column */}
                  <div className="flex  text-left py-4 px-12 bg-white">
                    <div className="flex  items-center gap-4">
                      <span className="text-[18px] text-[#07070799] font-normal mt-[-2px]">
                        ✓
                      </span>
                      <p className="font-resonate font-normal  text-[16px] leading-[22px] text-[#07070799]">
                        {row.others}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* The Raised Beeztech Card (Overlapping) */}
            <div className="absolute max-w-[520px] text-left top-[-50px] bottom-[-0px] left-[25%] right-[31.3%] z-20 bg-white border border-[#07070733] rounded-[24px] drop-shadow-2xl flex flex-col pointer-events-none">
              <div className="absolute -top-12 left-34 -translate-x-1/2 z-30">
                <div className="bg-white border border-[#07070733] backdrop-blur-[30.41px] rounded-[200px] px-[22px] py-[17px] ">
                  <img
                    src="/Logo_Black.png"
                    className="w-[140px] h-[34px]"
                    alt="logo"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col pt-[51px]">
                {advantageData.map((row, i) => (
                  <div
                    key={i}
                    className="  flex-1 flex items-center px-12 border-b border-[#0707071A]"
                  >
                    <div className="flex  items-center gap-4">
                      <span className="text-[22px] text-[#070707] font-normal mt-[-2px]">
                        ✓
                      </span>
                      <p className="font-resonate font-normal text-[16px] leading-[22px] text-[#070707]">
                        {row.beeztech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Outcomes Section */}
      <section>
        <div className=" max-w-[1400px] py-[180px] mx-auto  z-10 relative">
          {/* Visual Container */}
          <div className="absolute w-full top-[70px] overflow-hidden max-w-[1400px] mx-auto">
            <img src="/brandingOutcomesStroke.svg" alt="" />
          </div>
          {/* Header */}
          <div className=" mx-auto flex flex-col mb-[70px]">
            <p className="text-[#070707] font-resonate font-normal mb-[16px] text-[14px] lg:text-[16px] leading-[100%]">
              Brand impact
            </p>
            <h2 className="text-[36px] font-resonate font-medium leading-[48px] text-[#070707] tracking-[-1.2%]">
              Branding{" "}
              <span className="font-stk-bureau font-normal  leading-[48px] tracking-[-1.2%] text-[#07070799] ">
                outcomes
              </span>
              <br />
              <span className="font-stk-bureau mx-50 font-normal text-[#070707] ">
                (Minimal + Impactful)
              </span>
            </h2>
          </div>

          {/* Grid of Hexagons */}
          <div className="flex  bg-transparent  gap-[40px] items-start ">
            {outcomesData.map((item, i) => (
              <div
                key={i}
                ref={(el) => (outcomesRef.current[i] = el)}
                className="flex flex-col items-center group cursor-default transition-all duration-300"
              >
                <div className="relative w-[243px] h-[282px] flex flex-col gap-[30px] items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {/* Hexagon SVG */}

                  {/* 🔥 GLASS HEXAGON */}
                  <div
                    className="absolute inset-0 backdrop-blur-[10.41px] bg-[#FFFFFF]/60 "
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 22.5%, 100% 77.5%, 50% 100%, 0% 77.5%, 0% 22.5%)",
                    }}
                  />

                  {/* OPTIONAL: SVG border (if you want sharper edges) */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 180 200"
                  >
                    <polygon
                      points="90,0 178,45 178,155 90,200 2,155 2,45"
                      fill="transparent"
                      stroke="#0707071A"
                      strokeWidth="1"
                    />
                  </svg>

                  <div className="absolute top-[55px]  z-10 w-[120px] h-[107px] ">
                    <img
                      src="/brandingOutcomes/iconbg.svg"
                      alt="iconbg"
                      className="w-[120px] h-[107px]"
                    />
                  </div>
                  {/* Icon */}
                  <div className="relative  z-10 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-6 h-6 lg:w-9 lg:h-9 "
                    />
                  </div>

                  {/* Title */}
                  <p className="font-resonate z-100  text-[18px]   text-[#070707] text-center max-w-[100px] leading-[20px] ">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section (Pinned) */}
      <section className="horizontal-section relative overflow-hidden z-40 ">
        <div className="w-full h-screen flex items-center">
          <div className="pl-[calc((100vw-1400px)/2)] pr-[10vw]">
            {/* The Sliding Text Container */}
            <div className="horizontal-text-container whitespace-nowrap z-10 flex items-center will-change-transform">
              <h2 className="text-[120px] z-10 md:text-[128px] lg:text-[200px] font-stk-bureau leading-none flex items-center gap-12 lg:gap-20">
                <span className="text-[#070707] font-resonate font-medium leading-[100%] tracking-[-2%]">
                  Beeztech.Studio
                </span>
                <span className="font-normal font-stk-bureau leading-[100%] tracking-[-2%] text-[#070707]">
                  {" "}
                  flies anyway
                </span>
              </h2>

              {/* Extra text to extend the scroll length */}
              <div className="w-[5vw]"></div>

              <h2 className="text-[120px] z-10 md:text-[128px] lg:text-[200px] font-stk-bureau leading-none flex items-center gap-12 lg:gap-20">
                <span className="text-[#070707] font-resonate font-medium leading-[100%] tracking-[-2%]">
                  Beeztech.Studio
                </span>
                <span className="font-normal font-stk-bureau leading-[100%] tracking-[-2%] text-[#070707]">
                  {" "}
                  flies anyway
                </span>
              </h2>
            </div>
            {/* The Rotating Circle Badge */}
            <div className="absolute top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <RotatingBadge />
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes slow-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-slow-spin {
                animation: slow-spin 15s linear infinite;
            }
        `,
          }}
        />
      </section>

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
