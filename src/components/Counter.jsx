import { useDispatch, useSelector } from "react-redux";
import { addAmount, decrement, increment } from "../store/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterSlice);
  return (
    <div className="mt-10">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button className="mt-4 border rounded-md border-slate-900 px-2" onClick={() => dispatch(increment())}>
        increment
      </button>
      <button className="mt-4 border rounded-md border-slate-900 px-2" onClick={() => dispatch(decrement())}>
        decrement
      </button>
      <button className="mt-4 border rounded-md border-slate-900 px-2" onClick={() => dispatch(addAmount(5))}>
        Add + 5
      </button>
    </div>
  );
};
