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
    const [date, setDate] = useState(new Date().toString());
    const onClickNumber = (() => {
        return setNumber(Math.random());
    });
    const onClickDate = (() => {
        return setDate(new Date().toString());
    })
    return (
        <div className="container">
            <h2>Function Component</h2>
            <p>Number: {number}</p>
            <p>Number: {date}</p>
            <button onClick={onClickNumber}>Random</button>
            <button onClick={onClickDate}>Date</button>
        </div >
    );
}

// ---------------------------------------------
class ClassComp extends React.Component {
    // state = {                           // state 선언 및 기본값 설정
    //     number: this.props.initNumber,
    //     date: (new Date()).toString()
    // }

    constructor(props) { //생성자
        super(props);
        this.state = {
            number: this.props.initNumber,
            date: (new Date()).toString()
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Class Component</h2>
                <p>Number: {this.state.number}</p> {/* 출력*/}
                <p>Date: {this.state.date}</p>

                <button onClick={
                    function () { this.setState({ number: Math.random() }) }.bind(this)
                }>Random</button>
                <button onClick={
                    function () { this.setState({ date: new Date().toString() }) }.bind(this)
                }>Date</button>
            </div>
        )
    }
}
