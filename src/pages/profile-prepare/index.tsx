import { RouteProtector } from '@/security/ProtectRoutes'
import dynamic from 'next/dynamic'

import React from 'react'
const Contrainer = dynamic(() => import('@/components/profile-prepare/PrepareContainer'), { loading: () => <div>Loading...</div> })

const Index = ({ data }: any) => {

  
  return (
    <div className='h-screen relative'>
     {/*  <Image className='w-full absolute h-full object-cover' src={'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='bg'
      width={1000} height={1000}
      /> */}
      <Contrainer /></div>
  )
}

export default Index
export const getServerSideProps = RouteProtector();