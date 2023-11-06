// types
import { IHoliday } from "../types/calendarStore";

export const checkIsHoliday = (
  day: number,
  month: string,
  holidays: IHoliday[]
) => {
  for (const holiday of holidays) {
    if (holiday.day === day && holiday.month === month) {
      return true;
    }
  }
  return false;
};
