// styles
import styles from "./iconCalendar.module.scss";

// icons
import { CalendarIcon } from "../../../../assets/icons";

export const IconCalendar = () => {
  return <span className={styles.calendarIcon}>{CalendarIcon}</span>;
};
