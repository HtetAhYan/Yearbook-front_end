import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import line from '@/assets/Line.png';
import gsap from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import animateOnScroll from './animateOnScroll';
import hero1 from '@/assets/hero2.jpg'
import hero2 from '@/assets/hero3.jpg'
import hero3 from '@/assets/hero4.jpg'
import { useDispatch } from 'react-redux';
import { setHero } from '@/state/slices/LoaderSlice';
  gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
   const dispatch = useDispatch();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages] = useState(3); // Assuming you have three images to load

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);

    if (imagesLoaded === totalImages - 1) {
      // Dispatch the setHero action once all images are loaded
      dispatch(setHero());
    }
  };
  const ref = useRef(null)
  const textRef = useRef(null)
  const circleRef = useRef(null)
  const imgRef = useRef(null)
  const text2ref=useRef(null)
useLayoutEffect(() => {

  const fontSize = window.innerWidth > 768 ? "15em" : "5em";
  const circleSize = window.innerWidth > 768 ? "700px" : "500px"
const end = window.innerWidth > 768 ? (window.innerWidth > 1560 ? "+=1000" : "+=750") : "+=800";
  const timeline = animateOnScroll(end);
  timeline.from(ref.current, { height: '10000px' })
    .to(textRef.current, { fontSize: fontSize }, 2)
  .to(circleRef.current, { height: circleSize, width: circleSize,borderRadius: "50%",border: "1px solid black",opacity:'1'}, 2)
  timeline.remove(timeline)
    .fromTo(imgRef.current, { opacity: 0, scale: 0 }, { opacity: 1, scale:1.1, }, 2)
    .fromTo(text2ref.current, { opacity: 0 }, { opacity: 1, }, 2.5)
  return () => {
    timeline.scrollTrigger?.kill();
    timeline.clear()
  }
},[])
  return (
    <div className='h-[100vh] overflow-visible relative flex'>
      <div ref={textRef} className='flex  absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-black'>{EDUSN.map((txt: any, index: any) => {
        return <h1 className={`font-bold h1 ${index === 2 ? "text-[1.2em] text-zinc-800" : ""}`}>{txt}</h1>

      }) }</div>
      <div ref={circleRef} className=' h-[0px] w-0 opacity-0  absolute top-1/2 left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2 '></div>
         <Image
        
        ref={ref}
  src={line}
  alt='line'
  className='absolute  top-1/2 left-1/2 transform -translate-y-1/2 rotate-[90deg] z-0 opacity-28 w-[1px]'
      />
      <div className='relative w-[100%] h-[80%] my-[10vh] laptop:mt-[5%] laptop:block  ' ref={imgRef}>
        <ImageComponent className={"absolute left-1/3 top-6 w-[20vw] laptop:block  "} onLoadingComplete={handleImageLoad} src={hero1} />
          <h1  className='h1 text-4xl text-black absolute left-2/3 top-6 w-[25%] laptop:block hidden'>{ text}</h1>
        <ImageComponent className={"absolute laptop:left-3/4 top-1/4  left-2/3 laptop:top-1/3 laptop:block  w-[20vw]"} onLoadingComplete={handleImageLoad} src={hero2} />
        <h1 ref={text2ref}  className='h1 font-semibold text-4xl laptop:block hidden laptop:text-3xl  text-black absolute laptop:top-[15%]  top-1/4 left-[5%] w-[20%]'>{ text2}</h1>
        <ImageComponent className={`absolute left-[20%] laptop:block  w-[25%] laptop:w-[25vw] top-2/3 `} onLoadingComplete={handleImageLoad} src={hero3} />
      
</div>
  
    </div>
  );
};

export default Hero;




const text = ["Join us in celebrating", "The unforgettable Class of 2023!"]
const text2="we commemorate and honor the outstanding achievements "
const EDUSN=['E',"D","U","S","N"]
export const ImageComponent = (props: any) => {

  return (
    <div className='w-full h-full' >
      <Image
        src={props.src}
       
      {...props}
        alt='bg' />
      </div>)
}