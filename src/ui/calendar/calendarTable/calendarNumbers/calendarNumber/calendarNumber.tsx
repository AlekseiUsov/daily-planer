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

//variables
import { months } from "../../../../../variables/variables";

export const CalendarNumber: FC<ICalendarNumber> = (props) => {
  const { day, isActive, isLastMonth, isNextMonth } = props;
  const { year, monthIndex } = useAppSelector(calendarSelector);
  const { todos } = useAppSelector(todosSelector);

  const dispatch = useAppDispatch();

  const index = isLastMonth
    ? monthIndex - 1
    : isNextMonth
    ? monthIndex + 1
    : monthIndex;

  const month = months[index];

  const todayTodos: ITodo[] = checkDayTodos(todos, day, month, year);

  return (
    <li
      className={`
      ${isActive ? styles.active : ""}  
      ${isLastMonth || isNextMonth ? styles.grey : ""} 
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
