import { FC } from "react";

// styles
import styles from "./currentFullDate.module.scss";

// types
import { ICalendar } from "../../types/types";

export const CurrentFullDate: FC<ICalendar> = ({
  checkedDay,
  month,
  year,
  checkedDayName,
}) => {
  const fotmatedMonth =
    month !== "Март" ? `${month.slice(0, month.length - 1)}я` : `${month}а`;
  return (
    <div className={styles.currentFullDate}>
      <div className={styles.inner}>
        {checkedDay} {fotmatedMonth} {year}
      </div>
      <div className={styles.inner}>
        {checkedDayName ? `Праздник: ${checkedDayName}` : null}
      </div>
    </div>
  );
};
