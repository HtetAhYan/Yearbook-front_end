import { createSlice } from "@reduxjs/toolkit"

const initialState={
    email: '',
    step: 1,
    code: '',
    
}
export const passwordForgotSlice=createSlice({
    name: 'passwordForgot',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setStep: (state, action) => {
            state.step = action.payload
        },
        setCode: (state, action) => {
            state.code = action.payload
        }
    }
})
export const { setEmail, setStep,setCode } = passwordForgotSlice.actions
export default passwordForgotSlice.reducer