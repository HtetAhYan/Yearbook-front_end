import { addDatas, setCurrent } from '@/state/slices/AuthFormSlice';
import { RootState } from '@/state/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@nextui-org/react';
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
