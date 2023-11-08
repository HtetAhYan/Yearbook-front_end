import React, { useLayoutEffect, useState } from 'react'
import DropDownComponent from './DropDownComponent';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import SearchBarComponent from './SearchBarComponent';

const UniversalDropDown = () => {
 const [showNavbar, setShowNavbar] = useState(false);

  const enabled=['/yearbook']
  const yearbookDropDownDatas = useSelector((state: RootState) => state.yearbook);
  console.log(yearbookDropDownDatas);
  
  useLayoutEffect(() => {
    // Use the window object inside a useEffect with client-side rendering in mind.
    if (typeof window !== 'undefined') {
      enabled.forEach((route)=>{
        setShowNavbar(window.location.href.includes(route))
      })      
    }
  }, []);

  return (
    showNavbar && (
      <div className={`text-black  items-center w-full h-header py-4 px-[10%] flex bg-white   ${showNavbar ? '' : 'hidden'}`}>
        <div className='w-[100%] flex justify-around laptop:justify-between items-center'>
          <DropDownComponent items={yearbookDropDownDatas.filter} />
{/*         <DropDownComponent items={yearbookDropDownDatas.campus} />
          <DropDownComponent items={yearbookDropDownDatas.grade} />
          <SearchBarComponent hideOrNot={ "hidden laptop:block w-[40%] "} /> */}
        </div>

      </div>
    )
  );
}

export default UniversalDropDown

