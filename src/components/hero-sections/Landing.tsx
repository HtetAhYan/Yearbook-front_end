import React, {  useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import hero1 from '@/assets/hero1.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import animateOnScroll from './animateOnScroll'; // Assuming animateOnScroll is correctly implemented
import { useDispatch } from 'react-redux';
import { setLanding } from '@/state/slices/LoaderSlice';
gsap.registerPlugin(ScrollTrigger);
const Landing = () => {
  // Refs for animations
  const fadeRef = useRef(null);
  const parallaxRef = useRef(null);

  useLayoutEffect(() => {
    // Animation for fade-in effect
    gsap.fromTo(
      fadeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 0.5 }
    );

    // Animation for parallax effect
    const end = window.innerWidth > 1560 ? '+=800' : '+=600';
    const timeline = animateOnScroll(end);

    timeline.to(parallaxRef.current, {
      xPercent: 50,
      yPercent: 50,
      duration: 1.2,
      ease: 'none',
    });
  }, []); // Run once on component mount
const dispatch=useDispatch()
  return (
    <div ref={fadeRef} className='h-[88vh] laptop:flex laptop:items-center'>
       <h1 className='text-2xl mt-4 relative text-black hero font-semibold  laptop:hidden' >
          Welcome to EDUSN School's Yearbook
        </h1>
      <Image
        src={hero1}
        alt='hero'
        onLoadingComplete={() => dispatch(setLanding())}
        className='laptop:w-[50%] laptop:h-[50%] object-cover'
      />
      <div className='w-[100%] h-[100%] relative flex-col flex'>
        {/* Parallax text */}
        <h1
          ref={parallaxRef}
          className='absolute text-[5vw] top-4  text-stroke text-black hero laptop:block font-semibold mt-[-2vh] tablet:mt-[0] hidden'
        >
          Welcome to EDUSN School's Yearbook
        </h1>

        {/* Non-parallax text */}
        <h1 className='text-[5vw] absolute top-0 text-black hero font-semibold hidden laptop:block' >
          Welcome to EDUSN School's Yearbook
        </h1>

        {/* About text */}
     <h1 className='p-4  rounded-2xl text-black laptop:px-[5vw] laptop:mt-[25vh] mt-[vh] ml-[5%] italic laptop:text-2xl text-lg laptop:translate-y-[50%]'>
  "{aboutText}"
</h1>

      </div>
    </div>
  );
};

export default Landing;

export const aboutText = [
  "Welcome to Edusn School's Yearbook, where we invite you to embark on a journey of discovery, celebrating a year filled with cherished memories, remarkable growth, and a profound sense of unity.",
  "Our yearbook is more than just a collection of photos; it's a tribute to the diverse experiences that define our tight-knit community at Edusn School. It's a platform to reflect on the moments that have shaped your academic year, from personal milestones to shared triumphs.",
];
