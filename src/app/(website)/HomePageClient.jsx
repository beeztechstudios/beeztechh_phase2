"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollTextAnimation from "@/components/ScrollTextAnimation";
import Link from "next/link";
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

const processSteps = [
  { step: "Step 1", title: "Discover", stage: "Egg Stage", image: "/step1.png" },
  { step: "Step 2", title: "Plan", stage: "Larva Stage", image: "/step1.png" },
  { step: "Step 3", title: "Build", stage: "Pupa Stage", image: "/step1.png" },
  { step: "Step 4", title: "Launch", stage: "Bee Stage", image: "/step1.png" },
  { step: "Step 5", title: "Grow", stage: "Hive Stage", image: "/step1.png" },
  // { step: "Step 6", title: "Scale", stage: "Honey Stage", image: "/step1.png" },
];

export default function HomePageClient() {
  const avatarsRef = useRef([]);
  const servicesRef = useRef(null);
  const leadershipRef = useRef(null);
  const advantageRef = useRef(null);
  const teamMembersRef = useRef([]);
  const processSectionRef = useRef(null);
  const processViewportRef = useRef(null);
  const processSliderRef = useRef(null);

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
      // Process section horizontal slide animation
      if (
        processSectionRef.current &&
        processViewportRef.current &&
        processSliderRef.current
      ) {
        const processSection = processSectionRef.current;
        const processViewport = processViewportRef.current;
        const processSlider = processSliderRef.current;
        const getScrollDistance = () =>
          Math.max(0, processSlider.scrollWidth - processViewport.clientWidth);

        gsap.to(processSlider, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: processSection,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

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

      // -- Proof & CTA Animations --
      gsap.from(".proof-item", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".proof-section",
          start: "top 85%",
        },
      });
    }, advantageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full">

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
            <h2 className="text-[32px] md:text-[42px] leading-[48px] lg:text-[48px] tracking-[-1.2%] text-[#070707] font-normal font-stk-bureau">
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

      {/* Beeztech Process Section */}
      <section
        ref={processSectionRef}
        className="relative py-24 px-6 lg:px-12 overflow-hidden"
        style={{

          backgroundSize: "42px 42px",

        }}
      >
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-6 min-h-[520px]">
            <div className="w-auto xl:w-[auto] xl:flex-shrink-0 xl:pt-0 pr-4">
              <p className="text-[#070707] font-resonate font-normal text-[14px] md:text-[14px] leading-[100%]">
                We build solutions step by step.
              </p>
              <h2 className="text-[36px] md:text-[36px] font-[500] lg:text-[36px] leading-[1.1] text-[#070707] font-resonate tracking-[-1.2%]">
                Beeztech <span className="font-stk-bureau font-[400]">process</span>
              </h2>
            </div>

            <div
              ref={processViewportRef}
              className="relative flex-1 min-h-[460px] md:min-h-[540px] overflow-hidden flex items-center"
            >
              <div
                ref={processSliderRef}
                className="process-slider flex ml-20 items-start gap-7 md:gap-7 w-max pr-12 mx-auto"
              >
                {processSteps.map((item, index) => (
                  <div key={item.step} className="relative flex-shrink-0 w-[260px]">
                    <div className="relative mx-auto h-[282px] w-[243px] rounded-[5px]">
                      <svg
                        viewBox="0 0 244 282"
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M241.009 68.8218C242.551 69.7163 243.5 71.364 243.5 73.1466V208.289C243.5 210.071 242.551 211.719 241.009 212.614L124.413 280.261C122.861 281.162 120.944 281.161 119.392 280.259L2.98778 212.614C1.44766 211.719 0.5 210.073 0.5 208.291L0.5 73.1443C0.5 71.363 1.44767 69.7162 2.98779 68.8212L119.392 1.17648C120.944 0.274536 122.861 0.273865 124.413 1.17474L241.009 68.8218Z"
                          fill="white"
                          fillOpacity="0.6"
                          stroke="#070707"
                          strokeOpacity="0.1"
                          strokeMiterlimit="10"
                        />
                      </svg>
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={`${item.title} stage visual`}
                          width={155}
                          height={168}
                          className="w-[155px] h-[168px] object-contain"
                        />
                      </div>
                    </div>

                    {index < processSteps.length && (
                      <svg
                        className="absolute left-[-5%] top-35 z-20 -translate-y-1/2 -translate-x-1/2"
                        width="88"
                        height="38"
                        viewBox="0 0 88 38"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.2 1.6C11.76 0.64 12.8 0 13.92 0L74.08 0C75.2 0 76.24 0.64 76.8 1.6L87.2 17.44C87.92 18.48 87.92 19.92 87.2 20.96L76.8 36.8C76.24 37.76 75.2 38.4 74.08 38.4L13.92 38.4C12.8 38.4 11.76 37.76 11.2 36.8L0.8 20.96C0.08 19.92 0.08 18.48 0.8 17.44Z"
                          fill="white"
                          fillOpacity="1"
                          stroke="#d0d0d0"
                          strokeWidth="1"
                        />
                        <text
                          x="44"
                          y="25"
                          textAnchor="middle"
                          fontFamily="var(--font-resonate, sans-serif)"
                          fontSize="16"
                          fontWeight="500"
                          fill="#070707"
                        >
                          {item.step}
                        </text>
                      </svg>
                    )}

                    <div className="text-center text-[18px] mt-8">
                      <h3 className="text-[18px] leading-none text-[#070707] font-stk-bureau">
                        <span className=" font-resonate  font-[600]">{item.title}</span>{" "}
                        <span className="font-normal">({item.stage})</span>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
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
