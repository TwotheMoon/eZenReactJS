import { useRef } from "react";

function HabitForm({ habits, setHabits }) {
    const inputRef = useRef(null);
    const onSubmit = (e) => {
        e.preventDefault();
        let title = inputRef.current.value;
        if (!title) return;
        if (title) {
            const newHabits = {
                id: Date.now(),
                name: title,
                count: 0
            }
            title = "";
            setHabits([...habits, newHabits]);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="습관을입력" />
            <button>습관추가</button>
        </form>
    );
}

export default HabitForm;