// types

import { IHoliday } from "../types/types";

const formateDate = (date: string) => {
  return date
    .split("-")
    .map((item) => (item.startsWith("0") ? item.substring(1) : item))
    .map((item) => Number(item));
};

// export const isTodayHoliday = (
//   year: number,
//   day: number,
//   monthIndex: number,
//   holidays: IHoliday[]
// ): IHoliday[] => {
//   return holidays.reduce((acc, item) => {
//     const formatedDate = formateDate(item.date);
//     const isHoliday =
//       formatedDate[0] === year &&
//       formatedDate[1] === monthIndex &&
//       formatedDate[2] === day
//         ? true
//         : false;
//   }, []);
// };
