import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/TodoSlice';
const AddTodoForm = () => {
    const[value,setvalue]=useState('');
     const dispatch = useDispatch();
     const addHandler = (e) => {
            e.preventDefault();
            dispatch(addTodo({ id: Math.random(), title: value, completed: false }));
          setvalue("");
  };
    return (
            <form onSubmit={addHandler}>
<input type='text' placeholder='enter your todo please ...' value={value}
onChange={(e)=>setvalue(e.target.value)}/>
<button type='submit'>Submit</button>
            </form>
 
    )
}

export default AddTodoForm;
