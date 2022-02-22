export default async function getReviews() {
    const response = await fetch('http://localhost:4000/reviews');
    const result = await response.json();
    return result;
}