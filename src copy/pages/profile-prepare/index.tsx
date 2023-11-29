import { RouteProtector } from '@/security/ProtectRoutes'
import dynamic from 'next/dynamic'

import React from 'react'
const Contrainer = dynamic(() => import('@/components/profile-prepare/PrepareContainer'), { loading: () => <div>Loading...</div> })

const Index = () => {

  
  return (
    <div className='h-screen relative'>

      <Contrainer /></div>
  )
}

export default Index
export const getServerSideProps = RouteProtector();