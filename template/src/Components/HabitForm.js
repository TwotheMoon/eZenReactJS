import { useRef } from "react";

function HabitForm({ setHabits }) {
    const inputRef = useRef(null);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTitle = inputRef.current.value;

        setHabits((list) => {
            console.log(list);
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="습관을입력" />
            <button>습관추가</button>
        </form>
    );
}

export default HabitForm;