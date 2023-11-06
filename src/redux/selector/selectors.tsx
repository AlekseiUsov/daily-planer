import { RootState } from "../store";

export const calendarSelector = (store: RootState) => store.calendar;
export const todosSelector = (store: RootState) => store.todos;
