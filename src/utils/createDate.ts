import uniqid from "uniqid";
import { ICalendarNumber } from "../types/types";

export const createDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const countDaysOfMonth = new Date(year, date.getMonth() + 1, 0).getDate();

  const checkedDay = date.getDate();
  const firstDayOfCurrentMonth = new Date(year, monthIndex, 0).getDay();
  const lastDayOfLastMonth = new Date(year, monthIndex, 0).getDate();

  return {
    year,
    monthIndex,
    checkedDay,
    countDaysOfMonth,
    firstDayOfCurrentMonth,
    lastDayOfLastMonth,
  };
};

export const renderDays = (
  firstDayOfMonth: number,
  lastDayOfLastMonth: number,
  countDaysOfMonth: number,
  checkedDay: number | null
): ICalendarNumber[] => {
  const result: ICalendarNumber[] = [];

  for (let i = firstDayOfMonth; i > 0; i -= 1) {
    const current: ICalendarNumber = {
      id: uniqid(),
      month: "last",
      day: lastDayOfLastMonth - i + 1,
      isActive: false,
      addClass: true,
    };
    result.push(current);
  }

  for (let i = 1; i <= countDaysOfMonth; i += 1) {
    const current: ICalendarNumber =
      checkedDay && checkedDay === i
        ? { id: uniqid(), month: "current", day: i, isActive: true }
        : { id: uniqid(), month: "current", day: i, isActive: false };
    result.push(current);
  }

  const finish = 42 - result.length;

  for (let i = 1; i <= finish; i += 1) {
    const current: ICalendarNumber = {
      id: uniqid(),
      month: "next",
      day: i,
      isActive: false,
      addClass: true,
    };
    result.push(current);
  }
  return result;
};
