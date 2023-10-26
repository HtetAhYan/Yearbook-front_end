

import React from 'react'

import dynamic from 'next/dynamic'

const GeneralForm = dynamic(() => import('@/components/get-started/GeneralForm'), { loading: () => <div>Loading...</div> });
const BackBtn = dynamic(() => import('@/components/general/BackBtn'), { loading: () => <div>Loading...</div> });
const index = () => {
  return (
    <div className='min-h-[100vh] h-[100vh] overflow-clip'
    >
      <BackBtn/>
     <GeneralForm/></div>
  )
}

export default index