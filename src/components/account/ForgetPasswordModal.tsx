import React, { useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { setCode, setEmail, setStep } from '@/state/features/passwordForgotSlice';
import { useChangePasswordByOtpMutation, useResetPasswordMutation, useVerifyResetCodeMutation } from '@/state/features/AuthApiSlice';
import toast from 'react-hot-toast';

const ForgetPasswordModal = ({ isOpen, onOpenChange,onClose }: any) => {


  const [passwords, setPasswords] = useState({ newPassword: "", confirmPassword: "" })
  const initialState = useSelector((state: RootState) => state.forgotPassword)
  const [resetPassword, { isLoading: resetPasswordLoading }] = useResetPasswordMutation()
  const [verifyCode, { isLoading: verifyPasswordLoading }] = useVerifyResetCodeMutation()
  const [changePassword, { isLoading: changePasswordLoading }] = useChangePasswordByOtpMutation()
  const dispatch = useDispatch();
 
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} placement='center'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 h1 text-black">Reset Your Password</ModalHeader>
            <ModalBody>
              {initialState.step === 1 ? (
                <Input value={initialState.email} className='h1 text-black' label="Your Email" type="email" onChange={(e) => dispatch(setEmail(e.target.value))} />
              ) : initialState.step === 2 ? (
                <div className='flex flex-col gap-1'>
                  <Input className='h1 text-black' label="Code" type="Number" value={initialState.code} onChange={(e) => dispatch(setCode(e.target.value))} />
                  <h1 className='h1 text-red-600 cursor-pointer '>Send Again</h1>
                </div>
              ) : initialState.step === 3 ? (
                <ConfirmPassword setPasswords={setPasswords} passwords={passwords} />
              ) : null}
            </ModalBody>
            <ModalFooter>
              <Button className={`${initialState.step === 1 ? 'hidden' : ''}`} color="danger" variant="light" onClick={() => dispatch(setStep(initialState.step - 1))}>
                back
              </Button>
              <Button  isDisabled={initialState.step === 1 && !initialState.email|| initialState.step === 2 && !initialState.code} isLoading={resetPasswordLoading || verifyPasswordLoading || changePasswordLoading} color="primary" className='p-2' onClick={() => handler({ value: initialState, dispatch, resetPassword, verifyCode, passwords,changePassword,onClose })}>
                {initialState.step === 3 ? 'Submit' : 'Next'}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default ForgetPasswordModal
export const ConfirmPassword = ({ setPasswords }: any, { passwords }: any) => {
  console.log(passwords);
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords((prevPasswords: any) => ({
      ...prevPasswords,
      newPassword: e.target.value,
    }));
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords((prevPasswords: any) => ({
      ...prevPasswords,
      confirmPassword: e.target.value,
    }));
  };
  return (
    <>
      <Input onChange={handleNewPasswordChange}
        value={passwords?.newPassword} className='h1 text-black' label="New Password" type="password" />
      <Input onChange={handleConfirmPasswordChange}
        value={passwords?.confirmPassword} className='h1 mt-2 text-black' label="Confirm New Password" type="password" />
    </>
  )
}
const verifyPassword = async ({ email, code, verifyCode, dispatch }: any) => {
  const res = await verifyCode({ email, otp: code }).unwrap()
  console.log(res);
  res && res === true ? (toast.success("Code Verified")
    , dispatch(setStep(3))) : (toast.error("Code Not Verified"))
}
const handler = async ({ value, dispatch, resetPassword, verifyCode, passwords,changePassword ,onClose}: any) => {
  if (value.step === 1) {
    const res: any = await resetPassword({ email: value.email })
    console.log(res);
    if (res && res?.data?.error === true) {
      toast.error(res?.data?.status)
    } if (res && res?.data?.error === false) {
      toast.success(res?.data?.status)
      dispatch(setStep(2))
    }
  }
  if (value.step === 2) {
    verifyPassword({ email: value.email, code: value.code, verifyCode, dispatch })
  }
  if (value.step === 3) {
    console.log(passwords);
    const checkedPassword = checkEqual(passwords.newPassword, passwords.confirmPassword);
    if (checkedPassword === true) {
      const res = await changePassword({ email: value.email,otp: value.code, password: passwords.newPassword })
      console.log(res);
      toast.success(res?.error?.data || "Password Changed");
      dispatch(setStep(1));
      onClose();

    }
  }
}

const checkEqual = (password: string, confirmPassword: string) => {
  if (password.length >= 8 && password === confirmPassword) { return true } else {
    toast.error("Fill passwords correctly")
    return false;
  }
}