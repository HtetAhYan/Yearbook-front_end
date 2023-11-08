import { Button, User } from "@nextui-org/react";
import { useState } from "react";
import HeartIcon from "./HeartIcon";
import TimeAgo from "timeago-react";
import {RiDeleteBin5Fill} from 'react-icons/ri'
export const Comment = ({ comment }: any) => {
   const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the liked state
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="">
      <div className="flex justify-between"><User name={comment.fullName} avatarProps={{ src: comment.avatar }} description="Product Designer" />
<TimeAgo
          datetime={'2023-11-04 10:30:08'}
          live={false}
          
  locale='en'
/>
      </div>

      <div className="min-h-[50px] ml-[12%] mt-[10px] flex items-center  relative "> 
        
        <div className="max-w-[60vw] laptop:max-w-[18vw] bg-gray-200 p-2 rounded-md h1 font-medium text-[#0e1129]">{comment.comment} </div>
              <Button isIconOnly  disableAnimation className=" absolute bottom-0 right-0 bg-inherit w-[30px] rounded-full h-[30px]"><RiDeleteBin5Fill className='text-red-700'/></Button>
        
          <button onClick={toggleLike} className="ml-2">
        
      <HeartIcon isLiked={isLiked} />
        </button>
        <h1 className="ml-1 h1">{comment.likes}</h1>
      </div>

    </div>
  )
}