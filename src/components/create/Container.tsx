import React from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'

import dynamic from 'next/dynamic'
import BackBtn from '../general/BackBtn'
const CreateCard=dynamic(() => import('./CreateCard'),{loading:() => <div>Loading...</div>,ssr:false})
const StudentCard=dynamic(() => import('../yearbook/StudentCard'),{loading:() => <div>Loading...</div>,ssr:false})
const Container = () => {
    const user = useSelector((state: RootState) => state.auth.user)
  
    const cardData=useSelector((state: RootState) => state.cardStructur)
  return (
    <div className='min-h-[100vh] bg-white grid laptop:grid-cols-2 text-black h1 font-medium'>
<BackBtn/>
          <div className='h-full flex items-center justify-center laptop:col-start-2 '>
          <div className=' w-[70vw] laptop:w-[50%]  p- flex justify-center items-center'>
              
              <StudentCard avatar={user?.profileURL} name={user?.fullName}  campus={cardData.campus} grade={cardData.grade} status={cardData.status} yearbookImage={cardData.image}  year={cardData.Year} />
          </div></div>
         <CreateCard/>
    </div>
  )
}

export default Container