"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RotatingBadge() {
  const svgRef = useRef(null);

  useEffect(() => {
    const tween = gsap.to(svgRef.current, {
      rotation: 360,
      duration: 18,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });

    return () => tween.kill();
  }, []);

  return (
    <div className="relative w-[222px] h-[222px] flex items-center justify-center isolation-isolate">
      {/* 🔥 YOUR EXISTING RINGS (UNCHANGED) */}
      <div className="absolute inset-0 rounded-full" />

      <div
        className="absolute inset-0 rounded-full bg-[#FFFFFFE5] backdrop-blur-[30.41px] border border-[#0707071A]"
        style={{
          WebkitMask:
            "radial-gradient(circle at center, transparent 75px, black 76px)",
          mask: "radial-gradient(circle at center, transparent 75px, black 76px)",
        }}
      />

      {/* ✅ SVG TEXT (ONLY CHANGE) */}
      <svg
        ref={svgRef}
        viewBox="0 0 222 222"
        className="absolute inset-0 w-full h-full z-[3]"
      >
        <defs>
          <path
            id="circlePath"
            d="
              M111,111
              m -90,0
              a 90,90 0 1,1 180,0
              a 90,90 0 1,1 -180,0
            "
          />
        </defs>

        <text
          fill="#070707"
          fontSize="14"
          fontWeight="700"
          letterSpacing="1"
          className="uppercase"
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            • WE BUILD BRANDS & DIGITAL PRODUCTS FOR LASTING SUCCESS •
          </textPath>
        </text>
      </svg>

      {/* 🔥 CENTER GLASS (UNCHANGED) */}
      <div className="absolute z-[4] w-[140px] h-[140px] rounded-full bg-[#FFFFFFE5] backdrop-blur-[30px] border border-[#0707071A] flex items-center justify-center">
        <img src="/slider.gif" alt="Bee" className="w-[100px] object-contain" />
      </div>
    </div>
  );
}
