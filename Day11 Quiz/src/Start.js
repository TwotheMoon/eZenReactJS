import { useHistory } from "react-router-dom";
import quiz from "./quiz.jpg"

function Start() {
    const history = useHistory();
    return (
        <div>
            <img src={quiz} alt="quiz"></img> <br />

            <button onClick={() => { history.push('/quiz') }}>start</button>
        </div>
    );
}

export default Start;