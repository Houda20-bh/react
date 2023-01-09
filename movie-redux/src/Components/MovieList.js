import React from 'react';
import Movie from './Movie';

function MovieList({data}) {
    return (
        <div>
       {data.map((el)=><Movie movie={el} key={el.id}/>)} 
        </div>
    )
}

export default MovieList;
