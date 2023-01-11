
import axios from 'axios';
import './App.css';
import React, { useState} from "react";

function App() {
  const[joke,setJoke]= useState("");
  const getJoke=()=>{
    axios.get("https://official-joke-api.appspot.com/random_joke").then((res) => {
      setJoke(res.data.setup+"...."+res.data.punchline);
    });
  };
  console.log(joke)
  return (
    <div className="App">
      <header className="App-header">
       
    <p><i>He who laughs, lasts." Mary Pettibone Poole</i></p>
    <br></br>
    <button   style={{
        backgroundColor: "pink",
        margin: "10px",
        padding: "15px",
        width: "150px",
borderRadius:"30%",
      }}
       onClick={getJoke}> Get a joke</button>
   <br></br>
   <h5><i>{joke}</i></h5>
      </header>
    </div>
  );
}

export default App;
