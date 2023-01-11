import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import React from "react";


const Todo = () => { 
 const { id } = useParams();
const [todoDetails, setTodoDetails] = useState();
axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {  
    setTodoDetails(res.data); })
console.log(todoDetails);
const { id: todoId, userId, title, completed } = todoDetails;
return (
  <>
    {todoDetails ? (
      <div>
        <h1> {`Todo id: ${todoId}`} </h1>
        <h1> {`Todo userId: ${userId}`} </h1>
        <h1> {`Todo title: ${title}`} </h1>
        <h1> {`Todo completed: ${completed}`} </h1>
      </div>
    ) : ( <CircularProgress/> )}
  </>);
};

export default Todo ;