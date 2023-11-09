import { FC } from "react";

// styles
import styles from "./todo.module.scss";

// types
import { ITodo } from "../../../../types/todos";

// icons
import { CloseIcon } from "../../../../assets/icons";

export const ToDo: FC<ITodo> = ({ isDone, todo }) => {
  return (
    <li className={styles.todo}>
      <label>
        <input type="checkbox" className={styles.todo__real_checkbox} />
        <span className={styles.todo__custom_checkbox} />
        <span className={styles.text}>{todo}</span>
      </label>
      <span className={styles.todo__close}>{CloseIcon}</span>
    </li>
  );
};
