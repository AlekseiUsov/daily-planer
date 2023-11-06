// types
import { TCalendar } from "./calandar";

// Store Calendar Types
export type TStoreCalendar = TCalendar & {
  checkedDay: number | null;
  checkedDayName: null | string;
  weekDayOfFirstDayCurrentMonth: number;
  numberLastDayOfLastMonth: number;
  monthIndex: number;
  countDaysOfMonth: number;
};

export interface IHoliday {
  day: number;
  month: string;
  name: string;
}
