import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState(['list1', 'list2', 'list3']);
  const [flag, setFlag] = useState(false);
  const onClick = (() => {
    setFlag((prev) => !prev);
  });

  return (
    <div className="App">

      {
        title.map((title, index) => {
          return (
            <div key={index} className="title">Title:{title}</div>
          )
        })
      }
      <button onClick={onClick}>On/Off</button>

      {
        flag ? <SubPage /> : null
      }
    </div>
  );

  function SubPage() {

    return (
      <div>
        <h2>서브 페이지</h2>
        <div>Hello World</div>
      </div>
    );
  }

}
export default App;
