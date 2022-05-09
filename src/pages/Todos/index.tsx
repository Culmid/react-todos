import TodoList from "../../components/TodoList";
import styles from "./Todos.module.css";

function Todos() {
  return (
    <div className={styles["todo-container"]}>
      <TodoList />
    </div>
  );
}

export default Todos;
