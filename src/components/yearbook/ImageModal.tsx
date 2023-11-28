import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const ImageModal = ({isOpen, onOpenChange,image}:React.PropsWithChildren<any>) => {
  return (
    <Modal 
        backdrop="blur" 
          isOpen={isOpen} 
          
          onOpenChange={onOpenChange}
          
        className=' bg-opacity-30 p-0 m-0'
        placement='center'
  
      >

           <ModalContent className='p-0 m-0'>
          {(onClose) => (
            <>
              
              <ModalBody className='w-[100v]'>
             <Image src={image} alt="image" width={1000} height={1000} />
              </ModalBody>
           
            </>
          )}
        </ModalContent>
      </Modal>
  )
}
