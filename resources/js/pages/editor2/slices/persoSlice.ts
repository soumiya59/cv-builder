import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const persoSlice = createSlice({
   name:'users',
   initialState,
   reducers:{
    setperso:(state,action)=>{
        const toupdate : any = state
        toupdate.image = action.payload.image
        toupdate.nom = action.payload.nom
        toupdate.prenom = action.payload.prenom
        toupdate.tele = action.payload.tele
        toupdate.email = action.payload.email
        toupdate.profile = action.payload.profile
    },
   }
})
export const {setperso} = persoSlice.actions
export default persoSlice.reducer