import React, { useReducer, useState } from "react";
import Todo from "../Todo";
import styles from "./TodoList.module.css";
import { initialState, reducer } from "../../reducers/todos";
import NewTodoForm from "../NewTodoForm";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFormVisible, setFormVisible] = useState(false);

  function onAddNewTodo(title, background) {
    dispatch({
      type: "addTodo",
      payload: { title: title, background: background },
    });
    setFormVisible(false);
  }

  function onDeleteTodo(id) {
    dispatch({ type: "deleteTodo", payload: { id: id } });
  }

  function onResetButtonClick() {
    dispatch({ type: "resetTodos" });
  }

  function onAddTodoClick() {
    setFormVisible(true);
  }

  function onToggleTodo(id) {
    dispatch({ type: "toggleTodo", payload: { id: id } });
  }

  return (
    <>
      <div className={styles["buttons-div"]}>
        <button className={styles.button} onClick={onResetButtonClick}>
          Reset
        </button>
        <button className={styles.button} onClick={onAddTodoClick}>
          Add Todo
        </button>
      </div>
      <div>
        <h2>To Do</h2>
        <div>
          {state
            .filter((todo) => !todo.isComplete)
            .map(({ id, title, isComplete, background }) => (
              <Todo
                key={id}
                id={id}
                title={title}
                isComplete={isComplete}
                background={background}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
              />
            ))}
        </div>
      </div>
      <div>
        <h2>Completed</h2>
        <div>
          {state
            .filter((todo) => todo.isComplete)
            .map(({ id, title, isComplete, background }) => (
              <Todo
                key={id}
                id={id}
                title={title}
                isComplete={isComplete}
                background={background}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
              />
            ))}
        </div>
      </div>
      {isFormVisible ? <NewTodoForm onAddNewTodo={onAddNewTodo} /> : null}
    </>
  );
}

export default TodoList;
