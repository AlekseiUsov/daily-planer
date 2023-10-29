// hooks
import { FC } from "react";

// types
import { ICalendarNumbers } from "../../../types/calandar";

// Components
import { CalendarNumber } from "./calendarNumber/calendarNumber";

export const CalendarNumbers: FC<ICalendarNumbers> = ({ days }) => {
  return (
    <ul>
      {days.map((day) => (
        <CalendarNumber
          key={day.id}
          id={day.id}
          month={day.month}
          day={day.day}
          isActive={day.isActive}
          isLastOrNextMonth={day.isLastOrNextMonth}
          isHoliday={day.isHoliday}
        />
      ))}
    </ul>
  );
};
