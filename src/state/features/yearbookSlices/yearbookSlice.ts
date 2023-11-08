import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState={
    year: ['2023', '2022'],
    filter:['All','Most Liked','Newest','Oldest','Name A-Z','Name Z-A'],
    campus: ['purle', 'morado']
    , grade: ['Year-1', 'Year-2', 'Year-3', 'Year-4', 'Year-5', 'Year-6', 'Year-7', 'Year-8', 'Year-9', 'Year-10', 'Year-11', 'Year-12']
    ,keyword:null
}
export const yearbookSlice = createSlice({
    name: 'yearbook',
    initialState,
    reducers: {
        setYear: (state:any, action: PayloadAction<any>) => {
            state.year = action.payload
        },
        setCampus: (state:any, action: PayloadAction<any>) => {
            state.campus = action.payload
        },
        setGrade: (state:any, action: PayloadAction<any>) => {
            state.grade = action.payload
        },
        setKeyword: (state:any, action: PayloadAction<any>) => {
            state.keyword = action.payload
        }
    }
})
export const { setYear, setCampus, setGrade, setKeyword } = yearbookSlice.actions
export default yearbookSlice.reducer