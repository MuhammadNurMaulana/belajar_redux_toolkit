import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter < 15 ? (state.counter += 1) : state.counter;
    },
    decrement: (state) => {
      state.counter > 0 ? (state.counter -= 1) : state.counter;
    },
    addAmount: (state, action) => {
      if (state.counter < 15) {
        const newValue = state.counter + action.payload;
        state.counter = newValue > 15 ? 15 : newValue;
      }
    },
  },
});

export const { increment, decrement, addAmount } = counterSlice.actions;
