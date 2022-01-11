import React, { useState } from "react";
import Child from "./Child";

function Parents() {
    const [number, setNumber] = useState(0);
    const getData = (number) => {
        setNumber(number);
    }

    return (
        <>
            <p>여기는 부모입니다:{number}</p>
            <Child number={number} getData={getData} />
        </>
    );
}

export default Parents;