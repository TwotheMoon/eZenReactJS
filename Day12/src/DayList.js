import { Link } from "react-router-dom";
import data from "./data.json";

function DayList() {
    return (
        <div>
            <ul className="list">
                {data.days.map((list) =>
                (
                    <Link key={list.id} to={`/day/${list.day}`}>
                        <li key={list.id}>Day {list.day}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default DayList;