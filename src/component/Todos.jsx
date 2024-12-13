import { useState } from "react";
import { useRecoilState } from "recoil";
import { todosList } from "../state/atoms";
import TodoCheck from "./TodoCheck.jsx";

export default function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useRecoilState(todosList);

  // Handle input change
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  // Add new todo
  function handleAddTodo() {
    if (input.trim() === "") return; // Prevent adding empty todos
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), title: input, isCompleted: false },
    ]);
    setInput("");
  }

  // Clear all todos
  function handleClearTodos() {
    setTodos([]);
  }

  // Toggle completion status of a todo
  function handleCheckComplete(todo) {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  }

  return (
    <main>
      <div>
        <input
          value={input}
          type="text"
          placeholder="Enter your todo..."
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Todos</button>
      </div>
      <div>
        Todos to Complete:
        <TodoCheck />
      </div>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleCheckComplete(todo)}
            />
            <ul>{todo.title}</ul>
          </div>
        ))}
      </div>
    </main>
  );
}
