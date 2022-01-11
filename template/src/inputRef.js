import React, { useRef, useEffect } from "react";

function InputRef() {
    const inputRef = useRef();

    console.log("Rendering...");

    useEffect(() => {
        console.log("Call useEffect");
    }, []);

    const login = () => {
        alert(`환영 ${inputRef.current.value}!`);
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} placeholder="username" />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default InputRef;