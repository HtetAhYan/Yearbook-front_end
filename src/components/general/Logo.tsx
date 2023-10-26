import Image from 'next/image'
import React from 'react'
import LogoImg from '@/assets/Logo.png'
const Logo = () => {
  return (
    <div > <Image src={LogoImg} alt='logo' width={100} height={100}/></div>
  )
}

export default Logo