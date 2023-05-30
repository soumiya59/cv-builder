import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const expSlice = createSlice({
   name:'exp',
   initialState,
   reducers:{
    setExp:(state,action)=>{
        const toupdate : any = state
        toupdate.data = action.payload
    },
   }
})
export const {setExp} = expSlice.actions
export default expSlice.reducer