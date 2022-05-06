import React, { useReducer } from "react";
import Todo from "../Todo";
import "./TodoList.module.css";
import { initialState, reducer } from "../../reducers/todos";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h2>To Do</h2>
        <div>
          {state
            .filter((todo) => !todo.isComplete)
            .map(({ id, title, isComplete }) => (
              <Todo id={id} title={title} isComplete={isComplete} />
            ))}
        </div>
      </div>
      <div>
        <h2>Completed</h2>
        <div>
          {state
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
