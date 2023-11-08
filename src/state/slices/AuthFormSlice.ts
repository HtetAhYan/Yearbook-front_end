
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    current: 
        1,
    register: [
        {
            id: 1,
            label: 'full Name',
            value: null,
            api: 'fullName'
        },
        {
            id: 2,
            label: 'Email',
            value: null,
            api: 'email'
        },
        {
            id: 3,
            label: 'Password',
            value: null,
            api: 'password'
        },
        {
            id: 4,
            label: 'Password comfirmation',
            value: null,
            api: 'passwordConfirm'
        }
    ],
    login: [
        {
            id: 1,
            label: 'Email',
            value: null,
            api: 'email'
        }, {
            id: 2,
            label: 'Password',
            value: null,
            api: 'password'
        }
    ]
}
const authFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        setCurrent: (state, action:PayloadAction<any>) => {
               state.current = action.payload;
},addDatas: (state, action:PayloadAction<any>) => {
 const fieldLabelToUpdate = action.payload.id;
            const updatedValue = action.payload.value;
            const fieldToUpdate = state.register.find((field:any) => field.id === fieldLabelToUpdate);
            if (fieldToUpdate) {
                fieldToUpdate.value = updatedValue;
            }
}
    },
})
export const {addDatas,setCurrent} = authFormSlice.actions
export default authFormSlice.reducer;