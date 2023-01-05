import { createSlice } from "@reduxjs/toolkit";

const TodoSlice= createSlice({
    name: "todos",
    initialState: {
      todos: [
        {id: Math.random(),task: "Start the Day With a Glass of Lemon Water ",isDone: false, isEdited: false},
        {id: Math.random(),task: "Exercise in the Morning",isDone: false,isEdited: false},
        {id: Math.random(),task: "Eat a Good Breakfast.",isDone: false,isEdited: true},
        {id: Math.random(),task: "Stay Hydrated",isDone: false,isEdited: true},
        {id: Math.random(),task: "Take Time to Relax.",isDone: false,isEdited: false},
      ],
      FilterItems: "All",
    },
    reducers:{
        Addtodo: (state, action) => {
            state.todos.push(action.payload);
          },
          deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
          },
          Completetodo: (state, action) => {
            state.todos.map((el) => {
              if (el.id === action.payload) {
                return (el.isDone = !el.isDone);
              }
              return el.isDone;
            });
          }, 
          Edittodo: (state, action) => {
            state.todos.map((el) =>
              el.id === action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
            );
          },
          Updatetodo: (state, action) => {
            state.todos.map((el) =>
              el.id === action.payload.id ? (el.task = action.payload.task) : el.task
            );
          },
          Updatetodo: (state, action) => {
            state.todos.map((el) =>
              el.id === action.payload.id ? (el.task = action.payload.task) : el.task
            );
          },
          FilterAll: (state) => {
            state.FilterItems = "All";
          },
          FilterDone: (state) => {
            state.FilterItems = "Done";
          },
          FilterUndone: (state) => {
            state.FilterItems = "Undone";
          },     
    },



});
export const  {Addtodo,deleteTodo, Completetodo, Edittodo,  Updatetodo,FilterAll,
  FilterDone, FilterUndone,}=TodoSlice.actions;
export default TodoSlice.reducer;