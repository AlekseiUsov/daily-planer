export type TMonthStatus = "last" | "current" | "next";

export interface ICalendarNumber {
  id: string;
  day: number;
  monthStatus: TMonthStatus;
  isActive: boolean;
  isLastOrNextMonth?: boolean;
}

export interface ICalendarNumbers {
  days: ICalendarNumber[];
  checkedDay: number | null;
}

export interface ICalendarDate {
  month: string;
  year: number;
  isOpenMonthTable: boolean;
}

export type IMonthList = {
  selectedYear: number;
};

export type IMonth = {
  year: number;
  month: string;
  monthIndex: number;
};

export type TCalendar = ICalendarDate &
  ICalendarNumbers & {
    checkedDayName: string | null;
  };
