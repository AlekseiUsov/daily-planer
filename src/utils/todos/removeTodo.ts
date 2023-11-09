import { IDayTodos } from "../../types/todos";

export const removeTodo = (days: IDayTodos[], id: string): IDayTodos[] => {
  const result: IDayTodos[] = [];
  for (const day of days) {
    const listTodos = [...day.listTodos].filter((el) => el.id !== id);
    result.push({ ...day, listTodos });
  }
  return result;
};
