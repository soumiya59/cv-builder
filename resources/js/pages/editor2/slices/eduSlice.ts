import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const eduSlice = createSlice({
   name:'edu',
   initialState,
   reducers:{
    setEdu:(state,action)=>{
        const toupdate : any = state
        toupdate.data = action.payload
    },
   }
})
export const {setEdu} = eduSlice.actions
export default eduSlice.reducer