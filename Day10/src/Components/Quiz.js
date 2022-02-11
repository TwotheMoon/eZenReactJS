import { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";

const quiz_list = [
    { id: 1, question: '세균이나 바이러스는 일반적으로 열에 강하다', answer: false },
    { id: 2, question: '약은 따뜻한 물과 함께 복용해야 효과적이다', answer: true },
    { id: 3, question: '코로나바이러스는 공기만으로 전염된다', answer: false },
    { id: 4, question: '사람의 5가지 (시각, 후각, 미각, 청각, 촉각) 충에서 가장 먼저 나빠지는 감각기관은 시각이다', answer: true }
];
let answerArr = [];

function Quiz() {
    const [currentNo, setCurrentNo] = useState(0);
    const history = useHistory();
    const setAnswer = (user) => {
        answerArr.push(user);

        if (currentNo === quiz_list.length - 1) {
            history.push({
                pathname: "/score",
                state: { answer: answerArr, quizList: quiz_list },
            });
        } else {
            cureent();
        }
    }
    const cureent = () => {
        setCurrentNo((prev) => prev + 1);
    }

    return (
        <div>
            <h3>{`${quiz_list[currentNo].id} 번 문제`}</h3>
            <p>{quiz_list[currentNo].question}</p>
            <button onClick={() => setAnswer(true)}>O</button>
            <button onClick={() => setAnswer(false)}>X</button>
        </div>
    );
}

export default Quiz;