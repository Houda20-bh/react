import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteTodo, Completetodo,Edittodo} from "../Redux/TodoSlice";
import UpdateForm from "./UpdateForm";

function Todo({todo}) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };
  const completeHandler = () => {
    dispatch(Completetodo(todo.id));
  };
  const editHandler = () => {
    dispatch(Edittodo(todo.id));
  };
    return (
        <ul>
          {todo.isDone ? (
        <div style={{ color: "pink" }}>{todo.task} </div>
      ) : (
        <div style={{ color: "yellow" }}> {todo.task} </div>
      )}

      <div>{todo.isEdited && <UpdateForm todotask={todo.task} todoid={todo.id} />}
          <button onClick={deleteHandler}> delete </button>
          <button onClick={completeHandler}>
          {todo.isDone ? <div style={{ color: "red" }}> Undone </div>: <div style={{ color: "green" }}> Done </div>}
        </button>
        <button onClick={editHandler}>Edit</button>
        </div>
        </ul>
      );
}

export default Todo;
