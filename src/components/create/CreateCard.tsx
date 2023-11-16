import React, { useCallback, useState } from 'react'
import FileUploadButton from '../profile-prepare/CustomFileUploader'

import { dropdownOptions } from '@/utils/Options'
import DropDownComponent from '../universal/DropDownComponent'
import { setCampus, setGrade, setStatus, setYear } from './structure/CardStructureSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import toast from 'react-hot-toast'
import { Button, Input } from '@nextui-org/react'
import BorderRadios from './BorderRadios'
const CreateCard = () => {
    const dispatch = useDispatch()
  const [status, setStatus] = useState<string>('')
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
     e.target.value.length >= 100 ? toast.error("Status cannot be more than 100 characters", { duration: 1200 }) :
 setStatus(e.target.value)
   },[])
  const handleStatusSubmit = useCallback((input: any) => {
      status.length >= 100 ? toast.error("Status cannot be more than 100 characters", { duration: 1200 }) : dispatch(input.function(status))
  
    },[status])
  return (
      <div className='h-full laptop:w-full h1 p-4 laptop:col-start-1 laptop:row-start-1 flex flex-col justify-between '>
         
  <div className='laptop:w-1/2 '>
              <h1 className='py-2 h1'>Your yearbook card Image</h1>
              <FileUploadButton path={'create'} />
              </div>
{requiredInput.map((input:any, index:number) => (
  <div key={index} className='flex flex-col w-full'>
        <label className='text-black py-2 h1'>{input.label}</label>
     
        
        {input.type === 'dropdown' && <div className='w-[40%]'><DropDownComponent items={input.options} func={input.function} /></div>}
        {input.type === 'text' && (
        <div className='flex items-center'> <Input variant='flat' className='w-1/2 text-white'  value={status} onChange={(e) =>handleInputChange(e)}/> <Button color="secondary" onClick={() => handleStatusSubmit(input)} className='p-2 mx-2'>Add status</Button></div> 
        )}
       
        </div>
))}
<BorderRadios/>
          </div>
  )
}

export default React.memo(CreateCard) //CreateCard
const requiredInput = [
    { label: 'Status', type: 'text',function:setStatus },
    { label: 'Year', type: 'dropdown', options: dropdownOptions.years,function:setYear },
    { label: 'Campus', type: 'dropdown', options: dropdownOptions.campus, function:setCampus },
    { label: 'Grade', type: 'dropdown', options: dropdownOptions.grade,function:setGrade },
    
]