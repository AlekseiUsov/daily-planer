//RTK
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types
import { ICalendarNumber, IStore } from "../../types/types";

// Utils
import { createDate, renderDays } from "../../utils/createDate";

let {
  monthIndex,
  year,
  checkedDay,
  countDaysOfMonth,
  firstDayOfCurrentMonth,
  lastDayOfLastMonth,
} = createDate();

const months = [
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

const initialState: IStore = {
  checkedDay: null,

  firstDayOfCurrentMonth: firstDayOfCurrentMonth,
  lastDayOfLastMonth: lastDayOfLastMonth,

  month: months[monthIndex],
  monthIndex: monthIndex,
  countDaysOfMonth: new Date(year, monthIndex + 1, 0).getDate(),

  year: year,
  days: renderDays(
    firstDayOfCurrentMonth,
    lastDayOfLastMonth,
    countDaysOfMonth,
    checkedDay
  ),
};

export const calendarSlices = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate(
      state,
      payload: PayloadAction<{ year: number; monthIndex: number }>
    ) {
      const { year, monthIndex } = payload.payload;
      state.year = year;

      state.monthIndex = monthIndex;

      console.log(year);

      state.checkedDay = null;

      state.countDaysOfMonth = new Date(
        state.year,
        state.monthIndex + 1,
        0
      ).getDate();

      state.month = months[state.monthIndex];

      state.firstDayOfCurrentMonth = new Date(
        state.year,
        state.monthIndex,
        0
      ).getDay();

      state.lastDayOfLastMonth = new Date(
        state.year,
        state.monthIndex,
        0
      ).getDate();

      state.days = renderDays(
        state.firstDayOfCurrentMonth,
        state.lastDayOfLastMonth,
        state.countDaysOfMonth,
        state.checkedDay
      );
    },
    decrementMonth(state) {
      state.year = state.monthIndex === 0 ? state.year - 1 : state.year;

      state.monthIndex = state.monthIndex === 0 ? 11 : state.monthIndex - 1;

      state.checkedDay = null;

      state.countDaysOfMonth = new Date(
        state.year,
        state.monthIndex + 1,
        0
      ).getDate();

      state.month = months[state.monthIndex];

      state.firstDayOfCurrentMonth = new Date(
        state.year,
        state.monthIndex,
        0
      ).getDay();

      state.lastDayOfLastMonth = new Date(
        state.year,
        state.monthIndex,
        0
      ).getDate();

      state.days = renderDays(
        state.firstDayOfCurrentMonth,
        state.lastDayOfLastMonth,
        state.countDaysOfMonth,
        state.checkedDay
      );
    },
    incrementMonth(state) {
      state.year = state.monthIndex === 11 ? state.year + 1 : state.year;

      state.monthIndex = state.monthIndex === 11 ? 0 : state.monthIndex + 1;

      state.checkedDay = null;

      state.countDaysOfMonth = new Date(
        state.year,
        state.monthIndex + 1,
        0
      ).getDate();

      state.month = months[state.monthIndex];
      state.firstDayOfCurrentMonth = new Date(
        state.year,
        state.monthIndex,
        0
      ).getDay();

      state.lastDayOfLastMonth = new Date(
        state.year,
        state.monthIndex,
        0
      ).getDate();

      state.days = renderDays(
        state.firstDayOfCurrentMonth,
        state.lastDayOfLastMonth,
        state.countDaysOfMonth,
        state.checkedDay
      );
    },
    setCurrentDay(state, payload: PayloadAction<ICalendarNumber>) {
      const { id, day, month } = payload.payload;

      if (month === "last") {
        state.year = state.monthIndex === 0 ? state.year - 1 : state.year;

        state.monthIndex = state.monthIndex === 0 ? 11 : state.monthIndex - 1;

        state.checkedDay = day;
        state.countDaysOfMonth = new Date(
          state.year,
          state.monthIndex + 1,
          0
        ).getDate();

        state.month = months[state.monthIndex];

        state.firstDayOfCurrentMonth = new Date(
          state.year,
          state.monthIndex,
          0
        ).getDay();

        state.lastDayOfLastMonth = new Date(
          state.year,
          state.monthIndex,
          0
        ).getDate();

        state.days = renderDays(
          state.firstDayOfCurrentMonth,
          state.lastDayOfLastMonth,
          state.countDaysOfMonth,
          state.checkedDay
        );
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
        state.year = state.monthIndex === 11 ? state.year + 1 : state.year;

        state.monthIndex = state.monthIndex === 11 ? 0 : state.monthIndex + 1;

        state.checkedDay = day;

        state.countDaysOfMonth = new Date(
          state.year,
          state.monthIndex + 1,
          0
        ).getDate();

        state.month = months[state.monthIndex];
        state.firstDayOfCurrentMonth = new Date(
          state.year,
          state.monthIndex,
          0
        ).getDay();

        state.lastDayOfLastMonth = new Date(
          state.year,
          state.monthIndex,
          0
        ).getDate();

        state.days = renderDays(
          state.firstDayOfCurrentMonth,
          state.lastDayOfLastMonth,
          state.countDaysOfMonth,
          state.checkedDay
        );
      }
    },
  },
});

export default calendarSlices.reducer;

export const { decrementMonth, incrementMonth, setCurrentDay, setDate } =
  calendarSlices.actions;
