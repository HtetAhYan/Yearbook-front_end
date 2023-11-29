import { useDeleteCardByIdMutation } from '@/state/features/EssentialApiSlice'
import { RootState } from '@/state/store'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'

export const DeleteModal = ({ user_id,card_id }: any) => {
    const user = useSelector((state: RootState) => state.auth.user)
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [deleteCard] = useDeleteCardByIdMutation()
    const handleDelete = async () => { 
       const res= await deleteCard({user_id,card_id}) 
    }
  return (
      <div>    {user?.id === user_id && <Button
          onPress={onOpen}
      
        isIconOnly  className="absolute top-0 z-50 right-0 bg-inherit bg-opacity-0 w-[30px] rounded-full h-[30px]">
          <RiDeleteBin5Fill className='text-red-700 bg-opacity-0' /></Button>}
<Modal isOpen={isOpen} placement='center' backdrop='blur' onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black h1 font-medium ">Are you sure?</ModalHeader>
              <ModalBody>
                <p className='text-black h1 font-medium'> 
              Are you sure you want to delete this Card?
                </p>
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onClick={handleDelete}  className='p-2' onPress={onClose}>
               Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
  )
}
