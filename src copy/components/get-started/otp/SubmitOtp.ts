
import { setCredentials } from "@/state/features/AuthSlice";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export const onSubmitOtp = async (e: React.FormEvent,isOtpComplete:any,otp:any,verifyOtp:any,dispatch:any,currentData:any,router:any,error:any) => {
    e.preventDefault();
  if (error) {
    toast.error("error");
    return;

  
  } else {
    if (isOtpComplete) {
      try {
        const response = await verifyOtp({ mail: currentData.email, otp: otp.join('') });
        if (response?.data.success === false) {
          toast.error(response?.data?.error || "OTP verification failed");
        } else {
          toast.success(response?.data?.error || "OTP verified successfully");
          dispatch(setCredentials({ user: response?.data?.authenticationResponse?.user, token: response?.data?.authenticationResponse?.token }))
            router.push('/profile-prepare');;
            
          
            
        }
      } catch (error: any) {
        toast.error(error || "error");
      }
      // Perform further actions here
    } else {
      toast.error('Please fill in all OTP fields');
    }
  }
  };