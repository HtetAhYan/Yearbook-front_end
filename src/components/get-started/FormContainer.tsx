import { addDatas, setCurrent } from '@/state/slices/AuthFormSlice';

import React from 'react';


import { useDispatch } from 'react-redux';
import Forms from './Forms';


const RegisterForm = ({component, state, setCheckAuth }: any) => {
const dispatch=useDispatch()

  const OnRegisterFieldChange = (field: any, value: string) => {
    dispatch(addDatas({
      id: field.id,
      value: value,
    }));

  };

    return (
      <div className='grid'>
        <Forms component={component} state={state} OnRegisterFieldChange={OnRegisterFieldChange} setCheckAuth={setCheckAuth} />

        </div>
    );
  }


export default RegisterForm;
