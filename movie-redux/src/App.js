
import { useSelector } from 'react-redux';
import './App.css';
import Add from './Components/Add';
import MovieList from './Components/MovieList';
function App() {
  const {movies}=useSelector ((state)=>state.movie);
  return (
    <div className="App">
      <header className="App-header">
       <h3><i>Shine like the diamond you were born to be.</i></h3>
      <br></br>
    
      <Add/>
      <MovieList data={movies}/>
      </header>
    </div>
  );
}

export default App;
