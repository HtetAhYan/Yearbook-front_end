import { Input } from '@nextui-org/react'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { GrEmoji } from 'react-icons/gr'
import EmojiPicker, {
  EmojiStyle,

  EmojiClickData,

} from "emoji-picker-react";
import toast from 'react-hot-toast';

const CommentInput = () => {
    
  
    
      const [selectedEmoji, setSelectedEmoji] = useState<string>("1f60a");
    const [inputValue, setInputValue] = useState<string>("");
    function onClick(emojiData: EmojiClickData, event: MouseEvent) {
    setInputValue(
      (inputValue) =>
        inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
    );
    setSelectedEmoji(emojiData.unified);
    }
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newInputValue = event.target.value;

  if (newInputValue.length <= 200 || newInputValue.length < inputValue.length) {
    setInputValue(newInputValue);
  } else {
    toast.error("Comment cannot be more than 200 characters", { duration: 1200 });
  }
};


  return (
      <div className='w-full '>
          <Input color='default'   value={inputValue}
              onChange={handleInputChange} endContent={<><GrEmoji  onClick={() => setShowEmojiPicker(!showEmojiPicker)} className='cursor-pointer text-3xl mr-2 focus:ring-4 transform active:scale-[95%] transition-transform
              duration-700 ease-in-out  text-purple-900  laptop:block' /><IoSend className='cursor-pointer text-3xl text-blue-700  focus:ring-4 transform active:scale-[90%] transition-transform
              duration-700 ease-in-out' /></>} />
          {showEmojiPicker && (
              <div   className='w-full flex justify-center mt-2 animate-appearance-in'>
              <EmojiPicker 
                  searchDisabled
                  width={'100%'}
                  height={300}
                 
        onEmojiClick={onClick}
        autoFocusSearch={false}
        emojiStyle={EmojiStyle.NATIVE}/></div>
        )}  
    </div>
  )
}

export default CommentInput