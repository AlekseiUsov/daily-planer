//RTK
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// types
import { ICalendarNumber, IStore } from "../../types/types";

// Utils
import {
  createCurrentDate,
  months,
  changeCurrentDate,
} from "../../utils/createDate";
import { getHolidays } from "../../utils/API's";

const { monthIndex, year, firstDayOfCurrentMonth, lastDayOfLastMonth, days } =
  createCurrentDate();

const initialState: IStore = {
  isLoading: false,
  isError: false,

  holidays: [],
  isTodayHoliday: null,
  checkedDay: null,

  firstDayOfCurrentMonth: firstDayOfCurrentMonth,
  lastDayOfLastMonth: lastDayOfLastMonth,

  month: months[monthIndex],
  monthIndex: monthIndex,
  countDaysOfMonth: new Date(year, monthIndex + 1, 0).getDate(),

  year: year,
  days: days,
};

export const fetchHolidays = createAsyncThunk("fetchHolidays", getHolidays);

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
  },
  extraReducers: {
    [fetchHolidays.pending.type]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchHolidays.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.holidays = action.payload;
      state.isError = false;
    },
    [fetchHolidays.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.holidays = [];
      state.isError = action.error.message;
    },
  },
});

export default calendarSlices.reducer;

export const {
  decrementMonth,
  incrementMonth,
  setCurrentDay,
  setDateByMonthAndYear,
} = calendarSlices.actions;
