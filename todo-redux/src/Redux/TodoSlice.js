import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: Math.random(), task: "Learn Redux ", isDone: false },
      { id: Math.random(), task: "Learn react", isDone: true },
      { id: Math.random(), task: "Learn js", isDone: false },
    ],
  },
  reducers: {
    Addtodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export default TodoSlice.reducer;
export const { Addtodo,deleteTodo } = TodoSlice.actions;