import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export function fetchUsers() {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(setUsers(res.data));
        // const currenState = getState();
        // console.log(currenState);
        // console.log(res.data, "<<< ini data ");
        // dispatch(setUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
