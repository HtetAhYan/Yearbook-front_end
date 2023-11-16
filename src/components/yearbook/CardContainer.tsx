
import dynamic from 'next/dynamic'
import React from 'react'
const StudentCard=dynamic(()=>import('@/components/yearbook/StudentCard'))
const CardContainer = ({data}:any) => {
  return (
    <div className='grid py-6 laptop:grid-cols-4 desktop:grid-cols-6 gap-2 laptop:gap-4 px-2 '>
      {data && data.map((item:any,index:number)=>{
        return(
          <StudentCard key={item.id} avatar={item.userProfile} status={item.status} name={"Test"} yearbookImage={item.source} year={item.year}
            likes={item.likes}
       
            border={item.borderType}
            campus={item.campus}
            grade={item.grade}
            cardId={item.id}
                isLiked={item.liked}
          />
        )
      })}
  {/*         <StudentCard />
      <StudentCard /><StudentCard /><StudentCard /><StudentCard /><StudentCard /><StudentCard />
      <StudentCard /> */}
            
          
    </div>
  )
}

export default CardContainer