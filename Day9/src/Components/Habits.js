import Habit from "./Habit";
import React from "react"
import HabitForm from "./HabitForm";

function Habits({ habits, onIncrement, onDecrement, onDelete, onReset, setHabits }) {

    const handleIncrement = (list) => {
        onIncrement(list);
    }
    const handleDecrement = (list) => {
        onDecrement(list);
    }
    const handleDelete = (list) => {
        onDelete(list);
    }
    return (
        <>
            <HabitForm habits={habits} setHabits={setHabits} />
            {habits.map((list) => {
                return <Habit key={list.id} list={list}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                />
            })}
            <button className="btn btn-danger" onClick={onReset}>Reset All</button>
        </>
    );
}

export default Habits;