import { FC, useEffect } from "react";

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

  const todos: IDayTodos[] = JSON.parse(
    localStorage.getItem("tasks") as string
  );

  let condition: string[] = checkDayTodos(todos, day, month, year);

  return (
    <li
      className={`
      ${isActive ? styles.active : ""}  
      ${isLastOrNextMonth ? styles.grey : ""} 
      ${condition.length ? styles.hasTodos : ""}
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
