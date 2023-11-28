import React from 'react'
import EmptyCardAnimation from "@/assets/animation/emptyCard.json";
import { useLottie } from "lottie-react";
export default function EmptyCard() {
      const options = {
    animationData: EmptyCardAnimation,
    loop: true
  };

  const { View } = useLottie(options);
  return (
      <div className='overflow-hidden flex flex-col items-center justify-center'>
          <h1 className='text-xl laptop:text-5xl text-center h1 text-black '>No cards at this moment</h1>
          <div className='laptop:w-1/3  '>{View}</div></div>
  )
}
