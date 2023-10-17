import { FC } from "react";

// styles
import styles from "./monthList.module.scss";

// types
import { TMonthTableList } from "../../../types/types";

// component
import { MonthTableElement } from "../monthTableElement/monthTableElement";

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

export const MonthList: FC<TMonthTableList> = ({
  isOpenMonthTable,
  setIsOpenMonthTable,
  y,
}) => {
  return (
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
  );
};
