import {createSlice } from '@reduxjs/toolkit';
export const TodoSlice = createSlice({
	name: 'todos',
	initialState: [ {id:Math.random(), title: "read a story", completed:'false'},
                     {id:Math.random(), title: "go to the gym", completed:'false'},
                     {id:Math.random(), title: "go shopping", completed:'false'},
                    ],
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		  },
	
		deleteTodo: (state, action) => {
			return state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
	
});

export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
