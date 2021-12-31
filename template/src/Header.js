export const Header = ((props) => {

    return (
        <header>
            <h1>{props.title}</h1>
            <p>{props.sub}</p>
        </header>
    );
});