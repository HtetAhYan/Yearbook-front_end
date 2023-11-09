import React from 'react'
import FileUploadButton from '../profile-prepare/CustomFileUploader'

import { dropdownOptions } from '@/utils/Options'
import DropDownComponent from '../universal/DropDownComponent'
import { setCampus, setGrade, setStatus, setYear } from './structure/CardStructureSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'


const CreateCard = () => {

    const dispatch = useDispatch()
    const CardDatas = useSelector((state: RootState) => state.cardStructur)
    console.log(CardDatas);
    
  return (
      <div className='h-full laptop:w-full h1 p-4 laptop:col-start-1 laptop:row-start-1'>
         
  <div className='w-1/2'>
              <h1>Your yearbook card Image</h1>
              <FileUploadButton path={'create'} />
              </div>
{requiredInput.map((input:any, index:number) => (
  <div key={index} className='flex flex-col w-full'>
        <label className='text-black'>{input.type}</label>
     
        
        {input.type === 'dropdown' && <DropDownComponent items={input.options} func={input.function} />}
        {input.type === 'text' && (
          <input value={input.value} onChange={(e) => dispatch(input.function(e.target.value))}/>
        )}
       
        </div>
))}
         
          </div>
  )
}

export default CreateCard
const requiredInput = [
    { label: 'Status', type: 'text',function:setStatus },
    { label: 'Year', type: 'dropdown', options: dropdownOptions.years,function:setYear },
    { label: 'Campus', type: 'dropdown', options: dropdownOptions.campus, function:setCampus },
    { label: 'Grade', type: 'dropdown', options: dropdownOptions.grade,function:setGrade },
    
]