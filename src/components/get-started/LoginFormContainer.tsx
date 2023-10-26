import React, { useEffect, useState } from 'react'
import RegisterForm from './FormContainer'
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import OtpSession from './OtpSession';
import axios from 'axios';
import { useGetTestMutation } from '@/state/features/AuthApiSlice';
import { currentToken } from '@/state/features/AuthSlice';

const LoginFormContainer = ({ component }: any) => {
    const AuthFormState = useSelector((state: RootState) => state.authForm);
  const [currentData,setCurrentData]=useState<any>(null)
  const [checkAuth, setCheckAuth] = useState(false)
  const [testquery, { data }] = useGetTestMutation()
  console.log(data);
  
  useEffect(() => {

  try {
    const data = localStorage.getItem('current');
    if (data!==null) {
      const parsedData = JSON.parse(data);
      if (parsedData && parsedData.current) {
        setCurrentData(parsedData);
      }
    }
  } catch (error) {
  
    console.error('Error parsing data from localStorage:', error);
  }
  }, [checkAuth]);
const test = async () => {
  const url = 'http://localhost:8080/api/test/htetahyan@gmail.com';

  // Define the request headers separately
  const heades = {
  
     };

  try {
    const response = await axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      }
   
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
    <button className='bg-black' onClick={() => test()}>test Api</button>

      <h1 className='text-black h1'>Forgot your password?<span className='ml-2 h1 text-red-600'>reset password</span></h1>
    </div>
  )
}

export default LoginFormContainer