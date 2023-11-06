import { FC, memo } from "react";

import styles from "./calendarDate.module.scss";

// hooks
import { useAppDispatch } from "../../../redux/store";

// actions
import {
  decrementMonth,
  incrementMonth,
  setIsOpenMonthTable,
} from "../../../redux/slices/calendarSlices";

// Components
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

// types
import { ICalendarDate } from "../../../types/calandar";

const MonthAndYear: FC<ICalendarDate> = ({ month, year }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.currentDate}>
      <span
        onClick={() => dispatch(setIsOpenMonthTable())}
      >{`${month} ${year}`}</span>
      <div className={styles.icons}>
        <RiArrowUpSLine onClick={() => dispatch(decrementMonth())} />
        <RiArrowDownSLine onClick={() => dispatch(incrementMonth())} />
      </div>
    </div>
  );
};

export const CalendarDate = memo(MonthAndYear);
