import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNavToggle } from "../store/showNavSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { showNav } = useSelector((state) => state.showNavSlice);

  return (
    <div className="mt-10">
      <h1>Navbar</h1>
      <button onClick={() => dispatch(showNavToggle())}>Click for show Nav</button>

      {showNav && <div className="mt-4 border rounded-md border-slate-900 px-2">Show Nav</div>}
    </div>
  );
};
