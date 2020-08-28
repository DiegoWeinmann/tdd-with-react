import React, { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	const [error, setError] = useState(false);

	const increment = () => {
		if (error && count === 0) {
			setError(false);
			setCount(count + 1);
		} else {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			return setCount(count - 1);
		} else {
			setError(true);
			setTimeout(() => setError(false), 3000);
		}
	};

	return (
		<div role="main">
			<h1>Counter App</h1>
			<button onClick={increment}>increment counter</button>
			<button onClick={decrement}>decrement counter</button>
			<div aria-label="counter display">Count: {count}</div>
			{error && <div>Error: You can't go below of zero.</div>}
		</div>
	);
}

export default App;
