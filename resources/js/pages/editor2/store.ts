import { configureStore } from '@reduxjs/toolkit'
import persoSlice from './slices/persoSlice'
import eduSlice from './slices/eduSlice'
import expSlice from './slices/expSlice'
import skillsSlice from './slices/skillsSlice'
import langSlice from './slices/langSlice'

export const store = configureStore({
  reducer: {
    perso: persoSlice,
    edu: eduSlice,
    exp: expSlice,
    skills: skillsSlice,
    lang: langSlice,
  },
})