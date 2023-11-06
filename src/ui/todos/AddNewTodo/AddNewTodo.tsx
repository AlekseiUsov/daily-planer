import { FC, useState } from "react";
import { useAppDispatch } from "../../../redux/store";

// styles
import styles from "./AddNewTodo.module.scss";

// types
import { ITodo } from "../../../types/todos";

// reducers
import { addTodo } from "../../../redux/slices/todosSlices";

// icons
import { AddTodoIcon } from "../../../assets/icons";

export const AddNewTodo: FC<ITodo> = ({ day, monthIndex, year }) => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useAppDispatch();

  const AddNewToDo = () => {
    dispatch(addTodo({ newTodo, day, monthIndex, year }));
  };

  return (
    <div className={styles.addNewTodo}>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Добавьте новую задачу"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div className={styles.icon} onClick={AddNewToDo}>
        {AddTodoIcon}
      </div>
    </div>
  );
};
