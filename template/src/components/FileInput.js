import { useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
    const inputRef = useRef();
    const handleChange = (e) => {
        const nextValue = e.target.files[0];
        onChange(name, nextValue);
    }
    const handleCleareClick = () => {
        const inputNode = inputRef.current;
        if (!inputNode) return
        inputNode.value = "";
        onChange(name, null);
    }

    return (
        <div>
            <input ref={inputRef} type="file" onChange={handleChange} />
            {value &&
                <button onClick={handleCleareClick}>❌</button>
            }
        </div>
    );
}
export default FileInput;