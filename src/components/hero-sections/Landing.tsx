import React, { useEffect, useLayoutEffect, useRef } from 'react';
import hero1 from '@/assets/hero1.png';
import Image from 'next/image';
import gsap from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import animateOnScroll from './animateOnScroll';



gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
    const fadeRef = useRef(null);
    const parallaxRef = useRef(null);

    useLayoutEffect(() => {
      gsap.from(fadeRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: 2,
      delay: 0.5,
    });
         const end= window.innerWidth > 1560 ? "+=800" : "+=600"
    const timeline = animateOnScroll(end);
        
timeline.to(parallaxRef.current, {
    xPercent: 50,
    yPercent: 50,
  duration: 1.2,
  ease: 'none',

})

    
  }, []);

  return (
    <div  ref={fadeRef} className=' h-[88vh]   laptop:flex laptop:items-center '>
      <Image
       
        src={hero1}
        alt='hero'
        className='laptop:w-[50%] laptop:h-[50%] object-cover '
      />
      <div  className='w-[100%] h-[100%]   relative flex-col flex  '>
        <h1  ref={parallaxRef} className=' absolute text-[5vw]  top-4   text-stroke text-black hero laptop:block font-semibold hidden '>
          Welcome to EDUSN School's Yearbook
        </h1>
        <h1  className='text-[5vw] absolute top-0  text-black hero font-semibold'>
          Welcome to EDUSN School's Yearbook
        </h1>
     
        <h1 className=' h1 bg-blue-300 w-[90%] p-4 rounded-2xl text-white  laptop:px-[10vw] mt-[10%] ml-[5%] desktop:mt-[25%]  italic laptop:text-xl text-[3vw] laptop:translate-y-[50%] ' >"{aboutText}"</h1>
  
      
      </div>
    </div>  
  );
};

export default Landing;
export const aboutText = [
  "Welcome to Edusn School's Yearbook, where we invite you to embark on a journey of discovery, celebrating a year filled with cherished memories, remarkable growth, and a profound sense of unity.",
  "Our yearbook is more than just a collection of photos; it's a tribute to the diverse experiences that define our tight-knit community at Edusn School. It's a platform to reflect on the moments that have shaped your academic year, from personal milestones to shared triumphs.",
 
];

