import "./Todo.css";

export default function Todo({
  onAddTodo,
  onInputChange,
  newTodo,
  todos,
  onDelete,
  taskUp,
  taskDown,
}) {
  return (
    <>
      <h1>Your favorite Todo App</h1>
      <div className="todo-controls">
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={onInputChange}
        />
        <button className="add-btn" onClick={onAddTodo}>
          Add a todo
        </button>
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <li className="single-item" key={index}>
            <span className="todo-text">{todo}</span>
            <button className="delete-btn" onClick={() => onDelete(index)}>
              Delete Task
            </button>
            <button className="moveup-btn" onClick={() => taskUp(index)}>
              Priority Up
            </button>
            <button className="moveup-btn" onClick={() => taskDown(index)}>
              Priority Down
            </button>
          </li>
        ))}
      </div>
    </>
  );
}
