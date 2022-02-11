import { Link } from "react-router-dom";

function Start() {

    return (
        <div>
            건강상식퀴즈에 대해 얼마나 알고 계세요?
            <Link to="/quiz">
                <button> Start </button>
            </Link>
        </div>
    );
}

export default Start;