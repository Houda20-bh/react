import React from "react";
import image from "./images.jpeg";
function Profile()
{
    return(<div>
        My Name is :<h2>Houda Ben Hattab</h2>
        My Goals : <h4>always be Happy and Grateful</h4>
        My beautiful Photo <img src={image}/>
    </div>);
}
export default Profile;