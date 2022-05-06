import React, { useReducer } from "react";
import Todo from "../Todo";
import styles from "./TodoList.module.css";
import { initialState, reducer } from "../../reducers/todos";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onDeleteTodo(id) {
    dispatch({ type: "deleteTodo", payload: { id: id } });
  }

  function onResetButtonClick() {
    dispatch({ type: "resetTodos" });
  }

  return (
    <>
      <div className={styles["buttons-div"]}>
        <button className={styles.button} onClick={onResetButtonClick}>
          Reset
        </button>
      </div>
      <div>
        <h2>To Do</h2>
        <div>
          {state
            .filter((todo) => !todo.isComplete)
            .map(({ id, title, isComplete }) => (
              <Todo
                key={id}
                id={id}
                title={title}
                isComplete={isComplete}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
        </div>
      </div>
      <div>
        <h2>Completed</h2>
        <div>
          {state
            .filter((todo) => todo.isComplete)
            .map(({ id, title, isComplete }) => (
              <Todo
                key={id}
                id={id}
                title={title}
                isComplete={isComplete}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
