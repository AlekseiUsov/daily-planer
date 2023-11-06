import { FC } from "react";

import styles from "./ListTodos.module.scss";

interface IListTodos {
  todos: string[];
}

export const ListTodos: FC<IListTodos> = ({ todos }) => {
  //console.log(todos);
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <li key={index} className={styles.list__item}>
          <span>
            {index + 1}. {todo}
          </span>
        </li>
      ))}
    </ul>
  );
};
