import  { useState }from "react";
import axios from "axios";
import Todocard from "./Todocard";

const Todos = () => {
  const [todos, setTodos] = useState();
 axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {  
      setTodos(res.data); });
  console.log(todos);
  return (
    <>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.slice(0, 10).map((todo) => (
            <Todocard key={todo.id} todo={todo} />
          ))}
        </div>
    
    </>
  );
};

export default Todos;

