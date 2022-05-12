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

export { getTodos };
