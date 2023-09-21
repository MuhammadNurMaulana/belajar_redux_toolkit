import { useSelector } from "react-redux";

export const Counter = () => {
  const { counter } = useSelector((state) => state.counterSlice);
  return (
    <>
      <div>Counter</div>
      <p>Counter : {counter} </p>
    </>
  );
};
