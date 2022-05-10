import React, { useState } from "react";
import styles from "./NewTodoForm.module.css";
import { FiX } from "react-icons/fi";

function NewTodoForm({
  onAddNewTodo,
  onFormExit,
}: {
  onAddNewTodo: (title: string, background: string, color: string) => void;
  onFormExit: () => void;
}): JSX.Element {
  const [title, setTitle]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");
  const [background, setBackground]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("#c4c4c4");
  const [color, setColor]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("#000000");

  function onTitleChange(event: React.FormEvent<HTMLInputElement>): void {
    setTitle(event.currentTarget.value);
  }

  function onBackgroundChange(event: React.FormEvent<HTMLInputElement>): void {
    setBackground(event.currentTarget.value);
  }

  function onColorChange(event: React.FormEvent<HTMLInputElement>): void {
    setColor(event.currentTarget.value);
  }

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onAddNewTodo(title, background, color);
  }

  return (
    <form className={styles.modal} onSubmit={onFormSubmit}>
      <h1>Add Todo</h1>
      <label htmlFor="title">Title</label>
      <input
        className={styles["form-input"]}
        type="text"
        name="title"
        value={title}
        onChange={onTitleChange}
        required
      ></input>
      <label htmlFor="background">Background</label>
      <input
        className={styles["form-input"]}
        type="color"
        name="background"
        value={background}
        onChange={onBackgroundChange}
        required
      />
      <label htmlFor="color">Colour</label>
      <input
        className={styles["form-input"]}
        type="color"
        name="color"
        value={color}
        onChange={onColorChange}
        required
      />
      <button className={styles.button} type="submit">
        Submit
      </button>
      <button className={styles.exit} type="button" onClick={onFormExit}>
        <FiX />
      </button>
    </form>
  );
}

export default NewTodoForm;
