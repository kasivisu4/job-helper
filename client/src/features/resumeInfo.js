import { createSlice } from "@reduxjs/toolkit";

export const resumeInfoSlice = createSlice({
  name: "resumeInfo",
  initialState: {
    value: null,
  },
  reducers: {
    updateResume: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateResume } = resumeInfoSlice.actions;

export default resumeInfoSlice.reducer;
