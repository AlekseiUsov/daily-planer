import { FC } from "react";

// styles
import styles from "./monthTable.module.scss";

// selector
import { calendarSelector } from "../../redux/selector/selectors";

// hooks
import { useState } from "react";
import { useAppSelector } from "../../redux/store";

// types
import { TMonthTable } from "../../types/types";

// component
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { MonthList } from "./monthList/monthList";

export const MonthTable: FC<TMonthTable> = ({
  isOpenMonthTable,
  setIsOpenMonthTable,
}) => {
  const { year } = useAppSelector(calendarSelector);

  const [y, setY] = useState(year);

  return (
    <div className={styles.monthTable}>
      <div className={styles.inner}>
        <p>{`${y} год`}</p>
        <div className={styles.icons}>
          <RiArrowUpSLine onClick={() => setY(y - 1)} />
          <RiArrowDownSLine onClick={() => setY(y + 1)} />
        </div>
      </div>
      <MonthList
        isOpenMonthTable={isOpenMonthTable}
        setIsOpenMonthTable={setIsOpenMonthTable}
        y={y}
      />
    </div>
  );
};
