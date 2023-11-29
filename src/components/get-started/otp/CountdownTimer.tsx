import { useRequestOtpMutation } from '@/state/features/AuthApiSlice';
import { setCurrent } from '@/state/slices/AuthFormSlice';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const CountdownTimer = ({currentData,setCurrentData,key,setKey}:any) => {
  const [remainingTime, setRemainingTime] = useState(0);
 
  

    useEffect(() => {
      
    if (currentData && currentData.createdDate) {
      const timeStamp = currentData.createdDate;
      const currentTime = new Date().getTime();
      const timeDifference = Math.floor((timeStamp - currentTime) / 1000);

      setRemainingTime(timeDifference);
    }
  }, []);
  const [requestOtp, { isLoading,error }] = useRequestOtpMutation();
  const dispatch = useDispatch()

  const restartTimer = async () => {

  try {
    const res = await requestOtp(currentData.email).unwrap();


    // Handle the success response here.
    if (res?.error === true) {
        toast.error(res?.status);
   
        dispatch(setCurrent(1))
    } else {
      const newCurrentData = {
        current: 2,
        email: currentData.email,
        createdDate: new Date().getTime() + 2 * 60 * 1000,
      };
      toast.success(res?.status);
      localStorage.setItem('current', JSON.stringify(newCurrentData));
      setCurrentData(newCurrentData);
      setKey((prevKey: number) => prevKey + 1);
    }
  } catch (error) {
    // Handle any errors that occur during the request
  }
};

  return (
    <div className="w-full flex justify-center h-[100vh] items-center">
      <CountdownCircleTimer
        key={key}
        isPlaying
        strokeWidth={5}
        size={160}
        duration={remainingTime}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[140, 90, 60, 0]}
        initialRemainingTime={remainingTime}
      >
        {({ remainingTime }) => {
          if (remainingTime === 0) {
            return (
              <Button onClick={restartTimer} isDisabled={isLoading}>
              Request Otp Again
              </Button>
            );
          } else {
            return (
              <div className="timer">
                <div className="text-black text-center">Request again in</div>
                <div className="text-black text-center">{remainingTime}</div>
                <div className="text-black text-center">seconds</div>
              </div>
            );
          }
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer
