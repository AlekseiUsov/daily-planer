import { FC } from "react";

// styles
import styles from "./currentFullDate.module.scss";

// types
import { ICalendar } from "../../types/types";

export const CurrentFullDate: FC<ICalendar> = ({ checkedDay, month, year }) => {
  return (
    <div className={styles.currentFullDate}>
      {checkedDay} {month} {year}
    </div>
  );
};
