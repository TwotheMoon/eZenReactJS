import React from "react";

function Child({ number, getData }) {

    const onClick = () => {
        getData(number + 1);
    };

    return (
        <>
            <button onClick={onClick}>Click Me</button>
        </>
    );
}

export default Child;