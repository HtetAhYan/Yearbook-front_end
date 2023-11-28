import { setKeyword } from '@/state/features/yearbookSlices/yearbookSlice'
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

const SearchBarComponent = ({ hideOrNot }: any) => {
  const dispatch = useDispatch();
  const [value,setValue]=useState("")
  const submitKeyword = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setKeyword(value.toLocaleLowerCase()))
  }
  return (
    <form onSubmit={submitKeyword} className={`${hideOrNot} bg-inherit `}><Input value={value} onChange={(e)=>setValue(e.target.value)} variant="underlined" className='bg-white  rounded-lg h-[40px] border-none  laptop:w-[20vw]  text-black h1' placeholder="Search" radius='lg' endContent={<Button 
    variant='faded' onClick={submitKeyword} className='p-1' isIconOnly endContent={<BiSearch size={20} />}></Button>} />
  
    </form>
  )
}

export default SearchBarComponent