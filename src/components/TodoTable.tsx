import React, { useState } from 'react';
import Todolist from './Todolist';
import TodoProps from './Todointerface';

function TodoTable(props: TodoProps) {

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
						<td>{props.date}</td>
						<td>{props.description}</td>
						<td>{props.priority}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default TodoTable;