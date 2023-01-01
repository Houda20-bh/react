import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
  // State Hook - `useState`
  const [newTask, setNewTask]= useState("");
  const handleChange=(e) => {setNewTask(e.target.value);}
  const [tasklist,setTaskList]=useState([]);
  
  const task = {
    id:uuidv4(),
    task:newTask,
  };

  const addTask= ()=>{setTaskList([...tasklist,task])
    setNewTask ('');
    ;}
    const handleDelete= ({id})=>{
      setTaskList(tasklist.filter((el)=>el.id!==id));
    }
  
  return (
    <div className="app">
      {/* 1. Header  */}
      <h1>My Todo List</h1>

      {/* 2. Add new item (input) */}
      <input
        type="text" value= {newTask}
        placeholder="Add an task..."
        onChange={handleChange}
      />
 

      {/* Add (button) */}
      <button onClick={addTask}>Add</button>

      {/* 3. List of todos (unordered list) */}
      <ul>{tasklist.map((el)=><li key={el.id} > {el.task}  
                < button onClick={()=>handleDelete(el)}> ❌</button>
              </li> ) }
                   
      </ul>
    </div>
  );
}

export default App;

