import { useHistory } from "react-router-dom";

function NotFound() {
    const history = useHistory();
    return (
        <div>
            <h2 onClick={() => history.push('/')}>주소가 올바르지 않아요!</h2>
        </div>
    );
}

export default NotFound;