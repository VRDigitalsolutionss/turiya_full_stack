import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/formSlice";

const store = configureStore({
  reducer: {
    formReducer: formReducer,
  },
});

export default store;
