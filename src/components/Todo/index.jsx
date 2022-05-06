import React from "react";
import styles from "./Todo.module.css";

function Todo({ id, title, isComplete, onDeleteTodo }) {
  function onDeleteClick(id) {
    onDeleteTodo(id);
  }

  return (
    <div className={styles["todo-wrapper"]}>
      <h3>{title}</h3>
      <div>
        <button>O</button>
        <button onClick={() => onDeleteClick(id)}>X</button>
      </div>
    </div>
  );
}

export default Todo;
