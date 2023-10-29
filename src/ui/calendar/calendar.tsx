import styles from "./calendar.module.scss";

// hooks
import { useState } from "react";
import { useAppSelector } from "../../redux/store";

// selector
import { calendarSelector } from "../../redux/selector/selectors";

// Components
import { CurrentMonthAndYear } from "../currentMonthAndYear/currentMonthAndYear";
import { CalendarTable } from "../calendarTable/calendarTable";
import { CurrentFullDate } from "../currentFullDate/currentFullDate";
import { MonthTable } from "../monthTable/monthTable";
import { CalandarFooter } from "../calendarFooter/calendarFooter";

export const Calendar = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(true);
  const [isOpenMonthTable, setIsOpenMonthTable] = useState(false);

  const { month, year, checkedDay, checkedDayName, days } =
    useAppSelector(calendarSelector);

  return (
    <div className={styles.calendar}>
      <div className={styles.inner}>
        {checkedDay && isOpenCalendar && !isOpenMonthTable && (
          <CurrentFullDate
            days={days}
            checkedDay={checkedDay}
            checkedDayName={checkedDayName}
            month={month}
            year={year}
          />
        )}
        {isOpenCalendar && isOpenMonthTable && (
          <MonthTable
            isOpenMonthTable={isOpenMonthTable}
            setIsOpenMonthTable={setIsOpenMonthTable}
          />
        )}
      </div>
      <div className={isOpenCalendar ? styles.block : styles.hidden}>
        <CurrentMonthAndYear
          isOpenMonthTable={isOpenMonthTable}
          setIsOpenMonthTable={setIsOpenMonthTable}
          month={month}
          year={year}
        />
        <CalendarTable days={days} checkedDay={checkedDay} />
      </div>
      <CalandarFooter
        setIsOpenCalendar={setIsOpenCalendar}
        isOpenCalendar={isOpenCalendar}
      />
    </div>
  );
};
