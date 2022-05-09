import React from "react";
import styles from "./Todo.module.css";

function Todo({
  id,
  title,
  isComplete,
  background,
  onDeleteTodo,
  onToggleTodo,
}) {
  function onDeleteClick(id) {
    onDeleteTodo(id);
  }

  return (
    <div className={styles["todo-wrapper"]} style={{ background: background }}>
      <h3>{title}</h3>
      <div>
        <button className={styles.button} onClick={() => onToggleTodo(id)}>
          {isComplete ? "C" : "O"}
        </button>
        <button className={styles.button} onClick={() => onDeleteClick(id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Todo;
