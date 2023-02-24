import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import dataSlice from "./features/dataSlice";
// import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    user: authSlice,
  },
});

export default store;
