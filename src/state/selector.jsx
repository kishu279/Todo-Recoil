import { selector } from "recoil";
import { todoFilter, todosList } from "./atoms";

// Selector for filtering todos based on completion status
export const filteredTodos = selector({
  key: "filteredTodos", // unique ID for the selector
  get: ({ get }) => {
    const allTodos = get(todosList);
    const filter = get(todoFilter);

    switch (filter) {
      case false:
        return allTodos.filter((todo) => !todo.isCompleted); // Filter incomplete todos
      case true:
        return allTodos.filter((todo) => todo.isCompleted); // Filter completed todos
      default:
        return allTodos; // No filter applied
    }
  },
});
