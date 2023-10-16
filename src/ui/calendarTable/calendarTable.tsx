import { FC, useEffect } from "react";

// styles
import styles from "./calendarTable.module.scss";

// store
import { useAppDispatch, useAppSelector } from "../../redux/store";

// selectors
import { calendarSelector } from "../../redux/selector/selectors";

// reducers
import { fetchHolidays } from "../../redux/slices/calendarSlices";

// types
import { ICalendarNumbers } from "../../types/types";

// components
import { CalendarNumbers } from "./calendarNumbers/calendarNumbers";
import { CalendarDaysWeek } from "./calendarDaysWeek/calendarDaysWeek";

export const CalendarTable: FC<ICalendarNumbers> = ({ days, checkedDay }) => {
  const { year } = useAppSelector(calendarSelector);

  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(fetchHolidays(year));
  }, [dispath, year]);

  return (
    <div className={styles.calendarTable}>
      <CalendarDaysWeek />
      <CalendarNumbers days={days} checkedDay={checkedDay} />
    </div>
  );
};
