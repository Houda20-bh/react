
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import {addToBib} from '../Redux/bookSlice';

function AddBook() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    const[newBook,setNewBook]=useState({
        id:uuidv4(),
        title:'',
        discription:'',
        author:'',
        urlImg:'',
    })
    const handleChange= (e)=>{
        
        setNewBook({...newBook,[e.target.name]:e.target.value})
    }

    const addNewBook=(e)=>
    {
      e.preventDefault();
      dispatch(addToBib(newBook));
      handleClose();
    }
    console.log(newBook);
    return (
        <div>
           <Button variant="primary" onClick={handleShow}>
       Add a New Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Infos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="Text"
                name='title'
                placeholder="Enter Your Book Title.."
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>discription</Form.Label>
              <Form.Control
                type="Text"
                name='discription'
                placeholder="Enter Your Book Overview.."
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="Text"
               name='author'
                placeholder="Enter Your author name."
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="Text"
                name='urlImg'
                placeholder="Enter Your url image.."
                autoFocus
                onChange={handleChange}
              />
            </Form.Group> 
          </Form>
        </Modal.Body>
        <Rating
  name="simple-controlled"
  max={10}
  value={null}
  onChange={(e,newValue) => {
    setNewBook({...newBook,rating:newValue})
  }}
/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
        </div>
    )
}

export default AddBook;
