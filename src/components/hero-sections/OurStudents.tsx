import React, { useLayoutEffect, useRef, useState } from 'react'
import img1 from '@/assets/ourStudent.avif'
import img2 from '@/assets/ourStudent2.webp'
import img3 from '@/assets/ourStudent3.jpeg'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { MdSkipPrevious,MdSkipNext } from "react-icons/md";


import animateOnScroll from './animateOnScroll'
import {  useRouter } from 'next/router'
const OurStudents = () => {
  const classes = 'laptop:relative absolute bottom-0 h-[5vh] mx-2 bg-[#0e1129] text-xl bg-opacity-80 backdrop-blur-2xl';
  const [current, setCurrent] = useState(0);
  const next= ()=>{
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }
  const prev= ()=>{
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }
  
  const fadeRef = useRef(null);
  const imageRef = useRef(null);
  const router=useRouter()
  useLayoutEffect(() => {
      const end = window.innerWidth > 768 ? (window.innerWidth > 1560 ? '+=1900' : '+=1500') : "+=1200";
    const timeline=animateOnScroll(end)
/*         timeline.from(fadeRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.2,
    }); */
timeline.to(imageRef.current, {
  opacity: 1,
  duration: 1,
  delay: 0,
});

    timeline.to(fadeRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.2,
    });
  },[current,router])
  return (
    <div ref={fadeRef}  className={ `${images[current].class} h-[100%] opacity-0  z-10  text-black relative flex flex-col justify-around  items-center py-6 laptop:py-4`}>
      <h1 className='h1  font-semibold text-3xl text-start'>View Our Yearbook</h1>
      <div className=' flex justify-between relative h-[45%] laptop:h-[auto] items-center laptop:max-h-[80%]'>
<Button className={classes} isIconOnly endContent={<MdSkipPrevious />} onClick={prev}></Button>
      <div className='desktop:max-h-[100%] max-h-[60vh] overflow-hidden'>
        <Image ref={imageRef}  src={images[current].src} alt="" className='rounded-lg shadow-2xl max-h-[30vh] opacity-0 laptop:w-[60vw] laptop:max-h-[100%]'/>
        </div>
<Button className={`${classes} right-0`}  isIconOnly endContent={<MdSkipNext />} onClick={next}></Button>
        </div>
      <Button className='p-2 h1' variant='shadow' color='primary' onClick={() => router.push('/yearbook').then(() => router.reload())}>
      
        To Yearbook</Button>

    </div>
  )
}

export default OurStudents
const images = [
  {
    id: 1, src: img1,
    class:'no'
  },  {
    id: 2, src: img2,
    class:'no'
  }, {
    id: 3, src: img3,
    class:'no'
  }
]