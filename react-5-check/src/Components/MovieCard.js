import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import React from 'react';
import './movie.css';
import { useNavigate } from 'react-router-dom';


function MovieCard({data})
{
  const navigate=useNavigate();
    return(
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data.posterurl} />
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>
      {data.discription}
      </Card.Text>
      <Button variant="primary" onClick={()=>navigate(`/movie/${data.id}`)}>Ckeck me</Button>
      <Rating name="read-only" value={data.rating} max={10} readOnly />
    </Card.Body>
  </Card>
  </div>
  

    );
}
export default MovieCard;