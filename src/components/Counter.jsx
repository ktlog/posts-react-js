import React, {useState} from "react"

export const Counter = function () {
	const [count, setCount] = useState(0)

	function increment() {
		setCount(count + 1)
	}

	function decrement() {
		setCount(count - 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>like</button>
			<button onClick={decrement}>dislike</button>
		</div>
	)
}