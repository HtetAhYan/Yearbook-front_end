import UniversalDropDown from '@/components/universal/UniversalDropDown'
import  { useGetYearbooksQuery } from '@/state/features/baseApi'
import dynamic from 'next/dynamic'
import React from 'react'
const Container = dynamic(() => import('@/components/yearbook/CardContainer'), { loading: () => <div>Loading...</div> })
const PaginationComponent = dynamic(() => import('@/components/yearbook/PaginationComponent'), { loading: () => <div>Loading...</div> })
const index = () => {



  const { data: cards, isLoading } = useGetYearbooksQuery({ year: 2022, user_id: 1 });

  
  return (
    <div className='py-6'>
      {isLoading ? <div>Loading...</div> : 
       <><UniversalDropDown/>
      <Container data={cards}    />
      <div className='flex justify-center mt-5'>
        <PaginationComponent />
        </div></>}
    </div>
  )
}

export default index
/* export const getServerSideProps = async () => {
  const data = await fetch('http://localhost:8082/api/yearbooks/basic?year=2022')

  return {
    props: { data: await data.json() },

  }
}

     */