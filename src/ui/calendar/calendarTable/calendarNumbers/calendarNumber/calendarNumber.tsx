import { FC } from "react";

// styles
import styles from "./calendarNumber.module.scss";

// hooks
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";

// selectors
import { calendarSelector } from "../../../../../redux/selector/selectors";

// actions
import {
  checkDayHolidayName,
  setCurrentDay,
} from "../../../../../redux/slices/calendarSlices";

// types
import { ICalendarNumber } from "../../../../../types/calandar";
import { IDayTodos } from "../../../../../types/todos";

// utils
import { checkDayTodos } from "../../../../../utils/checkDayTodos";

export const CalendarNumber: FC<ICalendarNumber> = (props) => {
  const { day, isActive, isLastOrNextMonth } = props;
  const { year, month } = useAppSelector(calendarSelector);

  const dispatch = useAppDispatch();

  const todos: IDayTodos[] = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos") as string)
    : [];

  const dayToday: string[] = checkDayTodos(todos, day, month, year);

  return (
    <li
      className={`
      ${isActive ? styles.active : ""}  
      ${isLastOrNextMonth ? styles.grey : ""} 
      ${dayToday.length ? styles.hasTodos : ""}
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
