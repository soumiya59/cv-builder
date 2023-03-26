import { createSlice } from "@reduxjs/toolkit"

const initialState =[
    {id:"perso", data:[{},{}]},
    {id:"edu" , data:[]},
    {id:"exp"}
]
const cvslice = createSlice({
   name:'users',
   initialState,
   reducers:{
    setperso:(state,action)=>{
        const toupdate : any = state.find((cv)=>cv.id==='perso')
        toupdate.image = action.payload.image
        toupdate.nom = action.payload.nom
        toupdate.prenom = action.payload.prenom
        toupdate.tele = action.payload.tele
        toupdate.email = action.payload.email
        toupdate.profile = action.payload.profile
    },
    setEdu:(state,action)=>{
        const toupdate : any = state.find((cv)=>cv.id==='edu')
        toupdate.data = action.payload
    },
    setExp:(state,action)=>{
        const toupdate : any = state.find((cv)=>cv.id==='exp')
        toupdate.data = action.payload
    },
   }
})
export const {setperso,setEdu,setExp} = cvslice.actions
export default cvslice.reducer