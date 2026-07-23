import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from './Slice/counter.slice.js';

const App = () => {

  const dispatch = useDispatch()
  const num=useSelector((state)=>state.counter.value)

  return (
    <div className="counting">
      <h1>{num}</h1>
      <div className="buttons">
        <button onClick={() => {
          dispatch(increament())
        }}>increament</button>
        <button onClick={() => {
          dispatch(decreament())
        }}>decreament</button>
      </div>
    </div>
  );
}

export default App;
