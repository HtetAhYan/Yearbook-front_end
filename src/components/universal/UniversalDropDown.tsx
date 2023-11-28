import React, { useLayoutEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { setFilter,setCampus,setGrade,setYear, setLimit } from '@/state/features/yearbookSlices/yearbookSlice';
import dynamic from 'next/dynamic';
import { dropdownOptions } from '@/utils/Options';
import SearchBarComponent from './SearchBarComponent';


const DropDownComponent=dynamic(() => import('./DropDownComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
})
const UniversalDropDown = () => {
 const [showNavbar, setShowNavbar] = useState(false);

  const enabled=['/yearbook']
  

  
  
  useLayoutEffect(() => {
 
    if (typeof window !== 'undefined') {
      enabled.forEach((route)=>{
        setShowNavbar(window.location.href.includes(route))
      })      
    }
  }, []);

  return (
    showNavbar && (
      <div className={`text-black laptop:flex  items-center w-full   py-4   background-search  ${showNavbar ? '' : 'hidden'}`}>
        <div className='w-[100%] flex  items-center mb-2 laptop:mb-0'>
          <div className='flex w-[100%] laptop:w-[30%] gap-4 justify-between'>
       <DropDownComponent items={dropdownOptions.limit} func={setLimit} />
        <DropDownComponent items={dropdownOptions.campus} func={setCampus} />
            <DropDownComponent items={dropdownOptions.grade} func={setGrade} />
            <DropDownComponent items={dropdownOptions.years} func={setYear} />
            </div>
          {/*        <SearchBarComponent hideOrNot={ "hidden laptop:block w-[40%] "} /> */}
          
         
        </div>
<SearchBarComponent/>
      </div>
    )
  );
}

export default UniversalDropDown

