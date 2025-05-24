import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    user: {},
  },
  reducers: {
    handleUser: (state, action) => {
      state.user = action.payload;
    },
  },
});


export const { handleUser } = formSlice.actions;
export default formSlice.reducer;
