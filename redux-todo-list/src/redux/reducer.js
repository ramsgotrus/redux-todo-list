import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const addTodoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            todo: action.payload.todo,
          };
        }
        return todo;
      });
    },
    removeTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
