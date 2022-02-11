import { createContext, useContext } from "react";
const IndexContext = createContext();

function Box1() {
    const userName = useContext(IndexContext);

    return (
        <div>
            <h1>Box1 에서 출력 {userName}</h1>
        </div>
    )
}
function Box2() {
    const userName = useContext(IndexContext);
    return (
        <div>
            <h1>Box2 에서 출력{userName}</h1>
        </div>
    )
}

function UseContextHook() {
    const userName = "moonDal";
    return (
        <div>
            <h2>UseContext</h2>
            <hr />
            <IndexContext.Provider value={userName}>
                <Box1 />
                <Box2 />
            </IndexContext.Provider>
        </div>
    );
}

export default UseContextHook;