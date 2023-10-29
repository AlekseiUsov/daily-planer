import { FC } from "react";

// hooks
import { useAppDispatch } from "../../../redux/store";

// action
import { setDateByMonthAndYear } from "../../../redux/slices/calendarSlices";

// type
import { TMonthTableElement } from "../../../types/calandar";

export const MonthTableElement: FC<TMonthTableElement> = ({
  isOpenMonthTable,
  setIsOpenMonthTable,
  monthIndex,
  month,
  year,
}) => {
  const dispatch = useAppDispatch();

  const handleMonthTable = () => {
    setIsOpenMonthTable(!isOpenMonthTable);
    dispatch(setDateByMonthAndYear({ year, monthIndex }));
  };

  return <li onClick={handleMonthTable}>{month}</li>;
};
