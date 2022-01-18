import './App.css';
import React, { useState } from "react";
import Button from './Button';
import Board from './Board';

function App() {
  const [gameStory, setGameStory] = useState([]);

  const [blueGameStory, setBlueGameStory] = useState([]);

  function random1(n) {
    return Math.ceil(Math.random() * n);
  }
  function random2(n) {
    return Math.ceil(Math.random() * n);
  }

  const handleRollClick = () => {
    const nextNum1 = random1(6);
    const nextNum2 = random2(6);
    setGameStory([...gameStory, nextNum1]);
    setBlueGameStory([...gameStory, nextNum2]);
  };

  const handleResetClick = () => {
    setGameStory([]);
    setBlueGameStory([]);
  }

  return (
    <div className='App'>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleResetClick}>처음부터</Button>
      <div className='boards'>
        <Board color="red" user="나" gameStory={gameStory} />
        <Board color="blue" user="상대" gameStory={blueGameStory} />
      </div>
    </div>
  );
}
export default App;
