import { useState } from "react";
import "./reviewForm.css";

function ReviewForm() {
    const [values, setValues] = useState({
        title: '',
        rating: 0,
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // 태그 name, value값을 가져와서
        setValues((prevValues) => ({      // 미리 만들어둔 객체안에
            ...prevValues, [name]: value  // key, value = 값으로 넣기
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setValues({
            title: '',
            rating: 0,
            content: ''
        });
    }

    return (
        <form className="reviewForm" onSubmit={handleSubmit}>
            <input name="title" placeholder="title" value={values.title} onChange={handleChange} />
            <input name="rating" type="number" value={values.rating} onChange={handleChange} />
            <textarea name="content" value={values.content} onChange={handleChange} />
            <button type="submit">확인</button>
        </form>
    );
}
export default ReviewForm;