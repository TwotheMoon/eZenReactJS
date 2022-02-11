import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="header">
            <Link to="/">
                <h1>React Cheat Sheet</h1>
            </Link>
            <div className="menu">
                <a href="#" className="link">명령 추가</a>
                <a href="#" className="link">Day 추가</a>
            </div>
        </div>
    );
}

export default Header;