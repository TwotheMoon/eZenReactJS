import { useContext, useReducer } from "react";
import { IndexContext, indexReducer, initialState } from "./store";

function TextButton() {
    const [state, dispatch] = useContext(IndexContext)
    return (
        <>
            <div>{state.text}</div>
            <button onClick={() => dispatch({ type: "changeKor" })}>한글</button>
            <button onClick={() => dispatch({ type: "changeEng" })}>영어</button>
        </>
    );
}

function CountButton() {
    const [state, dispatch] = useContext(IndexContext)
    return (
        <>
            <div>{state.count}</div>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </>
    );
}

function Box1() {
    return (
        <div>
            <TextButton />
            <CountButton />
        </div>
    )
}

function ReducerUseContext() {

    return (
        <div>
            <IndexContext.Provider value={useReducer(indexReducer, initialState)}>
                <Box1 />
            </IndexContext.Provider>
        </div>
    );
}

export default ReducerUseContext;