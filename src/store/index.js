import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { showNavSlice } from "./showNavSlice";
import { changeTheme } from "./changeTheme";
import { usersSlice } from "./usersSlice";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    showNavSlice: showNavSlice.reducer,
    changeTheme: changeTheme.reducer,
    usersSlice: usersSlice.reducer,
  },
});
