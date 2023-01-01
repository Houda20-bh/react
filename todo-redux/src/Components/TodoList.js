import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((el) => (
        <Todo todo={el} key={el.id} />
      ))}
    </div>
  );
}

export default TodoList;