import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import { LoginSchema, RegisterSchema } from './YupSchema';
import { useLoginMutation, useRegisterMutation } from '@/state/features/AuthApiSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { setCurrent } from '@/state/slices/AuthFormSlice';
import { setCredentials } from '@/state/features/AuthSlice';
import { useRouter } from 'next/router';
export type Inputs = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
const Forms = ({ component, state, OnRegisterFieldChange, setCheckAuth }: any) => {
  const activeSchema:any=component==="register" ? RegisterSchema : LoginSchema
     const { register, handleSubmit, formState: { errors } } = useForm<Inputs>(
    { resolver: yupResolver(activeSchema), }
    );
    const mapping = component === "register" ? state?.register : state?.login;
const router=useRouter()
  const dispatch = useDispatch();

 
  const [registerUser, { isLoading, error, }] = useRegisterMutation()
    const [loginUser, { isLoading: isLoadingLogin, error: errorLogin, }] = useLoginMutation()
    const fetchFunc=component === "register" ?  registerUser:loginUser 
    return (
        <form onSubmit={handleSubmit((data) => onAuthFormSubmit(data,fetchFunc,setCheckAuth,dispatch,component,router))} className='grid'>
           
      {mapping?.map((field: any) => (
            field.api ? (
              <div key={field.id}>
                <label className='block text-gray-700 text-sm font-bold mb-2'>{field.label}</label>
                <Input
           
                  autoComplete='on'
                  defaultValue={field.value}
                  {...register(field.api)}
                  type={field.api === 'password' || field.api === 'passwordConfirm' ? 'password' : 'text'}
                  min='0'
                  required
                  style={{ height: '40px' }}
                  onChange={(e) => OnRegisterFieldChange(field, e.target.value)}
                />
                {  // @ts-ignore
                  errors[field?.api] ? (
                    <p className='text-red-500 text-xs italic'>{
                      // @ts-ignore
                      errors[field?.api]?.message}</p>
                  ) : null}
              </div>
            ) : null
      ))}
        
          <Button
          isDisabled={isLoading || isLoadingLogin}
          isLoading={isLoading || isLoadingLogin}
            type='submit'
            variant='solid'
            className='bg-blue-700 bg-opacity-80 w-[30%] justify-self-end mt-4 backdrop-blur-2xl h-[40px] laptop:h-[5vh] font-semibold'
          >
            {component === "register" ? "Register" : "Login"}
          </Button>
        </form>
  )
}

export default Forms



  export const onAuthFormSubmit = async (data:any,fetchFunc:any,setCheckAuth:any,dispatch:any,component:any,router:any) => {
    const { fullName, email, password } = data;


    const requestData = {
      email,
      password,
      fullName
    };

    const response = await fetchFunc(requestData).unwrap();


   
    if (response?.token === null && response?.error===true || response.length <= 0) {
      
      toast.error(response?.status || "Network error");

    } 

    
    else  {
      toast.success(response?.status)
      if (component === "login") {
    
     
        dispatch(setCredentials({ user: response?.user, token: response?.token }));
        if(response.user.profileURL===null){
          router.push('/profile-prepare');
        }else{
          router.push('/yearbook');
        }

}

      setCheckAuth(true)
      var currentTime = new Date();

      // Add 2 minutes (2 * 60,000 milliseconds) to the current time
      var futureTime = new Date(currentTime.getTime() + 2 * 60 * 1000);

      // Store the future time in local storage
      if (component==="register") {
        localStorage.setItem('current', JSON.stringify({
          current: 2,
          email: email, // Assuming you have the 'email' variable defined
          createdDate: futureTime.getTime()
        }))
       
          router.reload()
         ;
        dispatch(setCurrent(2))
      
      }
   
   
    }

  };