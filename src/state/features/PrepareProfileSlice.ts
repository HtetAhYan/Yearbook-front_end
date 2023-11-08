import { createSlice } from "@reduxjs/toolkit"

const initialState = {
/*     step: 1, */
   /*  PrepareInputs: [
        {
            id: 1,
            label: "Campus Name",
            type: "select",
            api: "campus",
            value: "",
        },
        {
            id: 2,
            label: "Academic Year",
            type: "select",
            api: "academicYear",
            value: "",
            
        },
        { id: 3, label:"status",type:"text",api:"status",value:""},
       
      
    ],  docs: [
            {id:1}
        ], */
/*     input: { label: "Full Name", type: "text", api: "fullName", value: "" }, */
    profile:null
}
export const PrepareProfileSlice = createSlice({
    initialState,
    name: "PrepareProfile",
    reducers: {
       
       /*  setInput: (state, action) => {
            state.input = action.payload
        }, */
        setProfile: (state, action) => {
            state.profile = action.payload
        },
    }
})
export const {/*  setInput, */ setProfile } = PrepareProfileSlice.actions
export default PrepareProfileSlice.reducer