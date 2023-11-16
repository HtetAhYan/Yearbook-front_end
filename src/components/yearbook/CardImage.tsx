import { Skeleton } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import Img from '@/assets/hero4.jpg';
const CardImage = ({ yearbookImage}: any) => {
      const [isLoading, setLoading] = useState(true);
  return (
 <Skeleton isLoaded={yearbookImage!==null } >
      <Image src={yearbookImage?yearbookImage:Img} alt="Student" className={`
          z-0
       w-full
        focus:ring-4 transform active:scale-[95%] transition-transform
              duration-700 ease-in-out group-hover:opacity-75
      
              ${
                isLoading
                  ? "scale-105 blur-xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} width={500} height={500}/>
     
</Skeleton>
  )
}

export default CardImage