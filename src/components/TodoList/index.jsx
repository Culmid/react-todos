import React, { useState } from "react";
import Todo from "../Todo";
import "./TodoList.module.css";

const initialTodos = [
  {
    id: 0,
    title: "Clean dishes",
    isComplete: false,
  },
  {
    id: 1,
    title: "Take out trash",
    isComplete: false,
  },
  {
    id: 2,
    title: "Feed pets",
    isComplete: true,
  },
];

function TodoList() {
  const [todos, setTodos] = useState(() => initialTodos);

  return (
    <>
      <div>
        <h2>To Do</h2>
        <div>
          {todos
            .filter((todo) => !todo.isComplete)
            .map(({ id, title, isComplete }) => (
              <Todo id={id} title={title} isComplete={isComplete} />
            ))}
        </div>
      </div>
      <div>
        <h2>Completed</h2>
        <div>
          {todos
            .filter((todo) => todo.isComplete)
            .map(({ id, title, isComplete }) => (
              <Todo id={id} title={title} isComplete={isComplete} />
            ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
