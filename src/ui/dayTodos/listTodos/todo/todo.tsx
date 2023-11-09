import { FC, useState } from "react";

// styles
import styles from "./todo.module.scss";

// types
import { ITodo } from "../../../../types/todos";

export const ToDo: FC<ITodo> = ({ isDone, todo }) => {
  return (
    <li className={styles.todo}>
      <div>
        <div>
          <span className={isDone ? styles.done : ""}> {todo}</span>
        </div>
      </div>
    </li>
  );
};
