import { Button } from '@nextui-org/react';
import React, { useState, useRef } from 'react';
import { onSubmitOtp } from './SubmitOtp';
import { useDispatch } from 'react-redux';
import {  useVerifyOtpMutation } from '@/state/features/AuthApiSlice';
import { useRouter } from 'next/router';

const OtpInput = ({ currentData, setCurrentData }: any) => {
  const router=useRouter()
  const [otp, setOtp] = useState(['', '', '', '']); // An array to store individual OTP digits
  const otpInputRefs = Array.from({ length: otp.length }, () => useRef(null));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    // Ensure the value is a single digit
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Auto-focus to the next input if available
        if (index < otp.length - 1 && value !== '') {
          // @ts-ignore
        otpInputRefs[index + 1].current.focus();
      }
    }
  };
  const dispatch = useDispatch()
  const [verifyOtp,{isLoading}]=useVerifyOtpMutation()
  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      const updatedOtp = [...otp];
      updatedOtp[index - 1] = '';
      setOtp(updatedOtp);

        // Auto-focus to the previous input
        //@ts-ignore
      otpInputRefs[index - 1].current.focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== '');

  return ( <>
    <form onSubmit={(e) => onSubmitOtp(e, isOtpComplete, otp,verifyOtp,dispatch,currentData,router)} className='flex w-full justify-center mt-4'>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          id={`otp-input-${index}`}
          className="w-11 h-12 mx-2 text-center border rounded-lg text-white"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyUp={(e) => handleBackspace(e, index)}
          maxLength={1}
          ref={otpInputRefs[index]}
        />)
      )}
      <Button type="submit" className="btn bg-gradient-to-r from-teal-500 to-cyan-700 text-white font-semibold py-2 px-4 rounded">
        Submit
      </Button>
    </form>
   
   </>
  );
};

export default OtpInput;
