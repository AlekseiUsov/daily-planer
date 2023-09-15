export type TMonth = "last" | "current" | "next";

export interface ICalendarNumber {
  id: string;
  month: TMonth;
  day: number;
  isActive: boolean;
  addClass?: boolean;
}

export interface ICalendarNumbers {
  days: ICalendarNumber[];
  checkedDay: number | null;
}

export interface IMonthAndYear {
  month: string;
  year: number;
}

export type TMonthTable = {
  isOpenMonthTable: boolean;
  setIsOpenMonthTable: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TMonthTableElement = TMonthTable & {
  year: number;
  month: string;
  monthIndex: number;
};

export type TCurrentMonthAndYear = IMonthAndYear & TMonthTable;

export type TCurrentFullDate = IMonthAndYear & {
  checkedDay: number | null;
};

export type ICalendar = IMonthAndYear & ICalendarNumbers;

export type IStore = ICalendar & {
  checkedDay: number | null;
  firstDayOfCurrentMonth: number;
  lastDayOfLastMonth: number;
  monthIndex: number;
  countDaysOfMonth: number;
};
