import './reviewListItem.css'

const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDay()}`
}

function ReviewListItem({ list }) {

    return (
        <div>
            <section className="reviewListItem">
                <img src={list.imgUrl} className="reviewListItemImg" />
                <div>
                    <h2>{list.title}</h2>
                    <p>{list.rating}</p>
                    <p>{formatDate(list.createdAt)}</p>
                    <p>{list.content}</p>
                </div>
            </section>
        </div>
    );
}

function ReviewList({ items }) {

    return (
        <ul>
            {items.map((list) => (<li key={list.id}><ReviewListItem list={list} /></li>))}

        </ul>
    );
}

export default ReviewList;