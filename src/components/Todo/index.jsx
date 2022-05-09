import React from "react";
import styles from "./Todo.module.css";
import { FiCheckCircle, FiCircle, FiTrash } from "react-icons/fi";

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
      <div className={styles["button-container"]}>
        <button className={styles.button} onClick={() => onToggleTodo(id)}>
          {isComplete ? <FiCheckCircle /> : <FiCircle />}
        </button>
        <button className={styles.button} onClick={() => onDeleteClick(id)}>
          <FiTrash />
        </button>
      </div>
    </div>
  );
}

export default Todo;
