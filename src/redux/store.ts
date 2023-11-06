import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector as selectorHook,
} from "react-redux";

// Slices
import { calendarSlices } from "./slices/calendarSlices";
import { todosSlices } from "./slices/todosSlices";

export const store = configureStore({
  reducer: {
    calendar: calendarSlices.reducer,
    todos: todosSlices.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
