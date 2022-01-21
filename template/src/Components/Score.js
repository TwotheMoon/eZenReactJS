import { useLocation, useParams } from "react-router-dom";

function Score() {
    const location = useLocation();
    const quizList = location.state.quizList;
    const answer = location.state.answer;

    let resultArr = [];
    for (let i = 0; i < answer.length; i++) {
        if (quizList[i].answer === answer[i]) {
            let result = true;
            resultArr.push(result);
        } else {
            let result = false;
            resultArr.push(result);
        }
        console.log(resultArr);
    }

    return (
        <div>
            <h1> 결과 점수 </h1>
            <ul>
                {quizList.map((list, i) => {
                    const result = list.answer === true ? "O" : "X";
                    return (
                        <>
                            <div>{i + 1}번 문제 정답 : {result}</div>
                        </>
                    );
                })}
                {answer.map((list, i) => {
                    const result = list === true ? "O" : "X";
                    return (
                        <>
                            <div>{i + 1}번 고른 답 : {result}</div>
                        </>
                    )
                })}
                {resultArr.map((list, i) => {
                    const result = list === true ? "정답!" : "오답ㅠ";
                    return (
                        <>
                            <div>{i + 1}번 {result}</div>
                        </>
                    );
                })}
            </ul>
        </div>
    );
}

export default Score;