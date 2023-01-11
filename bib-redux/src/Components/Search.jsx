import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import{ searchBook} from '../Redux/bookSlice';

function Search(props) {
    const[title,setTitle]=useState('');
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        setTitle(e.target.value);
        dispatch( searchBook(title));
    }
   
    // const handleSearch=(e)=>
    // {
    //     e.preventDefault();
    //     dispatch( searchBook(title));
    // };
    return (
        <div>
                <br></br>
                <input type="text" placeholder='your your title'  value ={title} onChange={handleChange}/>
                <br></br>
                <br></br>
           {/* <Button variant="secondary" size="lg" onClick={ handleSearch}>Search</Button> */}
           
      <br></br>
        </div>
    );
}

export default Search;
