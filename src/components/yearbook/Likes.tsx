import React, { useEffect } from 'react';
import HeartIcon from './HeartIcon';
import { useGetIsLikedQuery, useToggleLikeMutation } from '@/state/features/EssentialApiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import toast from 'react-hot-toast';

const Likes = ({  cardId }: any) => {

  const user = useSelector((state: RootState) => state.auth.user)
  const {data}=useGetIsLikedQuery({user_id:user?.id?user?.id : 2,card_id:cardId})
  const formatLikeCount = (count: number) => {
    if (count > 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count;
  };
const [toggleLike,{isLoading}]=useToggleLikeMutation()

  useEffect(() => {
  isLoading&&toast.loading("liking")
  !isLoading && toast.dismiss();
  }, [isLoading])
  const handleToggleLike = () => {
    if(user === null || user === undefined){
      toast.error("Please login to like")
    } else {
        toggleLike({user_id:user?.id,card_id:cardId})
    }

  }
  return (
    <div className={`flex w-[50%] items-center ${isLoading  && 'pointer-events-none'}`}>
      <button  onClick={handleToggleLike}>
        <HeartIcon isLiked={data?.liked} />
      </button>
      <h2 className='text-black ml-2 hero font-semibold'>
        {formatLikeCount(data?.likes)}
      </h2>
    </div>
  );
};

export default Likes;
