import { configureStore } from "@reduxjs/toolkit";
import resumeInfoReducer from "../features/resumeInfo";

export default configureStore({
  reducer: {
    resumeInfo: resumeInfoReducer,
  },
});
