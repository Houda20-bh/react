import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Rating } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {upDateBook} from '../Redux/bookSlice';


function UpDate() {
    const navigate=useNavigate();
    const params=useParams();
    const{books} =useSelector((state)=>state.book);
     const dispatch=useDispatch();
    const MyBook=books.filter((el)=>el.id===params.id);
    const[upDatedBook,setupDatedBook]=
    useState({id:MyBook[0].id,title: MyBook[0].title,discription:MyBook[0].discription,
        author: MyBook[0].author,rating:MyBook[0].rating});
    console.log(upDatedBook);
    const handleChange=(e)=>{
      e.preventDefault();
      setupDatedBook({...upDatedBook,[e.target.name]:e.target.value})
    };
    const upBook=()=>{
        dispatch(upDateBook({id:params.id,upDatedBook:upDatedBook}));
         navigate('/')
    }
    
        return (
        <div>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Update Your BooK</Form.Label>
       <br></br>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name='title' defaultValue={MyBook[0].title} onChange={handleChange} />
        <Form.Label>Discription</Form.Label>
        <Form.Control type="text" name='discription' defaultValue={MyBook[0].discription} onChange={handleChange}/>
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" name='author' defaultValue={MyBook[0].author} onChange={handleChange} />
        <Form.Text className="text-muted">
        <i>"Books may well be the only true magic." Alice Hoffman</i>
        </Form.Text>
      </Form.Group>
      <Rating
  name="simple-controlled"
  max={10}
  defaultValue={MyBook[0].rating}
  onChange={(e,newValue) => {
    setupDatedBook({...upDateBook,rating:newValue})
  }}
/>
      <Button variant="primary" onClick={upBook}>
      Modify
      </Button>
    </Form>
        </div>
    )
}

export default UpDate;
