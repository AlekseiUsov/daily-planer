import { FC } from "react";

// hooks
import { useAppDispatch } from "../../../redux/store";

// action
import { setDate } from "../../../redux/slices/calendarSlices";

// type
import { TMonthTableElement } from "../../../types/types";

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
    dispatch(setDate({ year, monthIndex }));
  };

  return <li onClick={handleMonthTable}>{month}</li>;
};
