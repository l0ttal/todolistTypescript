import React, { useRef, useState } from 'react';
import TodoProps from './Todointerface';
import TodoTable from './TodoTable';

function Todolist(props: TodoProps) {
	const [todo, setTodo] = useState<TodoProps>({} as TodoProps);
	const [todos, setTodos] = useState<Object>({});

	const addTodo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		setTodos({ ...todos, todo });
	}

	const deleteTodo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setTodos([]);
	}

	const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodo({ ...todo, [event.target.name]: event.target.value });
	}

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	}

	return (
		<div className="App">
			<form onSubmit={submitForm}>
				<label htmlFor="date">Date: </label><br />
				<input type="text" placeholder="Date" name="date" value={props.date} onChange={inputChanged} />
				<label htmlFor="description">Description: </label><br />
				<input type="text" placeholder="Description" name="desc" value={props.description} onChange={inputChanged} />
				<label htmlFor="priority">Priority: </label><br />
				<input type="text" placeholder="Priority" name="priority" value={props.priority} onChange={inputChanged} />

				<button onClick={addTodo}>Add</button>
				<button onClick={deleteTodo}>Delete</button>

				<TodoTable description={props.description} date={props.date} priority={props.priority} />
			</form >
		</div >
	);
}

export default Todolist;