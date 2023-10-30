import { FC } from "react";

// styles
import styles from "./calendarFooter.module.scss";

// types
import { ICalandarFooter } from "../../types/calandar";

// Components
import { IconCalendar } from "../iconCalendar/iconCalendar";

export const CalandarFooter: FC<ICalandarFooter> = ({
  setIsOpenCalendar,
  isOpenCalendar,
}) => {
  return (
    <div className={styles.footer}>
      {isOpenCalendar && <p className={styles.text}>праздничные дни</p>}
      <IconCalendar onClick={() => setIsOpenCalendar(!isOpenCalendar)} />
    </div>
  );
};
