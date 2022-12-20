
import Form from 'react-bootstrap/Form';
import { Rating } from '@mui/material';
import React from 'react';
function Filter({defaultRate,getSearch,getRate})
{
    const handleChangeTitle=(e)=>
    {
        getSearch(e.target.value);
    }
    return(
        <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control onChange={handleChangeTitle}
                type="text" name="title"
                placeholder="Enter Your title"
                autoFocus
              />
            </Form.Group>
            <Rating
  name="simple-controlled" max={10} defaultValue={defaultRate}
  onChange={(event,newValue)=>{getRate(newValue)}}/>

        </div>
    );
}
export default Filter;