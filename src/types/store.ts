// types
import { ICalendar } from "./calandar";

// Store Types
export type IStore = ICalendar & {
  checkedDayName: null | string;
  checkedDay: number | null;
  firstDayOfCurrentMonth: number;
  lastDayOfLastMonth: number;
  monthIndex: number;
  countDaysOfMonth: number;
};

export interface IHoliday {
  day: number;
  month: string;
  name: string;
}
