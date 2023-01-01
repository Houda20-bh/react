
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtodo } from "../Redux/TodoSlice";

function Add(props) {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");
  const changeHandler = (e) => {
    setNewTodo(e.target.value);
  };
  const addHandler = (e) => {
   e.preventDefault();
   dispatch(Addtodo({ id: Math.random(), task: newTodo, isDone: false }));
     setNewTodo("");
   };
  return (
    <div>
      <form onSubmit={addHandler}>
        <input type="text" name="task" onChange={changeHandler} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Add;