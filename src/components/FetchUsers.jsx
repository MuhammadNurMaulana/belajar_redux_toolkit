import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersSlice";

export const FetchUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersSlice);

  return (
    <div className="mt-10">
      <h2>Fetch Users</h2>
      <button onClick={() => dispatch(fetchUsers())}>Click For Fetch Users</button>

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};
