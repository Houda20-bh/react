import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import React from 'react';

function MovieCard({data})
{
    return(
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data.posterurl} />
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>
      {data.discription}
      </Card.Text>
      <Button variant="primary">Rate me</Button>
      <Rating name="read-only" value={data.rating} max={10} readOnly />
    </Card.Body>
  </Card>
  </>

    );
}
export default MovieCard;