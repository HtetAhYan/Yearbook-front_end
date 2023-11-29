import { Skeleton } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Img from '@/assets/hero4.jpg';
import { ImageModal } from './ImageModal';
const CardImage = ({ yearbookImage}: any) => {
  const [isLoading, setLoading] = useState(true);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
 <Skeleton isLoaded={yearbookImage!==null } >
      <Image onClick={onOpen} src={yearbookImage?yearbookImage:Img} alt="Student" className={`
          z-0
       w-full
        focus:ring-4 transform active:scale-[95%] transition-transform
              duration-700 ease-in-out group-hover:opacity-75
      
              ${
                isLoading
                  ? "scale-105 blur-xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} width={500} height={500}/>
   <ImageModal isOpen={isOpen} onOpenChange={onOpenChange} image={yearbookImage} />
</Skeleton>
  )
}

export default CardImage




