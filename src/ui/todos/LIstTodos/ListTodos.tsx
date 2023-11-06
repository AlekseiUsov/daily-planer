import { FC } from "react";

interface IListTodos {
  todos: string[];
}

export const ListTodos: FC<IListTodos> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
