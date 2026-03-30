// 'use client';
// import React, { useRef } from 'react';

// import HeroSection from '../components/HeroSection';
// import Slider from '../components/Slider';
// import ServicesSection from '../components/ServicesSectionHome';
// import AboutUsSection from '../components/AboutUsSection';
// import Portfoliopage from './works/page';

// export default function HomePageClient() {
//   const servicesRef = useRef(null);

//   const scrollToServices = () => {
//     if (servicesRef.current) {
//       servicesRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   };

//   return (
//     <div className="w-screen mt-0 md:mt-18 bg-white text-gray-900">
//       <HeroSection scrollToServices={scrollToServices} />
//       <Slider />
//       <AboutUsSection />
//       <ServicesSection ref={servicesRef} />
//       <Portfoliopage />
//     </div>
//   );
// }

'use client';
import React, { useRef, Suspense } from 'react';
import Portfolio from '@/components/Portfolio'
import HeroSection from '@/components/HeroSection';
import Slider from '@/components/Slider';
import ServicesSection from '@/components/ServicesSectionHome';
import AboutUsSection from '@/components/AboutUsSection';
// import Portfoliopage from './works/work';

export default function HomePageClient() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <main className="w-full overflow-x-hidden mt-0 md:mt-18 bg-white text-gray-900">

      {/* H1 MUST BE INSIDE HERO (we’ll fix when you share HeroSection) */}
      <HeroSection scrollToServices={scrollToServices} />

      {/* Non-critical components wrapped in Suspense for better mobile perf */}
      <Suspense fallback={<div className="h-32" />}>
        <Slider />
      </Suspense>

      <AboutUsSection />

      {/* Section should start with proper headings (we'll fix when you share code) */}
      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      {/* Portfolio page inserted – will optimize once shared */}
      <Suspense fallback={<div className="h-44" />}>
        {/* <Portfoliopage /> */}
        <Portfolio />
      </Suspense>

    </main>
  );
}

