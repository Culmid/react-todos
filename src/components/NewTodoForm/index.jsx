import React, { useState } from "react";
import styles from "./NewTodoForm.module.css";

function NewTodoForm({ onAddNewTodo }) {
  const [title, setTitle] = useState("");
  const [background, setBackground] = useState("#c4c4c4");

  function onTitleChange(event) {
    setTitle(event.currentTarget.value);
  }

  function onBackgroundChange(event) {
    setBackground(event.currentTarget.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onAddNewTodo(title, background);
  }

  return (
    <form className={styles.modal} onSubmit={onFormSubmit}>
      <h1>Add Todo</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onTitleChange}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="background">Background:</label>
        <input
          type="color"
          name="background"
          value={background}
          onChange={onBackgroundChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewTodoForm;
