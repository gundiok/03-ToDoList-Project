import { useState } from "react";
import "./App.css";
import Todo from "./Todo.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function AddTodo() {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  }

  function deleteTodo(index) {
    const updatedTasks = todos.filter((todo, i) => i !== index);
    setTodos(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...todos];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index]
      ];
      setTodos(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < todos.length - 1) {
      const updatedTasks = [...todos];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTodos(updatedTasks);
    }
  }

  return (
    <Todo
      onAddTodo={AddTodo}
      onInputChange={handleChange}
      todos={todos}
      newTodo={newTodo}
      onDelete={deleteTodo}
      taskUp={moveTaskUp}
      taskDown={moveTaskDown}
    />
  );
}

export default App;
