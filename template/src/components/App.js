import './App.css';
import items from '../db/mock.json';
import ReviewList from './ReviewList';

function App() {
  const sortedItems = items.sort((a, b) => b.rating - a.rating);
  return (
    <div>
      <ReviewList items={sortedItems} />
    </div>
  );
}
export default App;
