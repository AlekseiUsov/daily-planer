import { IDayTodos } from "../../types/todos";

export const changeStatusTodo = (
  days: IDayTodos[],
  id: string
): IDayTodos[] => {
  const result: IDayTodos[] = [];
  for (const day of days) {
    const listTodos = [...day.listTodos].map(
      (el) => (el = el.id === id ? { ...el, isDone: !el.isDone } : el)
    );
    result.push({ ...day, listTodos });
    console.log(result);
  }
  return result;
};
