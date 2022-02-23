import { useState } from "react";
import "./reviewForm.css";

function ReviewForm() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleRatingChange = (e) => {
        const nextRating = Number(e.target.value) || 0;
        setRating(nextRating);
    }
    const handleContentChange = (e) => {
        setContent(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        setRating(0);
        setContent("");
    }
    return (
        <form className="reviewForm" onSubmit={handleSubmit}>
            <input placeholder="title" value={title} onChange={handleTitleChange} />
            <input type="number" value={rating} onChange={handleRatingChange} />
            <textarea value={content} onChange={handleContentChange} />
            <button type="submit">확인</button>
        </form>
    );
}
export default ReviewForm;