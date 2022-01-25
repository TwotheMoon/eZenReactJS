import { createContext } from "react"

export const IndexContext = createContext();

export const initialState = {
    text: '인사말',
    count: 0
}
export const indexReducer = (state, action) => {
    switch (action.type) {
        case "changeKor": {
            return {
                ...state,
                text: "안녕"
            }
        }
        case "changeEng": {
            return {
                ...state,
                text: "hello"
            }
        }
        case "increment": {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case "decrement": {
            return {
                ...state,
                count: state.count - 1
            }
        }
    }
}