import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { IDayTodos, IDaysTodos } from "../../types/todos";

// utils
import { addNewTodo } from "../../utils/todos/addNewTodo";
import { changeStatusTodo } from "../../utils/todos/changeStatusTodo";
import { removeTodo } from "../../utils/todos/removeTodo";

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
      payload: PayloadAction<{ newTodo: string; currentDay: IDayTodos }>
    ) {
      const currentDay = payload.payload.currentDay;
      const newTodo = payload.payload.newTodo;
      state.todos = addNewTodo(state.todos, currentDay, newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    handleStatusTodo(state, payload: PayloadAction<{ id: string }>) {
      const id = payload.payload.id;
      state.todos = changeStatusTodo(state.todos, id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeATodo(state, payload: PayloadAction<{ id: string }>) {
      const id = payload.payload.id;
      state.todos = removeTodo(state.todos, id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, handleStatusTodo, removeATodo } = todosSlices.actions;
