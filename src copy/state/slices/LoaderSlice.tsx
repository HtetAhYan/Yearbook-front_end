import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Landing: false,
    Hero: false,
  
}
export const LoaderSlice = createSlice({
    initialState,
    name: "Loader",
    reducers: {
        setLanding: (state) => {
            state.Landing = true
        
        },
        setHero: (state) => {
            state.Hero = true
        
        }
    
    }

})
export const { setLanding, setHero } = LoaderSlice.actions
export default LoaderSlice.reducer