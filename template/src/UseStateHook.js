import { useState } from 'react';

function UseStateHook() {
    const [text, setText] = useState("인사말");
    const [count, setCount] = useState(0);
    const changeKor = () => {
        setText("안녕하세요");
    }
    const changeEng = () => {
        setText("Hello");
    }
    const increment = () => {
        setCount((prev) => prev + 1);
    }
    const decrement = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <div>
            <h2>UseState</h2>
            <hr />
            <button onClick={changeKor}>한글</button>
            <button onClick={changeEng}>영어</button>
            <div>{text}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <div>{count}</div>
        </div>
    );
}

export default UseStateHook;