interface TodoProps {
	description: string;
	date: string;
	priority: string;
}

interface TodoForm {
	todo?: TodoProps;
}

export default TodoProps;