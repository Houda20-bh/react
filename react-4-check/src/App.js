
import './App.css';
import MovieList from './Components/MovieList';
import data from "./Components/Data";
import AddMovie from './Components/AddMovie';
import { useState } from 'react';
import Filter from './Components/Filter';

function App() {
  const[newData, setNewData]=useState(data)
  const Adding=(newMovie)=>
  {
    setNewData([...newData,newMovie]) ;
  };
  const[search, setSearch]=useState("");
  const [rating, setRating]=useState(0);
  return (
    <div className="App">
      <br></br>
      <br></br>
      <h3>
“When your life flashes before your eyes at the end, make sure it's a good movie you're watching.”.</h3>
      <br></br>
      <Filter defaultRate={rating} getSearch={setSearch} getRate={setRating}/>
      <br></br>
      <AddMovie Adding={Adding}/>
      <br></br>
      <br></br>
      <MovieList data={newData.filter((e)=>e.title.trim().toLocaleLowerCase().includes(search)&& e.rating>= rating)}></MovieList>
      <br></br>
    </div>
  );
}

export default App;
