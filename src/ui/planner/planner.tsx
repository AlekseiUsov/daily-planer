import styles from "./planner.module.scss";

// hooks
import { useAppSelector } from "../../redux/store";

// selector
import {
  calendarSelector,
  todosSelector,
} from "../../redux/selector/selectors";

// utils
import { checkDayTodos } from "../../utils/checkDayTodos";

// Components
import { PlannerDescription } from "./plannerDescription/plannerDescription";
import { Calendar } from "../calendar/calendar";
import { DayToDos } from "../dayTodos/dayTodos";

export const Planner = () => {
  const calandar = useAppSelector(calendarSelector);
  const { checkedDay, checkedDayName, month, monthIndex, year } = calandar;

  const { todos } = useAppSelector(todosSelector);

  const listTodos = checkedDay
    ? checkDayTodos(todos, checkedDay, month, year)
    : [];

  console.log(listTodos);

  return (
    <div className={styles.planner}>
      <Calendar {...calandar} />
      {checkedDay && (
        <DayToDos
          day={checkedDay}
          dayName={checkedDayName}
          month={month}
          monthIndex={monthIndex}
          year={year}
          listTodos={listTodos}
        />
      )}
      <PlannerDescription />
    </div>
  );
};
