import { FC, useState } from "react";

// styles
import styles from "./newTodo.module.scss";

// types
import { IDayTodos } from "../../../types/todos";

// reducers
import { addTodo } from "../../../redux/slices/todosSlices";

// icons
import { AddTodoIcon } from "../../../assets/icons";
import { useAppDispatch } from "../../../redux/store";

export const NewTodo: FC<IDayTodos> = (currentDay) => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useAppDispatch();

  const AddNewToDo = () => {
    if (newTodo !== "") {
      dispatch(addTodo({ newTodo, currentDay }));
      setNewTodo("");
    }
  };

  return (
    <div className={styles.addNewTodo} id="todo">
      <form className={styles.inputBox} onSubmit={AddNewToDo}>
        <input
          type="text"
          placeholder="Добавьте новую задачу"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
      <button
        type="submit"
        form="todo"
        className={styles.icon}
        onClick={AddNewToDo}
      >
        {AddTodoIcon}
      </button>
    </div>
  );
};
