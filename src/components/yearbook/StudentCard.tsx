import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import Img from '@/assets/hero4.jpg';
import Likes from './Likes';
import dynamic from 'next/dynamic';
import { Chip, Skeleton, User } from '@nextui-org/react';
const Comments=dynamic(()=>import('./comments'),{loading:() => <div>Loading...</div>})
const StudentCard = ({ avatar,name, status, campus, grade, yearbookImage, year, likes, comment }: any) => {
  
  
  const [isLoading, setLoading] = useState(true);
  const currentYear=year?year:'2020'
  return (
    <div className="bg-white  shadow-lg rounded-lg w-[100%] h-[100%] relative overflow-hidden">
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
      </div>     <Skeleton isLoaded={yearbookImage===null } className="rounded-lg">
      <Image src={yearbookImage?yearbookImage:Img} alt="Student" className={`
          z-0
       
        focus:ring-4 transform active:scale-[95%] transition-transform
              duration-700 ease-in-out group-hover:opacity-75
            rounded-t-lg
              ${
                isLoading
                  ? "scale-105 blur-xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} width={200000} height={200}/>
     
</Skeleton>
      {/* Student Details */}
      <Skeleton isLoaded={name || status||campus||grade} className='rounded-md'>
      <div className=" bg- flex bg-white">
        
        <div className='p-4'>
        
            <App name={name}  avatar={avatar} campus={campus} grade={grade}/>
        {/*   <h2 className="text-2xl font-semibold text-gray-800 mt-2">Student's Name</h2> */}

            <p className="italic text-gray-600 mt-2 ">{status ? status : `"A memorable quote from the student."`}</p>
           
        </div>
         
          </div></Skeleton>
          <div className={`px-4 flex items-center justify-between border-t-2 h-[10vh] ${likes && comment ? '' : 'pointer-events-none'}`}>
              <Likes />
            <Comments />
      </div>
    </div>
  );
};

export default StudentCard;
export function App({ name, avatar, campus, grade }: any) {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <>
      {!name ? (
          <>
            <Skeleton isLoaded={name} className='rounded-md'>
    {children}
 </Skeleton>
 </>
      ):children}
      </>
      );
  }
  return (
<Wrapper>
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
  </Wrapper>
  );
}
