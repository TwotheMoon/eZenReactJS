import { useRef } from "react";

function HabitForm({ habits, setHabits }) {
    const inputRef = useRef(null);
    const onSubmit = (e) => {
        e.preventDefault();
        const newHabits = {
            id: Date.now(),
            name: inputRef.current.value,
            count: 0
        }
        setHabits([...habits, newHabits]);
    }

    return (
        <form onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="습관을입력" />
            <button>습관추가</button>
        </form>
    );
}

export default HabitForm;