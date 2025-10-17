import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abd", task: "demo-task", isDone: false }],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: (task) => {
        return {
          payload: {
            id: nanoid(),
            task,
            isDone: false,
          },
        };
      },
    },
    deleteTodo: (state, action) => {
      const idx = state.todos.findIndex((todo) => todo.id === action.payload);
      if (idx !== -1) {
        state.todos.splice(idx, 1);
      }
    },

    toggleIsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleIsDone } = todoSlice.actions;

export default todoSlice.reducer;
