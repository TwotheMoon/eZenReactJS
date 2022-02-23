export default async function getReviews(order = "createdAt") {
    const query = `order = ${order}`
    const response = await fetch(`http://localhost:4000/reviews?${query}`);
    const result = await response.json();
    return result;
}