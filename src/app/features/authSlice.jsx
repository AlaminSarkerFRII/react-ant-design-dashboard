import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isError: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      console.log(action, "Actions usertas");
      state.user = action.payload;
    },
  },
});

export const { getUser } = authSlice.actions;

export default authSlice.reducer;
