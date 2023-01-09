import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import {deleteMovie,} from '../Store/movieSlice';
import { useNavigate } from 'react-router-dom';

function Movie({movie}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleDelete=(e)=>{
          e.preventDefault();
          dispatch(deleteMovie(movie.id));
    };
   
    return (
        <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterurl} />
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
      {movie.discription}
      </Card.Text>
      <Rating name="read-only" value={movie.rating} max={10} readOnly />
      <Button variant="primary" onClick={()=>navigate(`/movie/${movie.id}`)}>Update</Button>
      <Button variant="primary"  onClick={handleDelete}>Delete</Button>
      
  </Card>
  </div>
      );
}

export default Movie;
