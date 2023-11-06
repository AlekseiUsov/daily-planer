import { FC } from "react";

// styles
import styles from "./todos.module.scss";

// types
import { ITodo } from "../../types/todos";

// Components
import { AddNewTodo } from "./AddNewTodo/AddNewTodo";
import { ListTodos } from "./LIstTodos/ListTodos";
import { TodosDate } from "./todosDate/todosDate";

export const ToDos: FC<ITodo> = (props) => {
  const { listTodos } = props;

  return (
    <div className={styles.todos}>
      <div className={styles.todos__inner}>
        <TodosDate {...props} />
        <AddNewTodo {...props} />
        <ListTodos todos={listTodos} />
      </div>
    </div>
  );
};
