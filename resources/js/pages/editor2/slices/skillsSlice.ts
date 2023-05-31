import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const skillsSlice = createSlice({
   name:'skills',
   initialState,
   reducers:{
    setSkills:(state,action)=>{
        const toupdate : any = state
        toupdate.data = action.payload
    },
   }
})
export const {setSkills} = skillsSlice.actions
export default skillsSlice.reducer