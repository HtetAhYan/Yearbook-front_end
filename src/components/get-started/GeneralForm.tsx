import React, { useState } from 'react'
import Logo from '../general/Logo'


import dynamic from 'next/dynamic';

const RegisterFormContainer =dynamic(() => import('./FinalFormContainer'), { loading: () => <div>Loading...</div> });
const LoginFormContainer = dynamic(() => import('./LoginFormContainer'), { loading: () => <div>Loading...</div> });


const GeneralForm = () => {
  const [currentComponent, setCurrentComponent] = useState<any>("register");
  
  return (
    <div className='h-[100%] w-full flex justify-center items-center  '>
          
      <div className='bg-gradient-to-r from-teal-50 via-cyan-100   p-2 py-4 flex flex-col justify-center items-center 
           rounded-2xl w-[90%] laptop:w-[40%] backdrop-filter backdrop-blur-3xl  border  border-gray-200 '>
              <Logo />
             
        <h1 className='text-center text-sm laptop:text-lg text-blue-600 h1 font-pop font-semibold'>
  
          Please { currentComponent === "register" ? "Register" : "Login"} for <span className=" rounded text-black">Yearbook</span> Account
        </h1>
        {currentComponent === "register" ? (
          <RegisterFormContainer component={"register"}/>
        ): currentComponent === "login" && (
           <LoginFormContainer component={"login"}/>
        )}

             
        <h1 className='text-black text-lg'>
    {currentComponent === "register" ?"Already have an account" : "Don't have an account"}
    <span className='text-blue-600 ml-2 font-semibold cursor-pointer' onClick={() => setCurrentComponent(currentComponent === "register" ? "login" : "register")}>{currentComponent === "register" ? "Login" : "Register"}</span>
  </h1></div>
    
      </div>
  )
}

export default GeneralForm