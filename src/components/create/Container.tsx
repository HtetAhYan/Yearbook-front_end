import React from 'react'
import FileUploadButton from '../profile-prepare/CustomFileUploader'
import StudentCard from '../yearbook/StudentCard'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'


const Container = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    console.log(user);
    
  return (
      <div className='min-h-[100vh] bg-white grid laptop:grid-cols-2 text-black h1 font-medium'>
          <div className='h-full flex items-center justify-center'>
          <div className=' w-[70vw] laptop:w-[50%]  p- flex justify-center items-center'>
              
              <StudentCard avatar={user?.profileURL} name={user?.fullName}  campus={'Lagos, Nigeria'} grade='Year 7' status={`"A memorable quote from the student."`} yearbookImage={null}  year='2023' />
          </div></div>
          <div className='h-full laptop:w-1/2 p-4 laptop:col-start-2 bg-black'>
              <h1>Your yearbook card Image</h1>
              <FileUploadButton path={'create' } />
          </div>
    </div>
  )
}

export default Container