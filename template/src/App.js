import { useState } from 'react';
import './App.css';
import Habits from './Components/Habits';
import Navbar from './Components/Navbar';

function App() {

  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Water', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]);
  const handleIncrement = (list) => {
    const copyHabits = [...habits];
    const index = copyHabits.indexOf(list);
    copyHabits[index].count++;
    setHabits(copyHabits);
  }
  const handleDecrement = (list) => {
    const copyHabits = [...habits];
    const index = copyHabits.indexOf(list);
    const count = copyHabits[index].count - 1;
    copyHabits[index].count = count < 0 ? 0 : count;
    setHabits(copyHabits);
  }
  const handleDelete = (list) => {
    const copyHabits = habits.filter((item) => item.id !== list.id);
    setHabits(copyHabits);
  }

  const handleReset = () => {
    const copyHabits = habits.map((list) => {
      list.count = 0; return list
    })
    setHabits(copyHabits);
  }
  return (
    <div className="habit">
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onReset={handleReset}
        setHabits={setHabits}
      />
    </div>
  );
}
export default App;
