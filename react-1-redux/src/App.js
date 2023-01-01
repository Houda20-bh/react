
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { increment,decrement,incrementByAmount } from './redux/counterSlice';

function App() {
  const {count}=useSelector((state)=> state.counter);
const dispatch=useDispatch();
const[number,setNumber]=useState();
const handleChange=(e)=>{
  setNumber(e.target.value);
};
  return (
    <div className="App">
      <p> this is {count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <p> Increment By <input onChange={handleChange}/></p>
      <button onClick={()=>dispatch(incrementByAmount(+number))}>Add</button>
     
    </div>
  );
}

export default App;
