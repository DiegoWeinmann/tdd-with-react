import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div role='main'>
      <h1>Counter App</h1>
      <button onClick={() => setCount(count + 1)}>increment counter</button>
      <button onClick={() => setCount(count - 1)}>decrement counter</button>
      <div aria-label='counter display'>Count: {count}</div>
    </div>
  );
}

export default App;
