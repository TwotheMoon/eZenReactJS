import Dice from "./Dice";

function Board({ gameStory, color, user }) {
    const result = gameStory.reduce((prev, curr) => {
        return prev + curr
    }, 0);

    const number = gameStory[gameStory.length - 1] || 1
    return (
        <div>
            <h2>{user}</h2>
            <Dice color={color} num={number} />
            <h2>총 점 : {result}</h2>
            <p>{gameStory.join().replace(/,/gi, ' + ')}</p>
        </div>
    );
}

export default Board;