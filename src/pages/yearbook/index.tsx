import UniversalDropDown from '@/components/universal/UniversalDropDown'
import { Pagination } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import React from 'react'
const Container = dynamic(() => import('@/components/yearbook/CardContainer'), { loading: () => <div>Loading...</div> })
const PaginationComponent = dynamic(() => import('@/components/yearbook/PaginationComponent'), { loading: () => <div>Loading...</div> })
const index = () => {
  return (
    <div className='py-6'>
       <UniversalDropDown/>
      <Container />
      <div className='flex justify-center mt-5'>
        {/*   <Pagination loop showControls color="warning" className='' size='lg' radius='sm' variant='faded' total={200} initialPage={1} /> */}
        <PaginationComponent />
        </div>
    </div>
  )
}

export default index