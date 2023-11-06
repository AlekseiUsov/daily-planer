import { FC } from "react";

// hooks
import { useAppDispatch } from "../../../../redux/store";

// action
import { setDateByMonthAndYear } from "../../../../redux/slices/calendarSlices";

// type
import { IMonth } from "../../../../types/calandar";

export const Month: FC<IMonth> = ({ monthIndex, month, year }) => {
  const dispatch = useAppDispatch();

  const handleMonthTable = () => {
    dispatch(setDateByMonthAndYear({ year, monthIndex }));
  };

  return <li onClick={handleMonthTable}>{month}</li>;
};
