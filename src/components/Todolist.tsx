import React, { useRef, useState } from 'react';
import TodoTable from './TodoTable';

interface TodoProps {
	description: string;
	date: string;
	priority: string;
}

function Todolist(todo: TodoProps) {
	const [input, setInput] = useState<TodoProps>({} as TodoProps);
	const [todos, setTodos] = useState([]);
	const gridRef = useRef();

	const addTodo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setTodos([input, ...todos]);
	}

	const deleteTodo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setTodos(todos.filter((todo, index) =>
			index !== gridRef.current.getSelectedNodes()[0].childIndex));
	}

	const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput({ ...todo, [event.target.name]: event.target.value });
	}

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	}

	return (
		<div className="App">
			<form onSubmit={submitForm}>
				<label htmlFor="date">Date: </label><br />
				<input type="text" placeholder="Date" name="date" value={input.date} onChange={inputChanged} />
				<label htmlFor="description">Description: </label><br />
				<input type="text" placeholder="Description" name="desc" value={input.description} onChange={inputChanged} />
				<label htmlFor="priority">Priority: </label><br />
				<input type="text" placeholder="Priority" name="priority" value={input.priority} onChange={inputChanged} />

				<button onClick={addTodo}>Add</button>
				<button onClick={deleteTodo}>Delete</button>

				<TodoTable description={input.description} date={input.date} priority={input.priority} />
			</form >
		</div >
	);
}

export default Todolist;