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
}): JSX.Element {
  function onDeleteClick(id: number): void {
    onDeleteTodo(id);
  }

  return (
    <div className={styles["todo-wrapper"]} style={{ background, color }}>
      <h3 className={styles.header}>{title}</h3>
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
