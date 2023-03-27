import { configureStore } from '@reduxjs/toolkit'
import cvSlice from './cvSlice'

export const store = configureStore({
  reducer: {
    cv: cvSlice,
  },
})