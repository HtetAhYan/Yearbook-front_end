import React, { useEffect, useState } from 'react'
import RegisterForm from './FormContainer'
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import OtpSession from './OtpSession';
import axios from 'axios';
import { useGetTestMutation } from '@/state/features/baseApi';
import { currentToken } from '@/state/features/AuthSlice';
import toast from 'react-hot-toast';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import ForgetPasswordModal from '../account/ForgetPasswordModal';

const LoginFormContainer = ({ component }: any) => {
    const AuthFormState = useSelector((state: RootState) => state.authForm);
  const [currentData,setCurrentData]=useState<any>(null)
  const [checkAuth, setCheckAuth] = useState(false)
  const [testquery, { data }] = useGetTestMutation()
    const {isOpen, onOpen, onOpenChange,onClose} = useDisclosure();
  useEffect(() => {

  try {
    const data = localStorage.getItem('current');
    if (data!==null) {
      const parsedData = JSON.parse(data);
      if (parsedData && parsedData.current) {
        setCurrentData(parsedData);
      }
    }
  } catch (error:any) {
    toast.error('Error parsing data :', error);
  }
  }, [checkAuth]);

  return (
    <div className='w-full p-4'>
      {currentData === null && component === "login" &&(
         <RegisterForm component={component} state={AuthFormState} setCheckAuth={setCheckAuth} />
      )}
    <button className='bg-black' onClick={() => testquery("htetahyan@gmail.com")}>test Api</button>

      <h1  className='text-black h1'>Forgot your password?<span onClick={onOpen} className='ml-2 h1 text-red-600'>
     
       forgot password
      </span>   <ForgetPasswordModal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}/> </h1>
      
   
    </div>
  )
}

export default LoginFormContainer