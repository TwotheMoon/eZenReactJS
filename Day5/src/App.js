import './App.css';
import React, { useState } from 'react';
import InputRef from './inputRef';

function App() {
  const [input, setInput] = useState()
  const onChange = (event) => {
    const value = event.target.value;
    setInput(value);
  }

  return (
    <>
      <p>입력값:{input}</p>
      <input onChange={onChange}></input>
      <InputRef></InputRef>
    </>
  );
}
export default App;
