
function Navbar({ totalCount }) {

    return (
        <div className="navbar">
            <i className="fab fa-react"></i>
            <h1>습관 만들기</h1>
            <span className="count">{totalCount}</span>
        </div>
    );
}

export default Navbar;