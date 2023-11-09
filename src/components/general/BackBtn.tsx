import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const BackBtn = () => {
  const router = useRouter();
  return (

      <Button onClick={() => router.back()} className='bg-blue-600 bg-opacity-80 backdrop-blur-2xl h-[5vh] laptop:h-[5vh] absolute top-5 left-5 font-semibold'> Back</Button>

  )
}

export default BackBtn