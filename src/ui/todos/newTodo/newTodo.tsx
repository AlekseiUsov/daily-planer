import { FC, memo, useState } from "react";

// styles
import styles from "./newTodo.module.scss";

// types
import { ITodo } from "../../../types/todos";

// reducers
import { addTodo } from "../../../redux/slices/todosSlices";

// icons
import { AddTodoIcon } from "../../../assets/icons";
import { useAppDispatch } from "../../../redux/store";

const Todo: FC<ITodo> = (curTodo) => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useAppDispatch();

  const AddNewToDo = () => {
    if (newTodo !== "") {
      dispatch(addTodo({ newTodo, curTodo }));
      setNewTodo("");
    }
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

export const NewTodo = memo(Todo);
