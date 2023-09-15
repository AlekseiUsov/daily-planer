import { FC } from "react";

// styles
import styles from "./iconCalendar.module.scss";

// Components
import { CalendarIcon } from "../../assets/icons";

interface IIconCalendar {
  onClick: () => void;
}

export const IconCalendar: FC<IIconCalendar> = ({ onClick }) => {
  return (
    <span className={styles.calendarIcon} onClick={onClick}>
      {CalendarIcon}
    </span>
  );
};
