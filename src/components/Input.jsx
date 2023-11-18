import React, {useState} from "react";

export const Input = function () {
	const [value, setValue] = useState('')

	function handleInput(e) {
		setValue(e.target.value)
	}

	return (
		<div className="App">
			<h1>{value}</h1>
			<input
				type="text"
				value={value}
				onChange={handleInput}
			/>
		</div>
	)
}
