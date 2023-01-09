
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMovie} from '../Store/movieSlice';
function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    const[newMovie,setNewMovie]=useState({
        id:Math.random(),
        title:'',
        discription:'',
        posterurl:'',
    });
    const handleChange=(e)=>{
        setNewMovie(
         {...newMovie,[e.target.name]:e.target.value})
    
        }
       
        const addNewMovie= (e)=>
        {
            e.preventDefault();
            dispatch( addMovie(newMovie));
            handleClose();
        }
    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
      Movie details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Film Title</Form.Label>
              <Form.Control
              name='title'
                type="text"
                placeholder="enter your film title"
                autoFocus
                onChange={handleChange}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>discription</Form.Label>
              <Form.Control
                 name='discription'
                type="text"
                placeholder="enter your film description"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Url</Form.Label>
              <Form.Control
              name='posterurl'
                type="text"
                placeholder="Enter your Url Please"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Rating
  name="simple-controlled"
  value={null}
  max={10}
  onChange={(e,newValue) => {
    setNewMovie({...newMovie,rating:newValue})
  }}
/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );

}
export default  Add;
