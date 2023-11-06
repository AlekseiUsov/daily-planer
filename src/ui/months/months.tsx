// styles
import styles from "./months.module.scss";

// selector
import { calendarSelector } from "../../redux/selector/selectors";

// hooks
import { useState } from "react";
import { useAppSelector } from "../../redux/store";

// component
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { MonthList } from "./monthList/monthList";

export const Months = () => {
  const { year } = useAppSelector(calendarSelector);

  const [selectedYear, setselectedYear] = useState(year);

  return (
    <>
      <div className={styles.inner}>
        <p>{`${selectedYear} год`}</p>
        <div className={styles.icons}>
          <RiArrowUpSLine onClick={() => setselectedYear(selectedYear - 1)} />
          <RiArrowDownSLine onClick={() => setselectedYear(selectedYear + 1)} />
        </div>
      </div>
      <MonthList selectedYear={selectedYear} />
    </>
  );
};
