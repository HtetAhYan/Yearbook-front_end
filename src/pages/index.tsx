import React, {  useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import animateOnScroll from '@/components/hero-sections/animateOnScroll';
import dynamic from 'next/dynamic';
const Landing = dynamic(() => import('@/components/hero-sections/Landing'), { loading: () => <div>loading</div> })
const Hero = dynamic(() => import('@/components/hero-sections/Hero'), { loading: () => <div>loading</div> })
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page = ({ data }: any) => {
  const blackDivRef = useRef(null);

  useLayoutEffect(() => {
   const end = window.innerWidth > 768 ? (window.innerWidth > 1560 ? '+=1600' : '+=1200') : "+=1100vh";
    const x = window.innerWidth > 990 ? '10%' : '20vw';
    const width = window.innerWidth > 990 ? '20vw' : '60vw';
    const y = window.innerWidth > 990 ? '100vh' : '113vh'
    const finalY = window.innerWidth > 990 ? '188vh' : '180vh'
    const timeline = animateOnScroll(end);
    timeline.to(blackDivRef.current, {
      x: '90vw',
      y: '50vh',
      
borderRadius: '0%',
    // Move to the right by 100%
   
    });

    timeline.to(blackDivRef.current, {
      y: y,
      borderRadius: '50%',
      opacity: 1,
      x: x,
   height: '10%',
      backgroundColor: 'cyan',
      width: width, // Move to the bottom by 250%
    });

    timeline.to(blackDivRef.current, {
      y: finalY,
      backgroundColor: 'white',
      borderRadius: '0%',
  
      x: '0',
      width: '100%',
      height: '100vh',
      
   
    });
  }, []);



  return (
    <div className="bg-opacity-20 overflow-hidden relative h-[280vh] laptop:h-[288vh]">
      <div ref={blackDivRef} className="bg-white w-[10%] absolute top-0 h-[5%] z-0"></div>
  
      <Landing />
      <Hero />
      <div className='h-[100vh] z-10 text-black relative'>sdsd</div>
   
    </div>
  );
};

export default Page;
