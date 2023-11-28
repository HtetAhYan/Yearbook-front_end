import Loader from '@/Loader'


import  { useGetYearbooksQuery } from '@/state/features/baseApi'
import { RootState } from '@/state/store'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
const UniversalDropDown = dynamic(() => import('@/components/universal/UniversalDropDown'), {
  loading: () => <div>Loading...</div>,
  ssr: false
})
const EmptyCard = dynamic(() => import('@/components/yearbook/EmptyCard'), { loading: () => <Loader/> })
const Container = dynamic(() => import('@/components/yearbook/CardContainer'), { loading: () => <Loader/>  ,ssr:false})
const PaginationComponent = dynamic(() => import('@/components/yearbook/PaginationComponent'), { loading: () => <Loader/>  ,ssr:false})
const index = () => {
const params=useSelector((state:RootState)=>state.yearbook)
  const { data, isLoading,isError,isFetching } = useGetYearbooksQuery({
    year: params.year !== null ? params.year : "",
    campus: params.campus !== null ? params.campus : "",
    grade: params.grade !== null ? params.grade : "",
    page: params.page
    , limit: params.limit !== null ? params.limit : 10
    ,keyword:params.keyword!==null?params.keyword:""
  });
console.log(isFetching);

 isError && toast.error("Network Error");
  return (
    <div className='py-6'>
       <Head>
        <title>Edusn digital school Yearbook</title>


        <meta name='og:description' content="Edusn digital School Yearbook" />
        <meta property='og:title' content='Yearbook website' />
        <meta name="description" content="Welcome to Edusn School's Yearbook, where we invite you to embark on a journey of discovery, celebrating a year filled with cherished memories, remarkable growth, and a profound sense of unity."/>

      </Head>
      <UniversalDropDown/>
      {isLoading || isFetching ? <div className='w-full  flex justify-center'><Loader/></div> : 
       <> 
          {data?.cards?.length>0  ?  <Container data={data?.cards} />:<EmptyCard/>} 
      <div className='flex justify-center mt-5'>
            { data && <PaginationComponent totalPages={data?.totalPages}/>}
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