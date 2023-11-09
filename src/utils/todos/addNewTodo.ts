import { IDayTodos } from "../../types/todos";

import uniqid from "uniqid";

export const addNewTodo = (
  todos: IDayTodos[],
  currentDay: IDayTodos,
  newTodo: string
) => {
  const result = [];

  let flag = false;

  const { day, month, year } = currentDay;

  for (const todo of todos) {
    console.log(todo);
    if (todo.day === day && todo.month === month && todo.year === year) {
      result.push({
        ...todo,
        listTodos: [
          ...todo.listTodos,
          { todo: newTodo, isDone: false, id: uniqid() },
        ],
      });
      flag = true;
    } else {
      result.push(todo);
    }
  }
  const newRecord = {
    ...currentDay,
    listTodos: [
      ...currentDay.listTodos,
      { todo: newTodo, isDone: false, id: uniqid() },
    ],
  };
  return flag ? result : [...result, newRecord];
};
