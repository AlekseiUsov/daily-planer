import { FC } from "react";

// styles
import styles from "./monthList.module.scss";

// types
import { IMonthList } from "../../../types/calandar";

// components
import { Month } from "./month/month";

// variables
import { months } from "../../../variables/variables";

const formatedMonths = months.map((month) =>
  month.substring(0, 3).toLocaleLowerCase()
);

export const MonthList: FC<IMonthList> = ({ selectedYear }) => {
  return (
    <ul className={styles.table}>
      {formatedMonths.map((month, index) => (
        <Month monthIndex={index} month={month} year={selectedYear} />
      ))}
    </ul>
  );
};
