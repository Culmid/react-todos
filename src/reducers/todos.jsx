export const initialState = [
  {
    id: 0,
    title: "Clean dishes",
    isComplete: false,
    background: "#c4c4c4",
    color: "#000000",
  },
  {
    id: 1,
    title: "Take out trash",
    isComplete: false,
    background: "#c4c4c4",
    color: "#000000",
  },
  {
    id: 2,
    title: "Feed pets",
    isComplete: true,
    background: "#c4c4c4",
    color: "#000000",
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      console.log(
        "addTodo",
        action.payload.title,
        action.payload.background,
        action.payload.color
      );
      const newTodos = [...state];
      const newId = Math.floor(Math.random() * 9999999);
      newTodos.push({
        id: newId,
        title: action.payload.title,
        isComplete: false,
        background: action.payload.background,
        color: action.payload.color,
      });
      return newTodos;
    case "deleteTodo":
      console.log("deleteTodo", action.payload.id);
      return state.filter((todo) => todo.id !== action.payload.id);
    case "resetTodos":
      console.log("resetTodos");
      return initialState;
    case "toggleTodo":
      console.log("toggleTodo", action.payload.id);
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    default:
      throw Error("Unrecognized reducer action type");
  }
};
