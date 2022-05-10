import React, { useState } from "react";
import styles from "./NewTodoForm.module.css";
import { FiX } from "react-icons/fi";

function NewTodoForm({
  onAddNewTodo,
  onFormExit,
}: {
  onAddNewTodo: (title: string, background: string, color: string) => void;
  onFormExit: () => void;
}) {
  const [title, setTitle] = useState("");
  const [background, setBackground] = useState("#c4c4c4");
  const [color, setColor] = useState("#000000");

  function onTitleChange(event: React.FormEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value);
  }

  function onBackgroundChange(event: React.FormEvent<HTMLInputElement>) {
    setBackground(event.currentTarget.value);
  }

  function onColorChange(event: React.FormEvent<HTMLInputElement>) {
    setColor(event.currentTarget.value);
  }

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddNewTodo(title, background, color);
  }

  return (
    <form className={styles.modal} onSubmit={onFormSubmit}>
      <h1>Add Todo</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onTitleChange}
        required
      ></input>
      <label htmlFor="background">Background</label>
      <input
        type="color"
        name="background"
        value={background}
        onChange={onBackgroundChange}
        required
      />
      <label htmlFor="color">Colour</label>
      <input
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