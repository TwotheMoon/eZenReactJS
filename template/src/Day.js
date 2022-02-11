import { useParams } from "react-router-dom";
import data from "./data.json";

function Day() {
    const { day } = useParams();
    console.log(day);
    const wordList = data.words.filter((word) => word.day === Number(day));
    return (
        <div>
            <h2>Day{day}</h2>
            <table border="1">
                <tbody>
                    {wordList.map((word) => (
                        <tr key={word.id}>
                            <td style={{ width: "20%" }}>{word.syntax}</td>
                            <td>{word.func}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Day;