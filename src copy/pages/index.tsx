import React, {  useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import animateOnScroll from '@/components/hero-sections/animateOnScroll';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loader from '@/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import toast from 'react-hot-toast';
import { IntroLoader } from '@/components/general/IntroLoader';

const OurStudents = dynamic(() => import('@/components/hero-sections/OurStudents'), { loading: () => <Loader/> ,ssr:false})
const Landing = dynamic(() => import('@/components/hero-sections/Landing'), { loading: () => <Loader/>,ssr:false })
const Hero = dynamic(() => import('@/components/hero-sections/Hero'), { loading: () => <Loader/> ,ssr:false})

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page = ({ data }: any) => {

  const blackDivRef = useRef(null);

  useLayoutEffect(() => {
  const end = window.innerWidth > 768 ? (window.innerWidth > 1560 ? '+=1600' : '+=1200') : "+=1100";
  const x = window.innerWidth > 990 ? '10%' : '20vw';
  const width = window.innerWidth > 990 ? '20vw' : '60vw';
  const y = window.innerWidth > 990 ? '100vh' : '113vh';
  const finalY = window.innerWidth > 990 ? '198vh' : '180vh';

  const timeline = animateOnScroll(end);

  const moveRight = () => {
    timeline.to(blackDivRef.current, {
      x: '90vw',
      y: '50vh',
      width: '10%',
      height: '10%',
      borderRadius: '0%',
      rotate: '45deg',
   
    });
  };

  const moveBottom = () => {
    timeline.to(blackDivRef.current, {
      y,
      borderRadius: '50%',
      opacity: 1,
      rotate: '0deg',
      x,
      backgroundColor: 'cyan',
      
      width,
  
    });
  };

  const moveToBottom = () => {
    timeline.to(blackDivRef.current, {
      y: finalY,
      backgroundColor: 'white',
      rotate: '0deg',
      borderRadius: '0%',
      x: '0',
      width: '100%',
      height: '100vh',
   
    });
  };

  moveRight();
  moveBottom();
  moveToBottom();
}, []);


 const allLoaderValuesTrue = useSelector(areAllLoaderValuesTrue);



  
    return (
      <div className="bg-opacity-20 overflow-x-hidden  relative h-[280vh] laptop:h-[298vh]">
       <IntroLoader loaded={ allLoaderValuesTrue} />
        <Head>
          <title>Edusn digital school Yearbook</title>
          <meta name='og:description' content="Edusn digital School Yearbook" />
          
          <meta property='og:title' content='Yearbook website' />
          <meta name="description" content="Welcome to Edusn School's Yearbook, where we invite you to embark on a journey of discovery, celebrating a year filled with cherished memories, remarkable growth, and a profound sense of unity." />

        </Head>
        <div ref={blackDivRef} className="bg-indigo-400 w-[100%] absolute top-0 h-[1%]  z-0">
          <OurStudents /></div>
  
        <Landing />
        <Hero />
 
   
      </div>
    );
  
};

const MemoizedPage = React.memo(Page);
export default MemoizedPage;
export const areAllLoaderValuesTrue = (state: RootState) => {
  const { Landing, Hero } = state.loader;
  return Landing && Hero ;
};