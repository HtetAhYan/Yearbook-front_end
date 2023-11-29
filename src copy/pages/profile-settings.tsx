import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { Button, Input, useDisclosure } from '@nextui-org/react'
import { RouteProtector } from '@/security/ProtectRoutes'
import { setConfirmPassword, setFullName } from '@/state/features/ProfileSettingSlice'
import { useRefreshUserInfoMutation, useSaveSettingsMutation } from '@/state/features/EssentialApiSlice'
import toast from 'react-hot-toast'
import dynamic from 'next/dynamic'
const Uploader = dynamic(() => import('@/components/profile-prepare/CustomFileUploader'), { loading: () => <div>loading</div> })
const BackBtn = dynamic(() => import('@/components/general/BackBtn'), { loading: () => <div>loading</div> })
import { useRouter } from 'next/router'
import { setUser } from '@/state/features/AuthSlice'
const ForgetPasswordModal = dynamic(() => import('@/components/account/ForgetPasswordModal'), { loading: () => <div>loading</div>})

const profileSettings = () => {
  const setting = useSelector((state: RootState) => state.settings)
  const FullName = useSelector((state: RootState) => state.auth.user?.fullName)
  const dispatch = useDispatch()
  const [save, { isLoading }] = useSaveSettingsMutation();
  const [refreshUser] = useRefreshUserInfoMutation();
    const {isOpen, onOpen, onOpenChange,onClose} = useDisclosure();
  const router=useRouter()
  return (
    
      <div className='h-screen flex flex-col justify-center items-center background-search shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
     <BackBtn />
      <div className='w-[95%]  laptop:w-[40%] p-2 bg-neutral-200 min-h-[30%] rounded-lg grid '>
         <div  className=''> <label className="cursor-pointer text-black h1 font-semibold">Change To New Profile </label>
      <Uploader path="settings" /></div><div>
          <label className="cursor-pointer text-black h1 font-semibold">Name </label>
      
          <Input  defaultValue={FullName} label="" onChange={(e) => {dispatch(setFullName(e.target.value)) }}  />    </div>
        <div>
          <label className="cursor-pointer text-black h1 font-semibold">Confirmation Password </label>
      
          <Input    onChange={(e) => {dispatch(setConfirmPassword(e.target.value)) }} type="password" value={setting?.confirmPassword} label="" />    </div>
          <h1 onClick={onOpen} className='text-red-600 pointer-cursor h1'>Forgot Password?</h1> <div className='flex justify-end mt-2'>
       <ForgetPasswordModal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}/>
        <Button isLoading={isLoading} onClick={() => saveSettings({save,dispatch,setting,FullName,router,refreshUser})}   isDisabled={setting?.confirmPassword==="" || isLoading} className='p-2'>Save</Button></div>
      </div>
         </div>
  )
}

export default profileSettings
export const getServerSideProps = RouteProtector();

const saveSettings = async ({ save, dispatch, setting, FullName, router, refreshUser }: any) => {
  try {
    let file;

    if (setting.profileURL) {
      const response = await fetch(setting.profileURL);
      const blob = await response.blob();
      file = new File([blob], `${FullName}_${Math.floor(Math.random() * 999999)}_profile`, { type: blob.type });
   
    }

    const saveResponse = await save({ file, fullName: setting.fullName, password: setting.confirmPassword }).unwrap();

    if (saveResponse === true) {
      toast.success("Successfully updated profile Settings");
      const user = await refreshUser();
      dispatch(setUser(user.data));
      dispatch(setConfirmPassword(''));

      router.push('/yearbook');
    } else {
      toast.error(saveResponse || "Something went wrong. Check your password or try again later");
    }
  } catch (error) {
    // Handle errors appropriately
  }
};
