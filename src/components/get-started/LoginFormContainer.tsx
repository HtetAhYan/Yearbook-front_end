import React, { useEffect, useState } from 'react'
import RegisterForm from './FormContainer'
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import OtpSession from './OtpSession';
import axios from 'axios';
import { useGetTestMutation } from '@/state/features/baseApi';
import { currentToken } from '@/state/features/AuthSlice';
import toast from 'react-hot-toast';

const LoginFormContainer = ({ component }: any) => {
    const AuthFormState = useSelector((state: RootState) => state.authForm);
  const [currentData,setCurrentData]=useState<any>(null)
  const [checkAuth, setCheckAuth] = useState(false)
  const [testquery, { data }] = useGetTestMutation()
  
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
const test = async () => {
  const url = 'http://localhost:8082/api/test/htetahyan@gmail.com';

  // Define the request headers separately
  const heades = {
  
     };

  try {
    const response = await axios.post(url, null, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodGV0YWh5YW5AZ21haWwuY29tIiwiaWF0IjoxNjk4MzEwMDk4LCJleHAiOjE2OTgzOTY0OTh9.TCuc3jbPR845aFLKVkMd1quAXKpTmJzJvbNw-5wkQFI`,
      }
   ,
    }); // Pass the headers in the request configuration
    console.log('Response data:', response.data);
    // Handle the response data as needed
  } catch (error) {
    console.error('Error:', error);
    // Handle any errors that occur during the request
  }
};
  return (
    <div className='w-full p-4'>
      {currentData === null && component === "login" &&(
         <RegisterForm component={component} state={AuthFormState} setCheckAuth={setCheckAuth} />
      )}
    <button className='bg-black' onClick={() => testquery("htetahyan@gmail.com")}>test Api</button>

      <h1 className='text-black h1'>Forgot your password?<span className='ml-2 h1 text-red-600'>reset password</span></h1>
    </div>
  )
}

export default LoginFormContainer