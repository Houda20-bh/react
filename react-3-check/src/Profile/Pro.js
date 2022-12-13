import React from "react";
function Pro (props)
{
    return (<div>
        <p> My name is:  {props.fullname}</p>
        <p> Bio : {props.bio} </p>
        <p> Profession : {props.profession} </p>
        <button onClick={props.fun}>Alert </button>
         {props.children}
    </div>);

}
export default Pro;