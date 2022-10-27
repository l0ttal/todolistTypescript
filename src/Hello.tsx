import React, { useState } from "react";

interface HelloProps {
	name: string;
	age: number;
}

function Hello(props: HelloProps) {
	const [msg, setMsg] = useState('');

	return (
		<>Hello {props.name}, {props.age}</>
	)
}

export default Hello;