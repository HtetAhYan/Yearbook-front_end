import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState={
    year: null,
    filter:null,
    campus: null,
    limit:null
    , grade: null
    , keyword: null
    , page: 0,

}
export const yearbookSlice = createSlice({
    name: 'yearbook',
    initialState,
    reducers: {
        setYear: (state:any, action: PayloadAction<any>) => {
            state.year = action.payload
            state.page = 0
        },
        setCampus: (state:any, action: PayloadAction<any>) => {
            state.campus = action.payload
              state.page = 0
        },
        setGrade: (state:any, action: PayloadAction<any>) => {
            state.grade = action.payload
              state.page = 0
        },
        setKeyword: (state:any, action: PayloadAction<any>) => {
            state.keyword = action.payload
              state.page = 0
        },
        setFilter: (state:any, action: PayloadAction<any>) => {
            state.filter = action.payload
              state.page = 0
        },setPage: (state:any, action: PayloadAction<any>) => {
            state.page = action.payload

        },setLimit: (state:any, action: PayloadAction<any>) => {
            state.limit = action.payload
              state.page = 0
        }
    }
})
export const { setYear, setCampus, setGrade, setKeyword, setFilter,setPage ,setLimit} = yearbookSlice.actions
export default yearbookSlice.reducer