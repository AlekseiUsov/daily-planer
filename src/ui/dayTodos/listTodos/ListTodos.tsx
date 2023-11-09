import { FC } from "react";

import styles from "./ListTodos.module.scss";

// Components
import { ToDo } from "./todo/todo";

// types
import { ITodo } from "../../../types/todos";

interface IListTodos {
  todos: ITodo[];
}

export const ListTodos: FC<IListTodos> = ({ todos }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <ToDo key={index} todo={todo.todo} isDone={todo.isDone} />
      ))}
    </ul>
  );
};
