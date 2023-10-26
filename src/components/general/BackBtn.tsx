import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const BackBtn = () => {
  return (
  <Link href="/" className='absolute top-5 left-5'>
      <Button className='bg-blue-600 bg-opacity-80 backdrop-blur-2xl h-[5vh] laptop:h-[5vh] font-semibold'> Back</Button>
      </Link>
  )
}

export default BackBtn