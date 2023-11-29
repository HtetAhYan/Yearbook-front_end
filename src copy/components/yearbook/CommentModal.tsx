import { Button, User } from "@nextui-org/react";
import { useState } from "react";

import TimeAgo from "timeago-react";
import {RiDeleteBin5Fill} from 'react-icons/ri'
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useDeleteCommentMutation } from "@/state/features/EssentialApiSlice";
export const Comment = ({ comment }: any) => {
   const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the liked state
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const user = useSelector((state: RootState) => state.auth.user)
  const [deleteComment,{isLoading}]=useDeleteCommentMutation()
  return (
    <div className="">
      <div className={`flex justify-between ${isLoading && 'opacity-50' }`}><User name={comment.name} avatarProps={{ src: comment.avatar }} description="Student" />
<TimeAgo
          datetime={comment.createdAt}
          live={false}
          
  locale='en'
/>
      </div>

      <div className="min-h-[50px] ml-[12%] mt-[10px] flex items-center  relative "> 
        
        <div className="max-w-[60vw] laptop:max-w-[18vw] bg-gray-200 p-2 rounded-md h1 font-medium text-[#0e1129]">{comment.text} </div>
        {comment?.user_id === user?.id && <Button
        onClick={()=>deleteComment({comment_id:comment.id,user_id:user.id})}
          isIconOnly disableAnimation className=" absolute bottom-0 right-0 bg-inherit w-[30px] rounded-full h-[30px]"><RiDeleteBin5Fill className='text-red-700' /></Button>}   
        
          <button onClick={toggleLike} className="ml-2">
  
        </button>
    
      </div>

    </div>
  )
}