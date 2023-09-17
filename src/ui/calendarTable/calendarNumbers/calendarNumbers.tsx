// hooks
import { FC } from "react";

// types
import { ICalendarNumbers } from "../../../types/types";

// Components
import { CalendarNumber } from "./calendarNumber/calendarNumber";

export const CalendarNumbers: FC<ICalendarNumbers> = ({ days }) => {
  return (
    <ul>
      {days.map((day) => (
        <CalendarNumber
          id={day.id}
          month={day.month}
          day={day.day}
          isActive={day.isActive}
          addClass={day.addClass}
        />
      ))}
    </ul>
  );
};
