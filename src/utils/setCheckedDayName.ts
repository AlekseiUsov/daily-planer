// types

import { IHoliday } from "../types/calendarStore";

export function setCheckedDayName(
  day: number,
  month: string,
  holidays: IHoliday[]
) {
  for (const holiday of holidays) {
    if (day === holiday.day && month === holiday.month) {
      return holiday.name;
    }
  }
  return null;
}
