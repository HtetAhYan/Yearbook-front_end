import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import CountdownTimer from './otp/CountdownTimer'
const OtpInput = dynamic(() => import('./otp/OtpInput'), { loading: () => <div>Loading...</div> })

const OtpSession = () => {
  const [currentData, setCurrentData] = useState(
    JSON.parse(localStorage.getItem('current') || "") || null
  );
  const [key,setKey]=useState(0)
useEffect(() => {
    const data = localStorage.getItem('current');
        if (data!==null) {
          const parsedData = JSON.parse(data);
          if (parsedData && parsedData.current) {
            setCurrentData(parsedData);
          }
        }
},[key])
    return (
      <div className=' w-full'>
        <CountdownTimer currentData={currentData} setCurrentData={setCurrentData} key={key} setKey={setKey}/>
        <OtpInput currentData={currentData} setCurrentData={setCurrentData}/>
      </div>
    )
  }


export default OtpSession