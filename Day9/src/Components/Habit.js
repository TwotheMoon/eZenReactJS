function Habit({ list, onIncrement, onDecrement, onDelete }) {
    const { count, name } = list;
    const handleIncrement = () => {
        onIncrement(list);
    }
    const handleDecrement = () => {
        onDecrement(list);
    }
    const handleDelete = () => {
        onDelete(list);
    }
    return (
        <li>
            <p className='name'>{name}</p>
            <span className='count'>{count}</span>
            <button onClick={handleIncrement}>
                <i className="fas fa-plus"></i>
            </button>
            <button onClick={handleDecrement}>
                <i className="fas fa-minus"></i>
            </button>
            <button onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
}

export default Habit;