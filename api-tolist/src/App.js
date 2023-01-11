
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Todo from './Components/Todo';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Todos/>}/>
          <Route path='/todo/:id'  element={<Todo/>}/>
        </Routes>
        </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
