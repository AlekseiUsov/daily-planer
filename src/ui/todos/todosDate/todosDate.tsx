import { FC } from "react";

// styles
import styles from "./todosDate.module.scss";

// types
import { ITodo } from "../../../types/todos";

export const TodosDate: FC<ITodo> = ({ day, dayName, month, year }) => {
  const condition = ["Март", "Август"];

  const fotmatedMonth = !condition.includes(month)
    ? `${month.slice(0, month.length - 1)}я`
    : `${month}а`;

  return (
    <div className={styles.currentDate}>
      <div> {`${day}  ${fotmatedMonth} ${year}`}</div>
      {dayName && <div className={styles.currentDate__holiday}>{dayName}</div>}
    </div>
  );
};
