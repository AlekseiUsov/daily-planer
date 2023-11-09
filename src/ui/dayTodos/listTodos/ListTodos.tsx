import { FC } from "react";

import styles from "./ListTodos.module.scss";

// Components
import { ToDo } from "./todo/todo";

// types
import { ITodo } from "../../../types/todos";

interface ITodoList {
  listTodos: ITodo[];
}

export const ListTodos: FC<ITodoList> = (props) => {
  const { listTodos } = props;
  return (
    <ul className={styles.list}>
      {listTodos.map((todo, index) => (
        <ToDo key={index} id={todo.id} todo={todo.todo} isDone={todo.isDone} />
      ))}
    </ul>
  );
};
