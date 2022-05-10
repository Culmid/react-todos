import styles from "./Todo.module.css";
import { FiCheckCircle, FiCircle, FiTrash } from "react-icons/fi";

function Todo({
  id,
  title,
  isComplete,
  background,
  color,
  onDeleteTodo,
  onToggleTodo,
}: {
  id: number;
  title: string;
  isComplete: boolean;
  background: string;
  color: string;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}) {
  function onDeleteClick(id: number) {
    onDeleteTodo(id);
  }

  return (
    <div className={styles["todo-wrapper"]} style={{ background, color }}>
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
