import { wrapper } from "@/state/store";
import Cookies from "universal-cookie";
import jwt_decode from 'jwt-decode';
/* import React, { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';

function IsAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
   // Initialize the router

    const user = useSelector((state: RootState) => state.auth.user);
console.log(user);
      const router = useRouter(); 
      //@ts-ignore
      useLayoutEffect(() => {
          if (user === null ||  {}) {
       
      router.push('/get-started').then(() => {router.reload()}); // Redirect to the login page if the user is not authenticated
              // Don't render anything
             ;
    }
      },[user,router])
      

      return (<>{ //@ts-ignore
      
      }<Component {...props} /></>);
  };
}

export default IsAuth;
 */
export const RouteProtector=()=> wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    
    const cookies = new Cookies(req.headers.cookie);

    const token = cookies.get("token");

    const wildCard = token || [];
    if (wildCard?.length === 0) {
      return {
        redirect: {
          destination: '/get-started',
          permanent: false,
        },
      };
  
    }
    const data = await jwt_decode(token);
   
    return {
      props: { data },
    }
  }
)