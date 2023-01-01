import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/TodoSlice";

function Todo({todo}) {
    const dispatch = useDispatch();
     
    const handleDelete = () => {
		dispatch(deleteTodo({ id:todo.id}));
	};
  return <div>{todo.task} 
   <button onClick={handleDelete}>delete</button>
  </div>;
}

export default Todo;