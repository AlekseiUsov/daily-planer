// hooks
import { FC } from "react";

// types
import { ICalendarNumbers } from "../../../../types/calandar";

// Components
import { CalendarNumber } from "./calendarNumber/calendarNumber";

export const CalendarNumbers: FC<ICalendarNumbers> = ({ days }) => {
  return (
    <ul>
      {days.map((day) => (
        <CalendarNumber key={day.id} {...day} />
      ))}
    </ul>
  );
};
