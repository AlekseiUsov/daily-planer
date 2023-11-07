import { FC } from "react";

// styles
import styles from "./calendarNumber.module.scss";

// hooks
import { useAppDispatch } from "../../../../../redux/store";

// actions
import {
  checkDayHolidayName,
  setCurrentDay,
} from "../../../../../redux/slices/calendarSlices";

// types
import { ICalendarNumber } from "../../../../../types/calandar";

export const CalendarNumber: FC<ICalendarNumber> = (props) => {
  const { day, isActive, isLastOrNextMonth } = props;

  const dispatch = useAppDispatch();

  return (
    <li
      className={`
      ${isActive ? styles.active : ""}  
      ${isLastOrNextMonth ? styles.grey : ""} 
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
