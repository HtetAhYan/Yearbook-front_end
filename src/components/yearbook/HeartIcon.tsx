import React from 'react';
import OutlineHeart from '@/assets/svgs/HeartOutline.svg';
import FilledHeart from '@/assets/svgs/HeartFilled.svg';
import Image from 'next/image';

const HeartIcon = ({ isLiked }: any) => {
  return (
    <>
      {isLiked ? (<Image className="animate-appearance-in" src={FilledHeart} alt="heart" width={22} height={22} />) : (
        <Image src={OutlineHeart}  alt="heart" width={22} height={22} />
      )}
    </>
  );
};

export default HeartIcon;
