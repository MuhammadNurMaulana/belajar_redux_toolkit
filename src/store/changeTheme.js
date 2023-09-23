import { createSlice } from "@reduxjs/toolkit";

export const changeTheme = createSlice({
  name: "changeTheme",
  initialState: {
    theme: false,
  },
  reducers: {
    changeBgTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { changeBgTheme } = changeTheme.actions;
