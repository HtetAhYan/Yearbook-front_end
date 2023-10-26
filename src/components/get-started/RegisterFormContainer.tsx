import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import OtpSession from './OtpSession';
import { RootState } from '@/state/store';
import { Button } from '@nextui-org/react';
import { setCurrent } from '@/state/slices/AuthFormSlice';

const LoadingComponent = () => <div>Loading...</div>;

const RegisterForm = dynamic(() => import('./FormContainer'), {
  loading: LoadingComponent, // Display loading component while fetching.
});

const RegisterFormContainer = ({ component }: any) => {
  const AuthFormState = useSelector((state: RootState) => state.authForm);
  const [currentData, setCurrentData] = useState<any>(null);
  const [checkAuth, setCheckAuth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const data = localStorage.getItem('current');
      if (data !== null) {
        const parsedData = JSON.parse(data);
        if (parsedData && parsedData.current) {
          setCurrentData(parsedData);
        }
      }
    } catch (error) {
      console.error('Error parsing data from localStorage:', error);
    }
  }, [checkAuth]);

  const handleGoBack = () => {
    localStorage.removeItem('current');
    setCheckAuth(true);
    setCurrentData(null);
    dispatch(setCurrent(1));
  };

  return (
    <>
      <div className="p-4 w-full">
        {currentData === null && component === "register" && <RegisterForm component={component} state={AuthFormState} setCheckAuth={setCheckAuth} />}
        {currentData !== null && <OtpSession />}
      </div>
      {currentData !== null && (
        <div className="w-full px-4">
          <Button className="btn bg-gradient-to-r from-blue-500 to-blue-800 text-white font-semibold py-2 px-4 rounded justify-self-start" onClick={handleGoBack}>
            Go back
          </Button>
        </div>)
      }
    </>
  );
};

export default RegisterFormContainer;
