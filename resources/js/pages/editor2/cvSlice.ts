import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from 'nanoid'

const initialState =[
    {id:"perso"},
    {id:"edu"},
    {id:"exp"}
]
interface perso{
    photo:string,
    nom:string,
    prenom:string,
    tele:string,
    email:string,
    profile:string,
}
const cvslice = createSlice({
   name:'users',
   initialState,
   reducers:{
    setperso:(state,action)=>{
        const toupdate : any = state.find((cv)=>cv.id==='perso')
        toupdate.photo = action.payload.photo
        toupdate.nom = action.payload.nom
        toupdate.prenom = action.payload.prenom
        toupdate.tele = action.payload.tele
        toupdate.email = action.payload.email
        toupdate.profile = action.payload.profile
        console.log(toupdate)
    },
    setEdu:(state,action)=>{
        const toupdate : any = state.find((cv)=>cv.id==='edu')
        toupdate.institution = action.payload.institution
        toupdate.dateD = action.payload.dateD
        toupdate.dateF = action.payload.dateF
        toupdate.eduDesc = action.payload.eduDesc
        console.log(toupdate)
    },
    setExp:(state,action)=>{
        const toupdate : any = state.find((cv)=>cv.id==='exp')
        toupdate.pos = action.payload.pos
        toupdate.location = action.payload.location
        toupdate.dateD = action.payload.dateD
        toupdate.dateF = action.payload.dateF
        toupdate.workDesc = action.payload.workDesc
        console.log(toupdate)
    },
   }
})
export const {setperso,setEdu,setExp} = cvslice.actions
export default cvslice.reducer