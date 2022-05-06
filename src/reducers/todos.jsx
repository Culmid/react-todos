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
      console.log("addTodo");
      return state;
    case "deleteTodo":
      console.log("deleteTodo", action.payload.id);
      return state.filter((todo) => todo.id !== action.payload.id);
    case "resetTodo":
      console.log("resetTodos");
      return state;
    default:
      throw Error("Unrecognized reducer action type");
  }
};
