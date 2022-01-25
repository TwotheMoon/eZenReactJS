import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Quiz() {
    const history = useHistory();
    const [user_answer_list, setUser_answer_list] = useState([]);
    const quiz_list = [
        { question: '세균이나 바이러스는 일반적으로 열에 강하다', answer: false },
        { question: '약은 따뜻한 물과 함께 복용해야 효과적이다', answer: true },
        { question: '코로나바이러스는 공기만으로 전염된다', answer: false },
        { question: '사람의 5가지 (시각, 후각, 미각, 청각, 촉각) 충에서 가장 먼저 나빠지는 감각기관은 시각이다', answer: true }
    ];
    const setAnswer = (user_answer) => {
        setUser_answer_list([...user_answer_list, user_answer]);
    }

    useEffect(() => {
        if (user_answer_list.length === quiz_list.length) {
            const score = (100 / quiz_list.length) * quiz_list.filter((quiz, idx) => {
                return quiz.answer === user_answer_list[idx];
            }).length

            console.log(score);
            history.push('/score');
        }
    }, [user_answer_list]);
    if (user_answer_list.length === quiz_list.length) {
        return null
    }
    return (
        <div>
            <h2>{user_answer_list.length + 1}번 문제</h2>
            <p>{quiz_list[user_answer_list.length].question}</p>
            <button onClick={() => {
                setAnswer(true);
            }}>
                ⭕
            </button>
            <button onClick={() => {
                setAnswer(false);
            }}>
                ❌
            </button>
        </div>
    );
}

export default Quiz;