import styles from "./calendar.module.scss";

// hooks
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";

// selector
import { calendarSelector } from "../../redux/selector/selectors";

// reducers
import { fetchHolidays } from "../../redux/slices/calendarSlices";

// Components
import { CurrentMonthAndYear } from "../currentMonthAndYear/currentMonthAndYear";
import { IconCalendar } from "../iconCalendar/iconCalendar";
import { CalendarTable } from "../calendarTable/calendarTable";
import { CurrentFullDate } from "../currentFullDate/currentFullDate";
import { MonthTable } from "../monthTable/monthTable";

export const Calendar = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(true);
  const [isOpenMonthTable, setIsOpenMonthTable] = useState(false);

  const { month, year, checkedDay, checkedDayName, days } =
    useAppSelector(calendarSelector);

  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(fetchHolidays(year));
  }, [dispath, year]);

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
      <IconCalendar onClick={() => setIsOpenCalendar(!isOpenCalendar)} />
    </div>
  );
};
