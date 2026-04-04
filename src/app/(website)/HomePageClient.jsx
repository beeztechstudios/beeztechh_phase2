
'use client';
import  { useRef, Suspense } from 'react';
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



    </main>
  );
}

