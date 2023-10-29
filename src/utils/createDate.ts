import uniqid from "uniqid";

//types
import { ICalendarNumber } from "../types/calandar";

// varibles
import { months, holidays } from "../variables/variables";

// utils
import { checkIsHoliday } from "./checkIsHoliday";

export const createCurrentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const countDaysOfMonth = new Date(year, date.getMonth() + 1, 0).getDate();

  const checkedDay = date.getDate();
  const firstDayOfCurrentMonth = new Date(year, monthIndex, 0).getDay();
  const lastDayOfLastMonth = new Date(year, monthIndex, 0).getDate();
  const days = renderDays(
    monthIndex,
    firstDayOfCurrentMonth,
    lastDayOfLastMonth,
    countDaysOfMonth,
    checkedDay
  );

  return {
    year,
    monthIndex,
    checkedDay,
    countDaysOfMonth,
    firstDayOfCurrentMonth,
    lastDayOfLastMonth,
    days,
  };
};

export const renderDays = (
  monthIndex: number,
  firstDayOfMonth: number,
  lastDayOfLastMonth: number,
  countDaysOfMonth: number,
  checkedDay: number | null
): ICalendarNumber[] => {
  const result: ICalendarNumber[] = [];

  for (let i = firstDayOfMonth; i > 0; i -= 1) {
    const index = monthIndex === 0 ? 11 : monthIndex - 1;
    const current: ICalendarNumber = {
      id: uniqid(),
      month: "last",
      day: lastDayOfLastMonth - i + 1,
      isActive: false,
      isHoliday: checkIsHoliday(
        lastDayOfLastMonth - i + 1,
        months[index],
        holidays
      ),
      isLastOrNextMonth: true,
    };
    result.push(current);
  }

  for (let i = 1; i <= countDaysOfMonth; i += 1) {
    const current: ICalendarNumber =
      checkedDay && checkedDay === i
        ? {
            id: uniqid(),
            month: "current",
            day: i,
            isActive: true,
            isHoliday: checkIsHoliday(i, months[monthIndex], holidays),
          }
        : {
            id: uniqid(),
            month: "current",
            day: i,
            isActive: false,
            isHoliday: checkIsHoliday(i, months[monthIndex], holidays),
          };
    result.push(current);
  }

  const finish = 42 - result.length;

  for (let i = 1; i <= finish; i += 1) {
    const index = monthIndex === 11 ? 0 : monthIndex + 1;

    const current: ICalendarNumber = {
      id: uniqid(),
      month: "next",
      day: i,
      isHoliday: checkIsHoliday(i, months[index], holidays),
      isActive: false,
      isLastOrNextMonth: true,
    };
    result.push(current);
  }
  return result;
};

export const changeCurrentDate = (
  year: number,
  monthIndex: number,
  day?: number
) => {
  const checkedDay = day ? day : null;
  const countDaysOfMonth = new Date(year, monthIndex + 1, 0).getDate();
  const month = months[monthIndex];
  const firstDayOfCurrentMonth = new Date(year, monthIndex, 0).getDay();
  const lastDayOfLastMonth = new Date(year, monthIndex, 0).getDate();
  const days = renderDays(
    monthIndex,
    firstDayOfCurrentMonth,
    lastDayOfLastMonth,
    countDaysOfMonth,
    checkedDay
  );

  return {
    year,
    monthIndex,
    checkedDay,
    countDaysOfMonth,
    month,
    days,
  };
};
