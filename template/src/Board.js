import Dice from "./Dice";

function Board({ number, gameStory, color, user }) {
    const result = gameStory.reduce((prev, curr) => {
        return prev + curr
    }, 0);
    console.log(result);

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