// common
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

// Store Types
export type IStore = ICalendar & {
  isLoading: boolean;
  isError: boolean;
  isTodayHoliday: null | IHoliday;
  holidays: IHoliday[];
  checkedDay: number | null;
  firstDayOfCurrentMonth: number;
  lastDayOfLastMonth: number;
  monthIndex: number;
  countDaysOfMonth: number;
};

export interface IHoliday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: null;
  launchYear: null;
  type: string;
}

// API
export type TServerResponce<T> = {
  success: boolean;
} & T;

export type THolidaysResponce = TServerResponce<{
  holidays: String[];
}>;
