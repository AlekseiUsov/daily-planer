import { FC } from "react";

// styles
import styles from "./calendarNumber.module.scss";

// hooks
import { useAppDispatch } from "../../../../redux/store";

// actions
import {
  getCheckDayHolidayName,
  setCurrentDay,
} from "../../../../redux/slices/calendarSlices";

// types
import { ICalendarNumber } from "../../../../types/types";

export const CalendarNumber: FC<ICalendarNumber> = (props) => {
  const { day, isActive, addClass } = props;

  const dispatch = useAppDispatch();

  return (
    <li
      className={`${isActive ? styles.active : ""}  ${
        addClass ? styles.grey : ""
      } ${styles.number}`}
      onClick={() => {
        dispatch(setCurrentDay(props));
        dispatch(getCheckDayHolidayName(props));
      }}
    >
      {day}
    </li>
  );
};
