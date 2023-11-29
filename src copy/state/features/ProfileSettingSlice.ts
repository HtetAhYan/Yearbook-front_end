import { createSlice } from '@reduxjs/toolkit';

const initialState={
    profileURL: null,
    fullName: null,
    confirmPassword: '',
}
export const ProfileSettingSlice = createSlice({
    name: 'profileSetting',
    initialState,
    reducers: {
        setProfileURL: (state, action) => {
            state.profileURL = action.payload
        },
        setFullName: (state, action) => {
            state.fullName = action.payload
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload
        },
    },
})
export const { setProfileURL, setFullName, setConfirmPassword } = ProfileSettingSlice.actions
export default ProfileSettingSlice.reducer