import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { ITodo, ITodos } from "../../types/todos";

// utils
import { addNewTodo } from "../../utils/addNewTodo";

const initialState: ITodos = {
  todos: [],
};

export const todosSlices = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(
      state,
      payload: PayloadAction<{ newTodo: string; curTodo: ITodo }>
    ) {
      const currentTodo = payload.payload.curTodo;
      const newTodo = payload.payload.newTodo;
      state.todos = addNewTodo(state.todos, currentTodo, newTodo);
    },
  },
});

export const { addTodo } = todosSlices.actions;
