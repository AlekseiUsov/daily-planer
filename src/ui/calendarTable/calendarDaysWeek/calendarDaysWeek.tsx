import styles from "./calendarDaysWeek.module.scss";

const daysOfWeek: Array<string> = ["Пн", "Вт", "Ср", "Чт", "Пт", "Cб", "Вс"];

export const CalendarDaysWeek = () => {
  return (
    <ul className={styles.daysOfWeek}>
      {daysOfWeek.map((day) => (
        <li className={styles.dayOfWeek}>{day}</li>
      ))}
    </ul>
  );
};
