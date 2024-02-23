import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCount, DecCount } from "../../Store/Slices/counterSlice";
const Home = () => {


  const Count = useSelector((state) => state.counterSliceReducer);
  console.log("Count", Count.Counter);
  const dispatch = useDispatch();


  return (
    <>
      <h1>COUNTER : {Count.Counter} </h1>
      <button onClick={() => dispatch(AddCount())}>Inc</button>
      <button onClick={() => dispatch(DecCount())}>Dec</button>
    </>
  );
};

export default Home;
