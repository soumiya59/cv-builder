import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./slice";

export default configureStore({
  reducer: {
    resume: resumeReducer,
  },
});
