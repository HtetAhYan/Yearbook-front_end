import dynamic from 'next/dynamic'
import React from 'react'
const CardContainer=dynamic(()=>import('@/components/create/Container'),{loading:() => <div>Loading...</div>})
const create = () => {
  return (
<><CardContainer/></>
  )
}

export default create
