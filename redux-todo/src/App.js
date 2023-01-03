
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
function App() {

  return (
    <div className="App">
      <header className="App-header">
     <p><i>"Many of life's failures are people who did not realize how close they were to success when they gave up." - Thomas Edison</i></p>   
      <br></br>
      <h1>My Todo List</h1>
      <AddTodoForm></AddTodoForm>
      <TodoList></TodoList>
     
      </header>
    </div>
  );
}

export default App;


