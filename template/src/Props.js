function Box1({ name }) {
    return (
        <div>
            <Box2 name={name} />
        </div>
    )
}
function Box2({ name }) {
    return (
        <div>
            <h1>Box2 에서 출력 {name}</h1>
        </div>
    )
}

function Props() {
    const userName = "Moondal"
    return (
        <div>
            <h2>Props</h2>
            <hr />
            <Box1 name={userName}></Box1>
        </div>
    );
}

export default Props;