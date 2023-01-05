import React from 'react'
import Todo from "./Todo";
function TodoList({todos}) {
    return (
        <ul>
          {todos.map((el)=>(<Todo todo={el} key={el.id}/>))} 
        </ul>
    )
}

export default TodoList;
