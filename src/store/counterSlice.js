import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 30,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {},
});
