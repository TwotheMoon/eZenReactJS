import './App.css';
import { Header } from './Header';
import React, { useState } from 'react';

function App() {

  const [subject, setSubject] = useState([
    { title: 'WEB', sub: '인터넷에 설명설명....' }
  ]);
  const [content, setContent] = useState([
    { id: 1, title: "Html", desc: '에치티에멜' },
    { id: 2, title: "CSS", desc: '시에스에스' },
    { id: 3, title: "Js", desc: '자바스크립트짱' },
  ]);


  return (
    <>
      <Header title={subject[0].title} sub={subject[0].sub} />
      <ul>
        {
          content.map((list) => {
            return (
              <li key={list.id}>
                {list.id}
                {list.title}
                {list.desc}
              </li>
            );
          })
        }
      </ul>
    </>
  );
}
export default App;
