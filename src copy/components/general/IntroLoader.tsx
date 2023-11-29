import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';

export const IntroLoader = ({ loaded }: React.PropsWithChildren<any>) => {
  const loaderRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
const blackDivRef=useRef(null)
  // Array of text options to cycle through
 const textOptions = ['力', '勝', '駅', '車', '学', '日本'];


  useLayoutEffect(() => {
    const loader:any = loaderRef.current;

    if (loaded) {
      // Animation to move the component up and fade out
      gsap.to(loader, {
        duration: 1.5,
        y: '-100%',
        ease: 'slow(0.7,0.7,false)',
        onComplete: () => {
          // Hide the loader after animation completes
          loader.style.display = 'none';
        },
      });

      // Change text content every 0.5 seconds

      }
      const y=window.innerWidth>600?'':'-30%';
      const x=window.innerWidth>600?'-140vw':'-180vw';
      gsap.to(blackDivRef.current, {
          duration: 2,
          y,
          
        x,
        ease: 'expo',
        onComplete: () => {
          // Hide the loader after animation completes
         
        },
      })
        const textInterval = setInterval(() => {
  setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
}, 200);

      // Clean up interval on component unmount or when loaded becomes true
      return () => clearInterval(textInterval);
  }, [loaded]);



  return (
    <div
      ref={loaderRef}
      className='h-[100vh] z-50 bg-black w-full fixed top-0 flex justify-center items-center'
    >
      {/* Your loader content goes here */}
          <h1 className='text-5xl h1 z-10  intro-text'>Loading..{textOptions[textIndex]}</h1>
      <div  ref={blackDivRef} className='h-[199vw] absolute z-0 right-0 bg-teal-300 w-[40%] rotate-45'></div>
          
    </div>
  );
};
