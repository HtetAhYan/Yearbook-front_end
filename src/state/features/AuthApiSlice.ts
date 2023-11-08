import baseApi from "./baseApi";

export const authApiSlice = baseApi.injectEndpoints({
 overrideExisting:true,
  
  endpoints: (builder) => ({
    register: builder.mutation({
        query: (credentials) => {
            
        return {
          url: 'v1/auth/register',
          method: 'POST',
         
   

          body: JSON.stringify(credentials),
        }
        },
    }),
    requestOtp:builder.mutation({
        query: (email) => {
            console.log('email',email);
        return {
          url: `/auth/register/request-otp/${email}`,
          method: 'POST',

        }
        },
    }),
    verifyOtp:builder.mutation({
      query: ( {mail,otp}) => {
        console.log('mail',otp);
        return {
          url: `/auth/verify/${mail}`,
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          body: JSON.stringify({otp:otp}),
          }
        }
    }),
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: 'v1/auth/authenticate',
          method: 'POST',
          
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },

          body: JSON.stringify(credentials),
        }
      }
    })
    ,
  }),
});

export const { useRegisterMutation,useRequestOtpMutation,useVerifyOtpMutation,useLoginMutation } = authApiSlice;
