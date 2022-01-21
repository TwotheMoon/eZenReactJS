import { Link, useHistory } from "react-router-dom";

const quiz_list = [
    { question: '세균이나 바이러스는 일반적으로 열에 강하다', answer: false },
    { question: '약은 따뜻한 물과 함께 복용해야 효과적이다', answer: true },
    { question: '코로나바이러스는 공기만으로 전염된다', answer: false },
    { question: '사람의 5가지 (시각, 후각, 미각, 청각, 촉각) 충에서 가장 먼저 나빠지는 감각기관은 시각이다', answer: true }
];

function Quiz() {
    const history = useHistory();
    const setAnswer = (user) => {
        console.log(user);
    }

    return (
        <div>
            <h3>1번 문제</h3>
            <p>{quiz_list[0].question}</p>
            <button onClick={() => setAnswer(true)}>O</button>
            <button onClick={() => setAnswer(false)}>X</button>
        </div>
    );
}

export default Quiz;