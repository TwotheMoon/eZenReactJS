import React, { useEffect, useState } from "react";
import './App.css';

function LifeCycle() {
    const [funcShow, setFuncShow] = useState(true);
    const [classShow, setClassShow] = useState(true);

    return (
        <div className="container">
            <h1>React LifeCycle</h1>
            <button onClick={function () { setFuncShow((prev) => !prev) }}>Function Component 제거</button>
            <button onClick={function () { setClassShow(!classShow) }}>Class Component 제거</button>
            {funcShow ?
                <FuncComp initNumber={2} /> : null
            }
            {classShow ?
                <ClassComp initNumber={2} /> : null
            }
        </div>
    );
}
export default LifeCycle;

// ---------------------------------------------
function FuncComp({ initNumber }) {

    const [number, setNumber] = useState(initNumber);
    const [date, setDate] = useState(new Date().toString());
    let funcStyle = 'color:blue';


    console.log("%c함수형 컴포넌트에서 useEffect", funcStyle);
    const onClickNumber = (() => {
        return setNumber(Math.random());
    });
    const onClickDate = (() => {
        return setDate(new Date().toString());
    })

    useEffect(() => {
        console.log("%c함수형 컴포넌트에서 Render", funcStyle)
    });
    useEffect(() => {
        return function () {
            console.log("%c함수형 컴포넌트에서 한 번만 실행", funcStyle)
        }
    }, []);
    useEffect(() => {
        console.log("%c함수형 컴포넌트에서 number", funcStyle)
    }, [number]);
    useEffect(() => {
        console.log("%c함수형 컴포넌트에서 Date", funcStyle)
    }, [date]);
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
let classStyle = 'color:green';
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
    componentWillMount() {    // 랜더 전
        console.log("%c클래스 컴포넌트에서 WillMount", classStyle);
    }
    componentDidMount() {
        console.log("%c클래스 컴포넌트에서 DidMount", classStyle);
    }
    //-------------------------------------------------------------------
    shouldComponentUpdate(nextProps, nestState) { // 랜더 업데이트
        console.log("%c클래스 컴포넌트에서 shouldComponentUpdate", classStyle)
        return true;
    }
    componentWillUpdate(nextProps, nestState) {
        console.log("%c클래스 컴포넌트에서 WillUpdate", classStyle);
    }
    componentDidUpdate(nextProps, nestState) {
        console.log("%c클래스 컴포넌트에서 DidUpdate", classStyle);
    }
    //------------------------------------------------------------------

    componentWillUnmount() { // 랜더 후
        console.log("%c클래스 컴포넌트에서 WillUnmount", classStyle);
    }

    render() {
        // 랜더 시 실행
        console.log("%c클래스 컴포넌트에서 Render", classStyle);
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
