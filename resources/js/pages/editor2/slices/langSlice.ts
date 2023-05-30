import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const langSlice = createSlice({
   name:'lang',
   initialState,
   reducers:{
    setLang:(state,action)=>{
        const toupdate : any = state
        toupdate.data = action.payload
    },
   }
})
export const {setLang} = langSlice.actions
export default langSlice.reducer