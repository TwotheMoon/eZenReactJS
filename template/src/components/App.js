import './App.css';
import ReviewList from './ReviewList';
import { useEffect, useState } from "react";
import getReviews from '../fetch';
import ReviewForm from './ReviewForm';

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const onRecentClick = () => setOrder("createdAt");
  const onBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  const handleLoad = async (orderQuery) => {
    const reviews = await getReviews(orderQuery);
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <button onClick={onRecentClick}>최신순</button>
      <button onClick={onBestClick}>베스트순</button>
      <ReviewForm />
      <ReviewList items={sortedItems} handleDelete={handleDelete} />
    </div>
  );
}
export default App;
