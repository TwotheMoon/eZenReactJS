import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countUp = (() => {
    setCount((prev) => prev + 1);
  });
  return (
    <>
      <div>
        <span>{count}</span>
        <button onClick={countUp}>Click Me</button>
      </div>
    </>
  );
}
export default App;
