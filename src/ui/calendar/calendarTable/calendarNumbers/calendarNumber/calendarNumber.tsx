import { FC } from "react";

// styles
import styles from "./calendarNumber.module.scss";

// hooks
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";

// selectors
import {
  calendarSelector,
  todosSelector,
} from "../../../../../redux/selector/selectors";

// actions
import {
  checkDayHolidayName,
  setCurrentDay,
} from "../../../../../redux/slices/calendarSlices";

// types
import { ICalendarNumber } from "../../../../../types/calandar";
import { ITodo } from "../../../../../types/todos";

// utils
import { checkDayTodos } from "../../../../../utils/checkDayTodos";

export const CalendarNumber: FC<ICalendarNumber> = (props) => {
  const { day, isActive, isLastOrNextMonth } = props;
  const { year, month } = useAppSelector(calendarSelector);
  const { todos } = useAppSelector(todosSelector);

  const dispatch = useAppDispatch();

  const todayTodos: ITodo[] = checkDayTodos(todos, day, month, year);

  return (
    <li
      className={`
      ${isActive ? styles.active : ""}  
      ${isLastOrNextMonth ? styles.grey : ""} 
      ${todayTodos.length ? styles.hasTodos : ""}
      ${styles.number}
      `}
      onClick={() => {
        dispatch(setCurrentDay(props));
        dispatch(checkDayHolidayName(props));
      }}
    >
      {day}
    </li>
  );
};
