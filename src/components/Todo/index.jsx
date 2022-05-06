import React from "react";
import styles from "./Todo.module.css";

function Todo({ id, title, isComplete }) {
  return (
    <div className={styles["todo-wrapper"]}>
      <h3>{title}</h3>
      <div>
        <button>O</button>
        <button>X</button>
      </div>
    </div>
  );
}

export default Todo;
