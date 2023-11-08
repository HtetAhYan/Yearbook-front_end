import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Skeleton, Avatar, User, Snippet} from "@nextui-org/react";
import { LiaCommentDotsSolid } from 'react-icons/lia'
import TimeAgo from 'timeago-react'; 
import HeartIcon from "./HeartIcon";
import CommentInput from './CommentInput'
import { Comment } from "./CommentModal";
export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="relative  w-[50%] flex justify-center">
          <Button radius="none" className="p-1 bg-inherit  text-black h1 font-medium" onPress={onOpen} startContent={<LiaCommentDotsSolid />}>
             Comments
      </Button>
      <Modal 
        scrollBehavior="inside"
      
              className="min-h-[80vh] w-screen laptop:w-[50vw] overflow-scroll  text-black"
     
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
              <ModalHeader className="flex flex-col gap-1 font-bold">Student's Name</ModalHeader>
              <ModalBody className="border-t-4">
      
       {/*  <Skeleton className="flex rounded-3xl w-[200px] h-[30px]"/>
      */}
                {commentUsers.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                ))}
              </ModalBody>
              <ModalFooter className="shadow-2xl">
          <CommentInput />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

const commentUsers = [{
  fullName: "John Doe",
  avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  comment: "I like it",
  date: "2022-01-01",
  likes: 10,


},

{
  fullName: "John Doe",
  avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  comment: "I like it",
  date: "2022-01-01",
  likes: 10,


},{
  fullName: "John Doe",
  avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  comment: "I like it, I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like itI like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like itI like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it ",
  date: "2022-01-01",
  likes: 10,


},

]
