import { currentUser } from "@/state/features/AuthSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Year: {label: 'Current Year', value: ''},
    image: null,
    user: 'null',
    status: {label: 'Your status', value: ''},
    campus: {label: 'Your campus', value: ''},
    grade: {label: 'Your grade', value: ''},
    border:'border-gray-300'
    
}

export const cardStructureSlice = createSlice({
    name: 'cardStructure',
    initialState,
    reducers: {
        setYear: (state, action) => {
            state.Year = action.payload
        },
        setImage: (state, action) => {
            state.image = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setCampus: (state, action) => {
            state.campus = action.payload
        },
        setGrade: (state, action) => {
            state.grade = action.payload
        },
        setBorder: (state, action) => {
            state.border = action.payload
        }
    }
})
export const { setYear, setImage, setUser, setStatus, setCampus, setGrade, setBorder } = cardStructureSlice.actions
export default cardStructureSlice.reducer