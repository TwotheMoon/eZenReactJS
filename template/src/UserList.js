import React from "react";

function User({ user }) {
    return (
        <div>
            <b>{user.username} </b>
            <span>({user.email})</span>
        </div>
    );
}
function UserList({ users }) {

    return (
        <div>
            {users.map((user) => {
                return <User key={user.id} user={user}></User>
            })}

        </div>
    );
}

export default UserList;