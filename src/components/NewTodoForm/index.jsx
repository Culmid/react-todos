import React, { useState } from "react";
import styles from "./NewTodoForm.module.css";

function NewTodoForm({ onAddNewTodo }) {
  const [title, setTitle] = useState("");

  function onTitleChange(event) {
    setTitle(event.currentTarget.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onAddNewTodo(title);
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewTodoForm;
