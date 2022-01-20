import { useParams } from "react-router-dom";

function Graphics() {
    const { subject } = useParams();
    return (
        <div>
            <h1> Graphics {subject} </h1>
            <hr />
        </div>
    );
}

export default Graphics;