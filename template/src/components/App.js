import './App.css';
import items from '../db/mock.json';
import ReviewList from './ReviewList';
import { useState } from "react";

function App() {
  const [order, setOrder] = useState();
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const onRecentClick = () => {
    setOrder("createdAt");
  }
  const onBestClick = () => {
    setOrder("rating");
  }
  return (
    <div>
      <button onClick={onRecentClick}>최신순</button>
      <button onClick={onBestClick}>베스트순</button>
      <ReviewList items={sortedItems} />
    </div>
  );
}
export default App;
