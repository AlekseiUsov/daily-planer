import { FC, useState } from "react";

// styles
import styles from "./todo.module.scss";

interface ITodo {
  index: number;
  todo: string;
}

export const ToDo: FC<ITodo> = ({ index, todo }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li className={styles.todo}>
      <div onClick={() => setIsDone(!isDone)}>
        <div>
          {index + 1}.{" "}
          <span className={isDone ? styles.done : ""}> {todo}</span>
        </div>
      </div>
    </li>
  );
};
