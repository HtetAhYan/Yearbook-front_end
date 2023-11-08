

import React from 'react'

import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next';
import Cookies from 'universal-cookie';

const GeneralForm = dynamic(() => import('@/components/get-started/GeneralForm'), { loading: () => <div>Loading...</div> });
const BackBtn = dynamic(() => import('@/components/general/BackBtn'), { loading: () => <div>Loading...</div> });
const index = () => {
  return (
    <div className='min-h-[100vh] h-[100vh] overflow-clip'
    >
      <BackBtn/>
     <GeneralForm/></div>
  )
}

export default index
export  const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req.headers.cookie);
  const token = cookies.get("token");
  const wildCard = token || [];
if (wildCard?.length !== 0) {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },}}
  return {
    props: {  },
  };
};