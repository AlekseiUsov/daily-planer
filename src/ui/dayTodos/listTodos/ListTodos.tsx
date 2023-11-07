import { FC } from "react";

import styles from "./ListTodos.module.scss";

// Components
import { ToDo } from "./todo/todo";

interface IListTodos {
  todos: string[];
}

export const ListTodos: FC<IListTodos> = ({ todos }) => {
  //console.log(todos);
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <ToDo key={index} index={index} todo={todo} />
      ))}
    </ul>
  );
};
