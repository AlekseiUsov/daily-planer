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
import { MonthTableElement } from "./monthTableElement/monthTableElement";

const months = [
  "янв",
  "фев",
  "мар",
  "апр",
  "мая",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

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
      <ul className={styles.table}>
        {months.map((month, index) => (
          <MonthTableElement
            isOpenMonthTable={isOpenMonthTable}
            setIsOpenMonthTable={setIsOpenMonthTable}
            monthIndex={index}
            month={month}
            year={y}
          />
        ))}
      </ul>
    </div>
  );
};
