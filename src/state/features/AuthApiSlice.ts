import baseApi from "./baseApi";

export const authApiSlice = baseApi.injectEndpoints({
 overrideExisting:true,
  
  endpoints: (builder) => ({
    register: builder.mutation({
        query: (credentials) => {
            
        return {
          url: 'v1/auth/register',
          method: 'POST',
           headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
          body: JSON.stringify(credentials),
        }
        },
    }),
    requestOtp:builder.mutation({
        query: (email) => {
            console.log('email',email);
        return {
          url: `v1/auth/register/request-otp/${email}`,
          method: 'POST',
           headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },

        }
        },
    }),
    verifyOtp:builder.mutation({
      query: ( {mail,otp}) => {
        console.log('mail',otp);
        return {
          url: `v1/auth/verify/${mail}`,
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
    }),
    resetPassword: builder.mutation({
      query: ({ email }) => {
        return {
          url: 'v1/auth/reset-password',
          method: 'PATCH',
          body: email
          ,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      }
    })

    ,verifyResetCode: builder.mutation({
      query: ({ email, otp }) => {
        console.log(email, otp)
        return {
          url: 'v1/auth/verify-reset-mail/' + "htetahyan@gmail.com",
          method: 'PATCH',
          body: otp.toString()
          ,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      }
    }),
     changePasswordByOtp: builder.mutation({
      query: ({ email, otp, password }) => {
        return {
          url: `v1/auth/change-passwordByOtp/${email}/${otp}`,
          method: 'PATCH',
          body: password
          ,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      }
     })
  }),
});

export const { useRegisterMutation,useRequestOtpMutation,useVerifyOtpMutation,useLoginMutation,useResetPasswordMutation,useVerifyResetCodeMutation,useChangePasswordByOtpMutation } = authApiSlice;
