import './reviewListItem.css'

const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDay()}`
}

function ReviewListItem({ item, handleDelete }) {

    return (
        <div>
            <section className="reviewListItem">
                <img src={item.imgUrl} className="reviewListItemImg" />
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.rating}</p>
                    <p>{formatDate(item.createdAt)}</p>
                    <p>{item.content}</p>
                    <button onClick={() => handleDelete(item.id)}>삭제</button>
                </div>
            </section>
        </div>
    );
}

function ReviewList({ items, handleDelete }) {

    return (
        <ul>
            {items.map((item) => (<li key={item.id}><ReviewListItem item={item} handleDelete={handleDelete} /></li>))}
        </ul>
    );
}

export default ReviewList;