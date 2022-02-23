import { useState } from "react";
import FileInput from "./FileInput";
import "./reviewForm.css";

function ReviewForm() {
    const [values, setValues] = useState({
        title: '',
        rating: 0,
        content: '',
        imgFile: null
    });

    const handleChange = (name, value) => {
        setValues((values) => ({      // 미리 만들어둔 객체안에
            ...values, [name]: value  // key, value = 값으로 넣기
        }));
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target; // 태그 name, value값을 가져와서
        handleChange(name, value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setValues({
            title: '',
            rating: 0,
            content: '',
            imgFile: ''
        });
    }


    return (
        <form className="reviewForm" onSubmit={handleSubmit}>
            <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
            <input name="title" placeholder="title" value={values.title} onChange={handleInputChange} />
            <input name="rating" type="number" value={values.rating} onChange={handleInputChange} />
            <textarea name="content" value={values.content} onChange={handleInputChange} />
            <button type="submit">확인</button>
        </form>
    );
}
export default ReviewForm;