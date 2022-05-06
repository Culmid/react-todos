import React, { useReducer, useState } from "react";
import Todo from "../Todo";
import styles from "./TodoList.module.css";
import { initialState, reducer } from "../../reducers/todos";
import NewTodoForm from "../NewTodoForm";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFormVisible, setFormVisible] = useState(false);

  function onAddNewTodo(title) {
    dispatch({ type: "addTodo", payload: { title: title } });
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
      {isFormVisible ? <NewTodoForm onAddNewTodo={onAddNewTodo} /> : null}
    </>
  );
}

export default TodoList;
