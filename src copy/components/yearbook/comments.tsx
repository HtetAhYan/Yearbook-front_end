import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { LiaCommentDotsSolid } from 'react-icons/lia'

import CommentInput from './CommentInput'
import { Comment } from "./CommentModal";
import { useGetCommentsQuery } from "@/state/features/baseApi";
import { BiLoader } from 'react-icons/bi'
import toast from "react-hot-toast";
export default function Comments({ cardId,name }: any) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [query, setQuery] = useState({
    id: cardId,
    page: 0,
    limit: 10
  })

  const { data, isLoading } = useGetCommentsQuery(isOpen ? query : undefined);
  const Loadmore = () => {

    const newLimit = query.limit + 10;

    data && data.comments.length === data.total ? toast.error("No more comments") : setQuery({ id: cardId, page: 0, limit: newLimit });

  }




  return (
    <div className="relative  w-[50%] flex justify-center">
      <Button radius="none"

        className="p- bg-inherit  text-black h1   font-medium" onPress={onOpen} startContent={<LiaCommentDotsSolid className='text-2xl' />}>
        Comments
      </Button>
      <Modal
        scrollBehavior="inside"

        className="min-h-[80vh] w-screen laptop:w-[50vw] overflow-scroll  text-black"
        size="xl"
        backdrop="opaque"
        isOpen={isOpen}

        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold">{ name}</ModalHeader>
              <ModalBody className="border-t-4 relative">

                {/*  <Skeleton className="flex rounded-3xl w-[200px] h-[30px]"/>
      */}
                {data && data.comments.length > 0 ? data.comments?.map((comment: any, index: number) => (

                  <Comment key={index} comment={comment} />
                )) : <p className="text-center h1 font-semibold">No comments yet</p>}
                {data && data.comments.length > 0 && <div className="flex justify-center items-center ">
                  <Button variant="faded" className={` p-1`} color="default" isLoading={isLoading} endContent={<BiLoader />}
                    onClick={Loadmore}
                  >
                    Load more
                  </Button>
                </div>}
              </ModalBody>
              <ModalFooter className="shadow-2xl">
                <CommentInput card_id={cardId} />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
{/*           */ }