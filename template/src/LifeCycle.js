import React, { useState } from "react";
import './App.css';

function LifeCycle() {


    return (
        <div className="container">
            <h1>React LifeCycle</h1>
            <FuncComp initNumber={2} />
            <ClassComp initNumber={2} />
        </div>
    );
}
export default LifeCycle;

// ---------------------------------------------
function FuncComp({ initNumber }) {

    const [number, setNumber] = useState(initNumber);

    return (
        <div className="container">
            <h2>Function Component</h2>
            <p>Number: {number}</p>
        </div>
    );
}

// ---------------------------------------------
class ClassComp extends React.Component {

    render() {
        return (
            <div className="container">
                <h2>Class Component</h2>
                <p>Number: {this.props.initNumber}</p>
            </div>
        )
    }
}