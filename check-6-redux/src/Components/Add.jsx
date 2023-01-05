import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Addtodo } from "../Redux/TodoSlice";
const Add = () => {
  const [value, setvalue] = useState("");
  const dispatch = useDispatch();
  const addHandler = (e) => {
    e.preventDefault();
    dispatch(Addtodo({ id: Math.random(), task: value, isDone: false }));
    setvalue("");
  };
  return (
    <form onSubmit={addHandler}>
      <input
        type="text"
        placeholder="enter your todo please ..."
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Add;