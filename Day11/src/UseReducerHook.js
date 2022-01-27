import { useReducer } from "react";
import { indexReducer, initialState } from "./store";

function UseReducerHook() {
    const [state, dispatch] = useReducer(indexReducer, initialState)

    return (
        <div>
            <h2>UseReducer</h2>
            <hr />
            <button onClick={() => dispatch({ type: "changeKor" })}>한글</button>
            <button onClick={() => dispatch({ type: "changeEng" })}>영어</button>
            <div>{state.text}</div>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <div>{state.count}</div>
        </div>
    );
}

export default UseReducerHook;