import './App.css';
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>Task App</h1>
          {<AddTodo/>}
          {<TodoList/>}
      </div>

    </div>
  );
}

export default App;
