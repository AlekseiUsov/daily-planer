import { FC } from "react";

// styles
import styles from "./dayTodos.module.scss";

// types
import { IDayTodos } from "../../types/todos";

// Components
import { NewTodo } from "./newTodo/newTodo";
import { ListTodos } from "./listTodos/ListTodos";
import { TodosDate } from "./todosDate/todosDate";

export const DayToDos: FC<IDayTodos> = (props) => {
  return (
    <div className={styles.todos}>
      <div className={styles.todos__inner}>
        <TodosDate {...props} />
        <NewTodo {...props} />
        <ListTodos {...props} />
      </div>
    </div>
  );
};
