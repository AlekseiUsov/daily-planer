import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector as selectorHook,
} from "react-redux";

// Slices
import { calendarSlices } from "./slices/calendarSlices";
import { todosSlices } from "./slices/todosSlices";

const rootReducers = combineReducers({
  calendar: calendarSlices.reducer,
  todos: todosSlices.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
