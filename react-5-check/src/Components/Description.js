import React from "react";
import { useParams } from "react-router-dom";
import data from "./Data";
import ReactPlayer from 'react-player';
 function Description()
 {
    let {id}=useParams();
    let myMovie=data.filter((el)=>el.id===id);
    return(
        <div>

<h1>This is Discription</h1>
{myMovie.map((el)=><div>
<h4>Read Description:</h4>
<h5>{el.title}</h5>
<h5>{el.discription}</h5>
<h4>watch the trailer</h4>
<ReactPlayer url={el.videoUrl}/>

</div>)}


        </div>
    );
 }
 export default Description;