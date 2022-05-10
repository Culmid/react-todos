import React, { useReducer, useState } from "react";
import Todo from "../Todo";
import styles from "./TodoList.module.css";
import { initialState, reducer, TodoType } from "../../reducers/todos";
import NewTodoForm from "../NewTodoForm";
import { FiPlus, FiRefreshCw } from "react-icons/fi";

function TodoList(): JSX.Element {
  const [state, dispatch]: [
    TodoType[],
    React.Dispatch<{
      type: string;
      payload?:
        | { title: string; background: string; color: string }
        | { id: number }
        | undefined;
    }>
  ] = useReducer<
    (
      state: TodoType[],
      action: {
        type: string;
        payload?:
          | {
              title: string;
              background: string;
              color: string;
            }
          | {
              id: number;
            }
          | undefined;
      }
    ) => TodoType[]
  >(reducer, initialState);
  const [isFormVisible, setFormVisible]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  function onAddNewTodo(
    title: string,
    background: string,
    color: string
  ): void {
    dispatch({
      type: "addTodo",
      payload: { title, background, color },
    });
    setFormVisible(false);
  }

  function onDeleteTodo(id: number): void {
    dispatch({ type: "deleteTodo", payload: { id } });
  }

  function onResetButtonClick(): void {
    dispatch({ type: "resetTodos" });
  }

  function onAddTodoClick(): void {
    setFormVisible(true);
  }

  function onToggleTodo(id: number): void {
    dispatch({ type: "toggleTodo", payload: { id } });
  }

  function onFormExit(): void {
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
      {state.find((todo: TodoType) => !todo.isComplete) ? (
        <div>
          <h2 className={styles["list-header"]}>To Do</h2>
          <div>
            {state
              .filter((todo: TodoType) => !todo.isComplete)
              .map(({ id, title, isComplete, background, color }: TodoType) => (
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
      {state.find((todo: TodoType) => todo.isComplete) ? (
        <div>
          <h2 className={styles["list-header"]}>Completed</h2>
          <div>
            {state
              .filter((todo: TodoType) => todo.isComplete)
              .map(({ id, title, isComplete, background, color }: TodoType) => (
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
