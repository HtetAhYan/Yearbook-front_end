
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Year: null,
    image: null,
 
    status: '',
    campus: 'morado',
    grade: 'Year 1',
    border:'christmas'
    
}

export const cardStructureSlice = createSlice({
    name: 'cardStructure',
    initialState,
    reducers: {
        setYear: (state, action) => {
            state.Year = action.payload
        },
        setYearBookImage: (state, action) => {
            state.image = action.payload
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
export const { setYear, setYearBookImage, setStatus, setCampus, setGrade, setBorder } = cardStructureSlice.actions
export default cardStructureSlice.reducer

