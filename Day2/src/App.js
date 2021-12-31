import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState(['list1', 'list2', 'list3']);
  const changeTitle = (() => {
    setTitle("변경된 제목");
  });

  const [count, setCount] = useState(0);
  const countUp = (() => {
    setCount((prev) => prev + 1);
  });

  return (

    <>
      <div className="App">

        {
          title.map((title, index) => {
            return (
              <div key={index} className="title">Title:{title}</div>
            )
          })
        }
        <h2>{title}</h2>
        <h2>{count}</h2>
        <button onClick={changeTitle}>버튼을 클릭하세요</button>
        <button onClick={countUp}>Count up</button>
      </div>
    </>

  );
}

export default App;
