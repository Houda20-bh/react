
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Todocard=({todo})=> {
   
    const {id,title,completed}=todo;
    const navigate=useNavigate();
    return (
        <>
        <div style={{backgroundColor:"green"
        ,margin:'10px', padding:'15px',width:'150px'}}
        onClick={() => navigate(`/todo/${id}`)}>

           <h5><i>{title}</i></h5> 
           <h5><i>{`completed:${completed}`}</i></h5> 
        </div>
        </>
    )
}

export default Todocard;
