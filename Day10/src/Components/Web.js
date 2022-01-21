import { Link, Route, Switch, useParams } from 'react-router-dom';

const contents = [
    { id: 1, title: 'Javascript', desc: "Javascript is...." },
    { id: 2, title: 'jQuery', desc: "jQuery is...." },
    { id: 3, title: 'React', desc: "React is...." },
];

const Subject = () => {
    const params = useParams();
    const subjectId = params.subject;

    console.log(params)
    console.log(subjectId)

    const selectedSubject = contents.filter((list) => Number(subjectId) === list.id);
    return (
        <>
            <h3>{selectedSubject[0].title}</h3>
            <p>{selectedSubject[0].desc}</p>
        </>
    );
}

function Web() {

    return (
        <div>
            <h1>Web</h1>
            <hr />
            <ul>
                {contents.map((list, i) => {
                    return (
                        <Link key={list.id} to={'/web/' + (i + 1)}>
                            <li>{list.title}</li>
                        </Link>
                    );
                })}
            </ul>
            <Switch>
                <Route path={`/web/:subject`}>
                    <Subject />
                </Route>
            </Switch>
        </div>
    );
}

export default Web;