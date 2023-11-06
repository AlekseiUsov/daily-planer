import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { ITodo } from "../../types/todos";

const initialState: ITodo[] = [];

export const todosSlices = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(
      state,
      payload: PayloadAction<{
        newTodo: string;
        day: number;
        monthIndex: number;
        year: number;
      }>
    ) {
      console.log(payload);
    },
  },
});

export const { addTodo } = todosSlices.actions;
