import './App.css';
import ReviewList from './ReviewList';
import { useEffect, useState } from "react";
import getReviews from '../fetch';

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const onRecentClick = () => setOrder("createdAt");
  const onBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  const handleLoad = async () => {
    const reviews = await getReviews();
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <button onClick={onRecentClick}>최신순</button>
      <button onClick={onBestClick}>베스트순</button>
      <ReviewList items={sortedItems} handleDelete={handleDelete} />
    </div>
  );
}
export default App;
