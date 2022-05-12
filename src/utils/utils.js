const SERVER_URL = process.env.REACT_APP_TODO_SERVER_URL;

async function getTodos() {
  try {
    const todos = await fetch(`${SERVER_URL}/api/todos`);
    const data = await todos.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function addTodo(todo) {
  try {
    const response = await fetch(`${SERVER_URL}/api/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function updateTodo(todo) {
  try {
    const response = await fetch(`${SERVER_URL}/api/todo/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodo(id) {
  try {
    const response = await fetch(`${SERVER_URL}/api/todo/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo };
