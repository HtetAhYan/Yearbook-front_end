
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export const onSubmitOtp = async (e: React.FormEvent,isOtpComplete:any,otp:any,verifyOtp:any,dispatch:any,currentData:any,router:any) => {
    e.preventDefault();

    if (isOtpComplete) {
        console.log('OTP Submitted:', otp.join(''));

        try {
            const response = await verifyOtp({ mail: currentData.email, otp: otp.join('') });
            console.log(response);
            if (response?.data.success===false) {
              toast.error(response?.data?.error)
              
            } else {
              toast.success(response?.data?.error)
              router.replace('/')
            
          
            
            }
        } catch (error:any) {
            toast.error(error || "error");
        }
      // Perform further actions here
    } else {
      toast.error('Please fill in all OTP fields');
    }
  };