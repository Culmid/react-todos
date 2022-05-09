import React, { useReducer, useState } from "react";
import Todo from "../Todo";
import styles from "./TodoList.module.css";
import { initialState, reducer } from "../../reducers/todos";
import NewTodoForm from "../NewTodoForm";
import { FiPlus, FiRefreshCw } from "react-icons/fi";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFormVisible, setFormVisible] = useState(false);

  function onAddNewTodo(title, background, color) {
    dispatch({
      type: "addTodo",
      payload: { title: title, background: background, color: color },
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

  function onFormExit() {
    setFormVisible(false);
  }

  return (
    <>
      <div className={styles["buttons-div"]}>
        <button className={styles.button} onClick={onResetButtonClick}>
          <FiRefreshCw />
        </button>
        <button className={styles.button} onClick={onAddTodoClick}>
          <FiPlus />
        </button>
      </div>
      {state.find((todo) => !todo.isComplete) ? (
        <div>
          <h2>To Do</h2>
          <div>
            {state
              .filter((todo) => !todo.isComplete)
              .map(({ id, title, isComplete, background, color }) => (
                <Todo
                  key={id}
                  id={id}
                  title={title}
                  isComplete={isComplete}
                  background={background}
                  color={color}
                  onDeleteTodo={onDeleteTodo}
                  onToggleTodo={onToggleTodo}
                />
              ))}
          </div>
        </div>
      ) : null}
      {state.find((todo) => todo.isComplete) ? (
        <div>
          <h2>Completed</h2>
          <div>
            {state
              .filter((todo) => todo.isComplete)
              .map(({ id, title, isComplete, background, color }) => (
                <Todo
                  key={id}
                  id={id}
                  title={title}
                  isComplete={isComplete}
                  background={background}
                  color={color}
                  onDeleteTodo={onDeleteTodo}
                  onToggleTodo={onToggleTodo}
                />
              ))}
          </div>
        </div>
      ) : null}
      {state.length === 0 ? <h2>No Todos...</h2> : null}
      {isFormVisible ? (
        <NewTodoForm onAddNewTodo={onAddNewTodo} onFormExit={onFormExit} />
      ) : null}
    </>
  );
}

export default TodoList;
