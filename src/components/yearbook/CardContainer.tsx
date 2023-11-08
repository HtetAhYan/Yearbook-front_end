import { Spinner } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import React from 'react'
const StudentCard=dynamic(()=>import('@/components/yearbook/StudentCard'))
const CardContainer = () => {
  return (
      <div className='grid py-6 laptop:grid-cols-4 desktop:grid-cols-6 gap-2 laptop:gap-4 px-2 '>
          <StudentCard />
      <StudentCard /><StudentCard /><StudentCard /><StudentCard /><StudentCard /><StudentCard />
      <StudentCard />
            
          
    </div>
  )
}

export default CardContainer