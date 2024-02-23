import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCount, DecCount } from "../../Store/Slices/counterSlice";

const Home = () => {
  const [Count, setCount] = useState("");
console.log(Count)
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.counterSliceReducer);
  console.log(selector)
//   setCount(selector);//yha sykrna hy agy

  return (
    <>
      <div>
        <h1>{}</h1>
      </div>
      <button onClick={() => dispatch(AddCount())}>Inc</button>
      <button onClick={() => dispatch(DecCount())}>Dec</button>
    </>
  );
};

export default Home;
