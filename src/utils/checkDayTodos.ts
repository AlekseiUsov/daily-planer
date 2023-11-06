import { ITodo } from "../types/todos";

export const checkDayTodos = (
  todos: ITodo[],
  day: number,
  month: string,
  year: number
) => {
  for (const todo of todos) {
    if (todo.day === day && todo.month === month && todo.year === year) {
      return todo.listTodos;
    }
  }
  return [];
};
