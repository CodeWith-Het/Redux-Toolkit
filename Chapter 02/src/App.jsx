import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increatement,
  decreatement,
  increasByFive,
  increasPayLoad,
} from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(5)

  return (
    <div>
      <h1>{selector}</h1>
      <button
        onClick={() => {
          dispatch(increatement());
        }}
      >
        increatement
      </button>
      <button
        onClick={() => {
          dispatch(decreatement());
        }}
      >
        decreatement
      </button>

      {/* input section */}
      <input type="text"
      value={num} 
      onChange={(e)=>{
        setNum(e.target.value)
      }}
      />

      <button
        onClick={() => {
          dispatch(increasByFive());
        }}
      >
        increas By 5
      </button>
      <button
        onClick={() => {
          dispatch(increasPayLoad(Number(num)));
        }}
      >
        Increas By PayLoad
      </button>
    </div>
  );
};

export default App;
