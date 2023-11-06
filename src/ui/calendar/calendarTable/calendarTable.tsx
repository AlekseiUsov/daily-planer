import { FC } from "react";

// styles
import styles from "./calendarTable.module.scss";

// types
import { ICalendarNumbers } from "../../../types/calandar";

// components
import { CalendarNumbers } from "./calendarNumbers/calendarNumbers";
import { CalendarDaysWeek } from "./calendarDaysWeek/calendarDaysWeek";

export const CalendarTable: FC<ICalendarNumbers> = ({ days, checkedDay }) => {
  return (
    <div className={styles.calendarTable}>
      <CalendarDaysWeek />
      <CalendarNumbers days={days} checkedDay={checkedDay} />
    </div>
  );
};
