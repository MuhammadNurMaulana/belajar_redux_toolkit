import { createSlice } from "@reduxjs/toolkit";
export const showNavSlice = createSlice({
  name: "showNavSlice",
  initialState: {
    showNav: false,
  },
  reducers: {
    showNavToggle: (state) => {
      state.showNav = !state.showNav;
    },
  },
});

export const { showNavToggle } = showNavSlice.actions;
