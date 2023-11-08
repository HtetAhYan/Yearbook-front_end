import { Input } from '@nextui-org/react'
import React from 'react'

const SearchBarComponent = ({hideOrNot}: any) => {
  return (
    <div className={`${hideOrNot}`}><Input variant="bordered" placeholder="Search" radius='lg'  /></div>
  )
}

export default SearchBarComponent