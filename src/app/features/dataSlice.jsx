import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
  error: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action) {
      console.log(action, "Actions Datatas");
      if (Array.isArray(action.payload)) {
        state.data = action.payload;
      } else {
        console.log("Payload Must be an array");
      }
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
