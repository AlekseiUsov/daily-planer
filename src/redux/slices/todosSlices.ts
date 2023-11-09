import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { IDayTodos, IDaysTodos } from "../../types/todos";

// utils
import { addNewTodo } from "../../utils/addNewTodo";

// variables
import { storage } from "../../variables/variables";

const initialState: IDaysTodos = {
  todos: storage,
};

export const todosSlices = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(
      state,
      payload: PayloadAction<{ newTodo: string; dayTodos: IDayTodos }>
    ) {
      const dayTodos = payload.payload.dayTodos;
      const newTodo = payload.payload.newTodo;
      state.todos = addNewTodo(state.todos, dayTodos, newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo } = todosSlices.actions;
