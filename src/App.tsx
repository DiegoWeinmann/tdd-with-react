import React from 'react';
import Congrats from './Congrats';

const App = () => {
	return (
		<div>
			<h1>React App</h1>
			<Congrats success={false} />
		</div>
	);
};

export default App;
