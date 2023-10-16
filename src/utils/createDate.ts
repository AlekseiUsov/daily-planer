import uniqid from "uniqid";
import { ICalendarNumber } from "../types/types";

export const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const createCurrentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const countDaysOfMonth = new Date(year, date.getMonth() + 1, 0).getDate();

  const checkedDay = date.getDate();
  const firstDayOfCurrentMonth = new Date(year, monthIndex, 0).getDay();
  const lastDayOfLastMonth = new Date(year, monthIndex, 0).getDate();
  const days = renderDays(
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

export const changeCurrentDate = (year: number, monthIndex: number) => {
  const checkedDay = null;
  const countDaysOfMonth = new Date(year, monthIndex + 1, 0).getDate();
  const month = months[monthIndex];
  const firstDayOfCurrentMonth = new Date(year, monthIndex, 0).getDay();
  const lastDayOfLastMonth = new Date(year, monthIndex, 0).getDate();
  const days = renderDays(
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
