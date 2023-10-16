// types

import { IHoliday } from "../types/types";

const formateDate = (date: string) => {
  return date
    .split("-")
    .map((item) => (item.startsWith("0") ? item.substring(1) : item))
    .join("-");
};

export function setCheckedDayName(currentDate: string, holidays: IHoliday[]) {
  for (const holiday of holidays) {
    const formatedDate = formateDate(holiday.date);
    if (currentDate === formatedDate) {
      return holiday.localName;
    }
  }
  return null;
}
