//RTK
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types
import { IStore } from "../../types/store";
import { ICalendarNumber } from "../../types/calandar";

// Utils
import { createCurrentDate, changeCurrentDate } from "../../utils/createDate";
import { setCheckedDayName } from "../../utils/setCheckedDayName";

// variables
import { months, holidays } from "../../variables/variables";

const { monthIndex, year, firstDayOfCurrentMonth, lastDayOfLastMonth, days } =
  createCurrentDate();

const initialState: IStore = {
  checkedDay: null,
  checkedDayName: null,

  firstDayOfCurrentMonth: firstDayOfCurrentMonth,
  countDaysOfMonth: new Date(year, monthIndex + 1, 0).getDate(),
  lastDayOfLastMonth: lastDayOfLastMonth,

  month: months[monthIndex],
  monthIndex: monthIndex,

  year: year,
  days: days,
};

export const calendarSlices = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDateByMonthAndYear(
      state,
      payload: PayloadAction<{ year: number; monthIndex: number }>
    ) {
      const { year, monthIndex } = payload.payload;
      const newDate = changeCurrentDate(year, monthIndex);
      return (state = { ...state, ...newDate });
    },
    decrementMonth(state) {
      const year = state.monthIndex === 0 ? state.year - 1 : state.year;
      const monthIndex = state.monthIndex === 0 ? 11 : state.monthIndex - 1;

      const newDate = changeCurrentDate(year, monthIndex);
      return (state = { ...state, ...newDate });
    },
    incrementMonth(state) {
      const year = state.monthIndex === 11 ? state.year + 1 : state.year;
      const monthIndex = state.monthIndex === 11 ? 0 : state.monthIndex + 1;

      const newDate = changeCurrentDate(year, monthIndex);
      return (state = { ...state, ...newDate });
    },
    setCurrentDay(state, payload: PayloadAction<ICalendarNumber>) {
      const { id, day, month } = payload.payload;

      if (month === "last") {
        const year = state.monthIndex === 0 ? state.year - 1 : state.year;
        const monthIndex = state.monthIndex === 0 ? 11 : state.monthIndex - 1;
        console.log(year);

        const newDate = changeCurrentDate(year, monthIndex, day);
        return (state = { ...state, ...newDate });
      }

      if (month === "current") {
        state.checkedDay = day;
        state.days = state.days.map(
          (day) =>
            (day =
              day.id === id
                ? { ...day, isActive: true }
                : { ...day, isActive: false })
        );
      }

      if (month === "next") {
        const year = state.monthIndex === 11 ? state.year + 1 : state.year;
        const monthIndex = state.monthIndex === 11 ? 0 : state.monthIndex + 1;

        const newDate = changeCurrentDate(year, monthIndex, day);
        return (state = { ...state, ...newDate });
      }
    },
    checkDayHolidayName(state, payload: PayloadAction<ICalendarNumber>) {
      const { day } = payload.payload;
      state.checkedDayName = setCheckedDayName(day, state.month, holidays);
    },
  },
});

export default calendarSlices.reducer;

export const {
  decrementMonth,
  incrementMonth,
  setCurrentDay,
  checkDayHolidayName,
  setDateByMonthAndYear,
} = calendarSlices.actions;
