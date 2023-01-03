
import { useDispatch } from 'react-redux';
import {deleteTodo } from '../Redux/TodoSlice';

const TodoItem = ({todos}) => {
	const dispatch = useDispatch();
	const handleDelete= () => {
		dispatch(deleteTodo({id:todos.id}));
	};
	return (
			<div><input type='checkbox'></input>
					{todos.title}
				<button onClick={handleDelete}> X</button>
			</div>
	);
};
export default TodoItem;
