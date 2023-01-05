
import { useSelector } from 'react-redux';
import './App.css';
 import Add from "./Components/Add.jsx";
 import Filter from "./Components/Filter";
 import TodoList from "./Components/TodoList";
function App() {
  const {todos} = useSelector((state) => state.todo); 
  const { FilterItems } = useSelector((state) => state.todo);
  return (
    <div className="App">
      <header className="App-header">
        <p><i>A positive attitude and hard work are the dream team.</i></p>
        <br></br>
        <h2><i>My TODO LIST</i></h2>
        <Filter />
      <br />
        <Add></Add>
        <TodoList todos={
          FilterItems === "Done"
            ? todos.filter((el) => el.isDone === true)
            : FilterItems === "Undone"
            ? todos.filter((el) => el.isDone === false)
            : todos
        }></TodoList>
      </header>
    </div>
  );
}

export default App;
