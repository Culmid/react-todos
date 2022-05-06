export const initialState = [
  {
    id: 0,
    title: "Clean dishes",
    isComplete: false,
  },
  {
    id: 1,
    title: "Take out trash",
    isComplete: false,
  },
  {
    id: 2,
    title: "Feed pets",
    isComplete: true,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      console.log("addTodo", action.payload.title);
      const newTodos = [...state];
      const newId = Math.floor(Math.random() * 9999999);
      newTodos.push({
        id: newId,
        title: action.payload.title,
        isComplete: false,
      });
      return newTodos;
    case "deleteTodo":
      console.log("deleteTodo", action.payload.id);
      return state.filter((todo) => todo.id !== action.payload.id);
    case "resetTodos":
      console.log("resetTodos");
      return initialState;
    default:
      throw Error("Unrecognized reducer action type");
  }
};
