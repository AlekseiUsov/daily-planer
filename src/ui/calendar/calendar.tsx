import { FC } from "react";

// styles
import styles from "./calendar.module.scss";

// types
import { TCalendar } from "../../types/calandar";

// Components
import { CalendarTable } from "../calendar/calendarTable/calendarTable";
import { CalendarDate } from "../calendar/calendarDate/calendarDate";
import { Months } from "../months/months";

export const Calendar: FC<TCalendar> = ({
  month,
  year,
  days,
  checkedDay,
  isOpenMonthTable,
}) => {
  return (
    <div className={styles.calendar}>
      {isOpenMonthTable && <Months />}
      <div className={styles.calendar__block}>
        <CalendarDate
          isOpenMonthTable={isOpenMonthTable}
          month={month}
          year={year}
        />
        <CalendarTable days={days} checkedDay={checkedDay} />
      </div>
    </div>
  );
};
