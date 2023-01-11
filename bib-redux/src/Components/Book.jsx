
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import {deleteToBib} from '../Redux/bookSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Book({book}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleDelete =(e)=>{
      e.preventDefault();
      dispatch(deleteToBib(book.id));
  };
    return (
        <div>
      
            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={book.urlImg} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
        {book.discription}
        </Card.Text>
        <Card.Title>{book.author}</Card.Title>
        <Rating name="read-only" value={book.rating} max={10} readOnly />
       <Button variant="primary" onClick= {handleDelete}>Delete</Button>
       <Button variant="primary" onClick= {()=>navigate(`/book/${book.id}`)}>Update</Button>
      </Card.Body>
    </Card>
        </div>);
}

export default Book;
