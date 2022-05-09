export type TodoType = {
  id: number;
  title: string;
  isComplete: boolean;
  background: string;
  color: string;
};

export const initialState: TodoType[] = [
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

export const reducer = (
  state: TodoType[],
  action: {
    type: string;
    payload?:
      | { title: string; background: string; color: string }
      | { id: number };
  }
) => {
  switch (action.type) {
    case "addTodo":
      if (action.payload && !("id" in action.payload)) {
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
      }
      throw Error("Illegal addTodo format");
    case "deleteTodo":
      if (action.payload && "id" in action.payload) {
        console.log("deleteTodo", action.payload.id);
        return state.filter(
          (todo) =>
            action.payload &&
            "id" in action.payload &&
            todo.id !== action.payload.id
        );
      }
      throw Error("Illegal deleteTodo format");
    case "resetTodos":
      console.log("resetTodos");
      return initialState;
    case "toggleTodo":
      if (action.payload && "id" in action.payload) {
        console.log("toggleTodo", action.payload.id);
        return state.map((todo) =>
          action.payload &&
          "id" in action.payload &&
          todo.id === action.payload.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        );
      }
      throw Error("Illegal toggleTodo format");
    default:
      throw Error("Unrecognized reducer action type");
  }
};
