import React, { useState } from 'react';
import HeartIcon from './HeartIcon';

const Likes = () => {
  // State to track whether the heart is filled or not
  const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the liked state
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // Define the number of likes
  const likeCount = 1090;

  // Function to format the like count with 'k' if it exceeds 1000
  const formatLikeCount = (count: number) => {
    if (count > 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count;
  };

  return (
    <div className='flex w-[50%] items-center '>
      <button onClick={toggleLike}>
        <HeartIcon isLiked={isLiked} />
      </button>
      <h2 className='text-black ml-2 hero font-semibold'>
        {formatLikeCount(likeCount)}
      </h2>
    </div>
  );
};

export default Likes;
