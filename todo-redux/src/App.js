import { useSelector } from "react-redux";
import "./App.css";
import Add from "./Components/Add";
import TodoList from "./Components/TodoList";

function App() {
  const { todos } = useSelector((state) => state.todo);

  return (

    <div className="App">
      <br></br>
      <p><i>"Many of life's failures are people who did not realize how close they were to success when they gave up." - Thomas Edison
</i></p>
<br></br>
      <h2>TODO LIST</h2>
      <Add />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
