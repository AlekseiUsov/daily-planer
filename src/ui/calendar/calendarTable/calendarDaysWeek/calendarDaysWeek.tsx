// styles
import styles from "./calendarDaysWeek.module.scss";

// variables
import { daysOfWeek } from "../../../../variables/variables";

export const CalendarDaysWeek = () => {
  return (
    <ul className={styles.daysOfWeek}>
      {daysOfWeek.map((day, index) => (
        <li key={index} className={styles.daysOfWeek__item}>
          {day}
        </li>
      ))}
    </ul>
  );
};
