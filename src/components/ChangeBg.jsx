import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBgTheme } from "../store/changeTheme";

export const ChangeBg = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.changeTheme);
  return (
    <>
      <div className="mt-10">ChangeBg</div>

      <button className="my-4 border rounded-md border-slate-900 px-2" onClick={() => dispatch(changeBgTheme())}>
        ChangeThemeBgColor
      </button>

      <p className={`p-8 transition-all duration-500 ${theme ? "bg-slate-950 text-white transition-all duration-500" : ""}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quos.</p>
    </>
  );
};
