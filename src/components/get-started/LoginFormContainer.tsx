import React, { useEffect, useState } from 'react'
import RegisterForm from './FormContainer'
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import OtpSession from './OtpSession';
import axios from 'axios';
import { useGetTestMutation } from '@/state/features/AuthApiSlice';

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
  const url = 'http://localhost:8000/user';

  // Define the request headers separately
  const heades = {
  
     };

  try {
    const response = await axios.post(url, null, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoidGVzc3QiLCJpYXQiOjE2OTgzMDc1NjUsInJvbGVzIjoiVVNFUiJ9.aVEKW6M0-wI6voDJlP7Up-LGfA5FMgIOJUxWHmTI7M8tyLTMBXZIULQifDyYPIRdzCvZ-M8FXNihaVx2E9WULPcodGuyy8twPtOyS5P2obZYGP2ZFvf4R0Y6o3yR4xRkKd2GQn8ZrIJ95FSGEnzhKAD4AmYCeJKFjqG9CkEDPnkPD1SquIdqsXvxH8l9uMCaQJubF9aOPXfybESLwS_tewRpykwR_Ybg00OgJTGpMeMo0vjd7um7KfmCtxdcX22t3qgS1IWDEBWeQwQOhRBuSDJfy-a3pR-QA15SkE3RfKtpu3wpUTNwBXnZXGfWkl8o-TfwmpuM9ET0LaSdMwgI1w',
`,
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
    <button onClick={() => test()}>test</button>

      <h1 className='text-black h1'>Forgot your password?<span className='ml-2 h1 text-red-600'>reset password</span></h1>
    </div>
  )
}

export default LoginFormContainer