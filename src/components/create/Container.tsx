import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'

import dynamic from 'next/dynamic'
import BackBtn from '../general/BackBtn'
import { Button } from '@nextui-org/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { usePostYearBookCardMutation } from '@/state/features/baseApi'

const CreateCard=dynamic(() => import('./CreateCard'),{loading:() => <div>Loading...</div>,ssr:false})
const StudentCard=dynamic(() => import('../yearbook/StudentCard'),{loading:() => <div>Loading...</div>,ssr:false})
const Container = () => {
  const router = useRouter()
  const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user)
const [uploadYearbook,{isLoading,data,isSuccess,status,}]=usePostYearBookCardMutation()
  const cardData = useSelector((state: RootState) => state.cardStructur)
const disabled = Object.values(cardData).some(value => value === null || value === '');

  return (
    <div className='min-h-[100vh] bg-white grid laptop:grid-cols-2 text-black h1 font-medium laptop:p-10 '>
<BackBtn/>
      <div className=' flex flex-col items-center justify-between laptop:col-start-2 mt-[10vh] laptop:mt-0'>
        <h1 className='text-xl laptop:text-3xl h1 font-semibold'>Preview</h1>
          <div className='  w-[90vw] laptop:w-[50%]  p- flex justify-center items-center'>
              
 <StudentCard avatar={user?.profileURL} name={user?.fullName}  campus={cardData.campus} grade={cardData.grade} status={`"${cardData.status}"`} yearbookImage={cardData.image}  year={cardData.Year} border={cardData.border} />
        </div>
 <Button color="primary" isDisabled={disabled} className='p-3 mt-2' variant='shadow' onClick={() => uploadCard({user,cardData,uploadYearbook,dispatch,router,data,isSuccess,status})} /* onClick={() => window.print()} */>Submit</Button>
      </div>
      <div className='absolute hidden laptop:block laptop:top-0 laptop:left-1/2 laptop:h-[100vh] laptop:w-[1px] bg-slate-300 '></div>
         <CreateCard/>
    </div>
  )
}

export default React.memo(Container)

export const uploadCard = async({user,cardData,uploadYearbook,dispatch,router,data,isSuccess}:any) => {

  fetch(cardData.image).then(response => response.blob())
    .then(async (blob) => {
      const file = new File([blob], `${user?.fullName}'_yearbook`, { type: blob.type });

     
      const res=await uploadYearbook({ user: user, file, cardDatas: cardData })
                
                    
      if (res?.error.originalStatus===200) {
        toast.success("Successfully updated profile")
                        
      } else {
        toast.error(res?.error?.data || "Network error")
                      
      }
    }
                  
                    //File object
                )
}