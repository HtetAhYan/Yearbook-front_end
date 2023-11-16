
import React from 'react';

import Likes from './Likes';
import dynamic from 'next/dynamic';
import {  Skeleton, User } from '@nextui-org/react';

const Comments = dynamic(() => import('./comments'), { loading: () => <div>Loading...</div> })
const CardImage=dynamic(()=>import('./CardImage'),{loading:()=><p>loading</p>})
const StudentCard = ({ avatar, name, status, campus, grade, yearbookImage, year, likes,border ,cardId,isLiked}: any) => {

  const currentYear=year?year:'2020'
  return (
   <div className={ `bg-white shadow-lg rounded-lg w-[100%] h-[100%] relative  ${border}` }>
      {/* Student Photo */}
     
      <div className='bg-rose-800 absolute z-10  top-0 w-[7%]  grid justify-center rounded-sm'>
       { currentYear.split('').map((letter:any, index:any) => (
         <div
           key={index}
         className='text-white '
         >
           {letter}
         </div>
       ))}
      </div>    
      <CardImage yearbookImage={yearbookImage}/>
 
      <Skeleton isLoaded={name || status||campus||grade} className='rounded-md'>
      <div className=" bg- flex bg-white">
        
        <div className='p-4 min-h-[15vh]'>
        
            <App name={name}  avatar={avatar} campus={campus} grade={grade}/>
     

           <p className="italic text-gray-600 mt-2 break-all text-sm">{status ? status : `"A memorable quote from the student."`}</p>
           
        </div>
         
          </div></Skeleton>
          <div className={`px-4 flex items-center justify-between border-t-2 bg-white h-[6vh] `}>
        <Likes likes={likes} isLiked={ isLiked} cardId={cardId} />
        <Comments cardId={cardId } />
      </div>
    </div>
  );
};

export default React.memo(StudentCard);
export function App ({ name, avatar, campus, grade }: any) {
 
  return (

    <User   
      name={name}
      className='text-black h-[30%]'
      
      description={campus + ' ' + grade}
      avatarProps={{
        src: avatar,
        size: "sm",
        fallback: "https://i.pravatar.cc/150",
      }}
      />

  );
}
