import React, { useState } from 'react';

interface TodoProps {
	description: string;
	date: string;
	priority: string;
}

function TodoTable(todo: TodoProps) {

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Date</th>
						<th>Description</th>
						<th>Priority</th>
						<th></th>
					</tr>
					<tr>
						<td>{todo.date}</td>
						<td>{todo.description}</td>
						<td>{todo.priority}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default TodoTable;