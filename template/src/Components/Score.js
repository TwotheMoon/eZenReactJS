import { useLocation, useParams } from "react-router-dom";

function Score() {
    const location = useLocation();
    const quizList = location.state.quizList;
    const answer = location.state.answer;
    console.log(quizList);

    return (
        <div>
            <h1> 결과 점수 </h1>
            <ul>
                {quizList.map((list, i) => {
                    const result = list.answer === true ? "O" : "X"
                    return (
                        <>
                            <li>{result}</li>
                        </>
                    );
                })}
                {answer.map((list, i) => {
                    const result = list === true ? "O" : "X"
                    return (
                        <>
                            <li>{i + 1}번 문제 정답 : {result}</li>
                        </>
                    )
                })}
            </ul>
        </div>
    );
}

export default Score;