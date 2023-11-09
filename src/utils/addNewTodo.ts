import { IDayTodos } from "../types/todos";

export const addNewTodo = (
  todos: IDayTodos[],
  currentDay: IDayTodos,
  newTodo: string
) => {
  const result = [];

  let flag = false;

  const { day, month, year } = currentDay;

  for (const todo of todos) {
    if (todo.day === day && todo.month === month && todo.year === year) {
      result.push({
        ...todo,
        listTodos: [...todo.listTodos, { todo: newTodo, isDone: false }],
      });
      flag = true;
    } else {
      result.push(todo);
    }
  }
  const newRecord = {
    ...currentDay,
    listTodos: [...currentDay.listTodos, { todo: newTodo, isDone: false }],
  };
  return flag ? result : [...result, newRecord];
};
