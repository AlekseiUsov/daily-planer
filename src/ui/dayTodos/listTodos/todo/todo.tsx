import { FC } from "react";

// styles
import styles from "./todo.module.scss";

// selectors
import { useAppDispatch } from "../../../../redux/store";

// actions
import {
  handleStatusTodo,
  removeATodo,
} from "../../../../redux/slices/todosSlices";

// types
import { ITodo } from "../../../../types/todos";

// icons
import { CloseIcon } from "../../../../assets/icons";

export const ToDo: FC<ITodo> = ({ isDone, todo, id }) => {
  const dispatch = useAppDispatch();

  const handleTodo = (e: React.MouseEvent): void => {
    e.preventDefault();
    dispatch(handleStatusTodo({ id }));
  };

  const removeTodo = (e: React.MouseEvent): void => {
    e.preventDefault();
    dispatch(removeATodo({ id }));
  };

  return (
    <li className={styles.todo}>
      <label onClick={(e) => handleTodo(e)}>
        <input type="checkbox" className={styles.todo__real_checkbox} />
        <span
          className={
            isDone
              ? styles.todo__custom_checkbox_checked
              : styles.todo__custom_checkbox
          }
        />
        <span className={isDone ? styles.todo__done : ""}>{todo}</span>
      </label>
      <span onClick={(e) => removeTodo(e)} className={styles.todo__close}>
        {CloseIcon}
      </span>
    </li>
  );
};
