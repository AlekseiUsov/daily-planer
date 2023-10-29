import { FC, memo } from "react";

import styles from "./currentMonthAndYear.module.scss";

// hooks
import { useAppDispatch } from "../../redux/store";

// actions
import {
  decrementMonth,
  incrementMonth,
} from "../../redux/slices/calendarSlices";

// Components
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

// types
import { TCurrentMonthAndYear } from "../../types/calandar";

const MonthAndYear: FC<TCurrentMonthAndYear> = ({
  isOpenMonthTable,
  setIsOpenMonthTable,
  month,
  year,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.currentDate}>
      <span
        onClick={() => setIsOpenMonthTable(!isOpenMonthTable)}
      >{`${month} ${year}`}</span>
      <div className={styles.icons}>
        <RiArrowUpSLine onClick={() => dispatch(decrementMonth())} />
        <RiArrowDownSLine onClick={() => dispatch(incrementMonth())} />
      </div>
    </div>
  );
};

export const CurrentMonthAndYear = memo(MonthAndYear);
