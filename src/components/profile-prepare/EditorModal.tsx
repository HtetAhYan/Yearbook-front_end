import React, { useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { CircleStencil, Cropper, CropperRef, FixedCropper, ImageRestriction, RectangleStencil } from "react-advanced-cropper";

import 'react-advanced-cropper/dist/style.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { usePostProfileMutation } from "@/state/features/baseApi";
import { setUser } from "@/state/features/AuthSlice";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
export default function App({ selectedFile, isOpen, onOpen, onOpenChange,path }: any) {
    const dispatch = useDispatch()
    const router=useRouter()
    const cropperRef = useRef<CropperRef>(null);
const [upload,{isLoading}]=usePostProfileMutation()
    const user = useSelector((state: RootState) => state.auth.user)
   
    
    return (
        <>

            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                placement="center"
                onOpenChange={onOpenChange}
                className="overflow-scroll  text-black"
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
                            y: -20,
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
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <FixedCropper
                                    ref={cropperRef}

                                    src={URL.createObjectURL(selectedFile)}

            
    stencilSize={{
        width: 500,
        height: 500
    }}
    imageRestriction={ImageRestriction.stencil}
                                    className={'cropper'}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Change
                                </Button>
                                <Button color="primary" onPress={() => onCrop({cropperRef,user,upload,dispatch,router,path})}>
                                   Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

const onCrop = ({cropperRef,user,upload,dispatch,router,path}:any) => {
        console.log(user);
        toast.loading("Updating profile",{duration:2000})
        if (cropperRef.current) {
            fetch(cropperRef.current.getCanvas()?.toDataURL() || "")
                .then(response => response.blob())
                .then(async(blob )=> {
                    const file = new File([blob], `${user?.fullName}'s_avatar`);
                    if(path!=='create'){
           const response = await upload({ id: user?.id, file })
                   
                   console.log(response);
                   
                    if (response.error) {
                        toast.error(response.error.status+"Access denied" || "Network error")

                 }else{
                        toast.success("Successfully updated profile")
                        dispatch(setUser(response?.data))
                        router.push('/profile')
                    }
                    }else{
                        toast.success("Successfull profile")
           
                    }
                  
                      //File object
                })
        }
    };