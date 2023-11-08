
import { Button } from '@nextui-org/react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import React, {  useLayoutEffect, useRef } from 'react';

const Uploader =dynamic(() => import('./CustomFileUploader'), {
  loading: () => <div>Loading...</div>,
})

const PrepareContainer = () => {
   const fadeRef = useRef(null);
  useLayoutEffect(() => {
     gsap.from(fadeRef.current, {
    opacity: 0,
    duration: 1, // Animation duration in seconds
    delay: 0.5,  // Delay before the animation starts (optional)
     });gsap.to(fadeRef.current, {
      opacity: 1,
      duration: 2, // Animation duration in seconds
      delay: 0.5,  // Delay before the animation starts (optional)
     })
    
  },[])


 return (
   <div ref={fadeRef } className="h-[100%] w-[100vw] flex flex-col justify-center items-center text-black relative overflow-hidden ">
    <h1 className="h1 font-semibold text-2xl text-center">Upload Your Avatar</h1>
    <h1
   
      className="h1 font-semibold text-4xl text-center absolute top-[10vh] text-stroke"
    >
      EDUSN YearBook
    </h1>
   <Uploader/>

  </div>
);

};

export default PrepareContainer;
