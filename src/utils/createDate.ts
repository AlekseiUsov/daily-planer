import uniqid from "uniqid";

//types
import { ICalendarNumber } from "../types/calandar";

// varibles
import { months } from "../variables/variables";

export const createCurrentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const countDaysOfMonth = new Date(year, date.getMonth() + 1, 0).getDate();

  const checkedDay = date.getDate();
  const weekDayOfFirstDayCurrentMonth = new Date(year, monthIndex, 0).getDay();
  const weekDayOfLastDayCurrentMonth = new Date(
    year,
    monthIndex,
    countDaysOfMonth - 1
  ).getDay();

  const numberLastDayOfLastMonth = new Date(year, monthIndex, 0).getDate();
  const days = renderDays(
    monthIndex,
    weekDayOfFirstDayCurrentMonth,
    weekDayOfLastDayCurrentMonth,
    numberLastDayOfLastMonth,
    countDaysOfMonth,
    checkedDay
  );

  return {
    year,
    monthIndex,
    checkedDay,
    countDaysOfMonth,
    weekDayOfFirstDayCurrentMonth,
    numberLastDayOfLastMonth,
    days,
  };
};

export const renderDays = (
  monthIndex: number,
  weekDayOfFirstDayCurrentMonth: number,
  weekDayOfLastDayCurrentMonth: number,
  numberLastDayOfLastMonth: number,
  countDaysOfMonth: number,
  checkedDay: number | null
): ICalendarNumber[] => {
  const result: ICalendarNumber[] = [];

  for (let i = weekDayOfFirstDayCurrentMonth; i > 0; i -= 1) {
    const current: ICalendarNumber = {
      id: uniqid(),
      monthStatus: "last",
      day: countDaysOfMonth - i + 1,
      isActive: false,
      isLastOrNextMonth: true,
    };
    result.push(current);
  }

  for (let i = 1; i <= countDaysOfMonth; i += 1) {
    const current: ICalendarNumber =
      checkedDay && checkedDay === i
        ? {
            id: uniqid(),
            monthStatus: "current",
            day: i,
            isActive: true,
          }
        : {
            id: uniqid(),
            monthStatus: "current",
            day: i,
            isActive: false,
          };
    result.push(current);
  }

  console.log(
    weekDayOfFirstDayCurrentMonth,
    weekDayOfLastDayCurrentMonth,
    monthIndex
  );
  const condition1 = weekDayOfFirstDayCurrentMonth === 6 && monthIndex !== 1;
  const condition2 =
    weekDayOfFirstDayCurrentMonth === 5 &&
    weekDayOfLastDayCurrentMonth === 0 &&
    monthIndex !== 1;

  const finish = (condition1 || condition2 ? 42 : 35) - result.length;

  for (let i = 1; i <= finish; i += 1) {
    const current: ICalendarNumber = {
      id: uniqid(),
      monthStatus: "next",
      day: i,
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
  const isOpenMonthTable = false;
  const checkedDay = day ? day : null;
  const countDaysOfMonth = new Date(year, monthIndex + 1, 0).getDate();
  const month = months[monthIndex];
  const weekDayOfFirstDayCurrentMonth = new Date(year, monthIndex, 0).getDay();
  const weekDayOfLastDayCurrentMonth = new Date(
    year,
    monthIndex,
    countDaysOfMonth - 1
  ).getDay();
  const numberLastDayOfLastMonth = new Date(year, monthIndex, 0).getDate();
  const days = renderDays(
    monthIndex,
    weekDayOfFirstDayCurrentMonth,
    weekDayOfLastDayCurrentMonth,
    numberLastDayOfLastMonth,
    countDaysOfMonth,
    checkedDay
  );

  return {
    isOpenMonthTable,
    year,
    monthIndex,
    checkedDay,
    countDaysOfMonth,
    month,
    days,
  };
};
