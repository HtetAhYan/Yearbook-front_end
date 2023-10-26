import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const LoginBtn = () => {
    return (
      <Link href={'/get-started'}><Button variant='solid' className='bg-blue-600 bg-opacity-80 backdrop-blur-2xl h-[5vh] laptop:h-[5vh] font-pop font-semibold h1' >Get started</Button>
      </Link>
  )
}

export default LoginBtn