import { ITodo } from "../types/todos";

export const addNewTodo = (todos: ITodo[], curTodo: ITodo, newTodo: string) => {
  const result = [];

  let flag = false;

  const { day, month, year } = curTodo;

  for (const todo of todos) {
    if (todo.day === day && todo.month === month && todo.year === year) {
      result.push({ ...todo, listTodos: [...todo.listTodos, newTodo] });
      flag = true;
    } else {
      result.push(todo);
    }
  }
  const newRecord = { ...curTodo, listTodos: [...curTodo.listTodos, newTodo] };
  return flag ? result : [...result, newRecord];
};
